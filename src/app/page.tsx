import { Metadata } from "next";
import { H1 } from "@/componnents/ui/H1";
import Image from "next/image";

export const metadata: Metadata = {
  title: "David Song - My Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1>Title</H1>
        </div>
      </section>
    </section>
  );
}
