import Link from "next/link";
import { House, Linkedin, BadgeInfo } from "lucide-react";
import AIChatButton from "./AiChatButton";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium flex">
          <Link href="/">
            <div className="flex flex-col justify-center items-center text-center">
              <House />
              <span>Home</span>
            </div>
          </Link>
          <Link href="/about">
            <div className="flex flex-col justify-center items-center text-center">
              <BadgeInfo />
              <span>About</span>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/david-song-aa70b317a/">
            <div className="flex flex-col justify-center items-center text-center">
              <Linkedin />
              <span>Linkedin</span>
            </div>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
