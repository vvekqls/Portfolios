import { Metadata } from "next";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import me from "@/assets/DavidSong.png";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "David Song - My Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">
            Hi, I&apos;m David Song 👋
          </H1>
          <p className="text-center sm:text-start">
            I&apos;m a passionate developer but more importantly I&apos;m
            passionate about technology. Throughout my entire education,
            I&apos;ve pushed boundaries due to my intellectual curiosity. I
            personally enjoyed seeking answers to intriguing problems and
            learning new technologies.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="David Song"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me</H2>
        <p>
          Click the <Bot className="inline pb-1" /> icon in the top bar to
          activate the AI chat. You can ask the chatbot any question about me
          and it will find the relevant information on this Portfolio website.
          The bot can provide links to pages you&apos;re looking for.
        </p>
      </section>
      <section className="space-y-3">
        <Button
          variant="outline"
          size="md"
          colorScheme="orange"
          href="/David_Song.pdf"
        >
          Download Résumé
        </Button>
      </section>
    </section>
  );
}
