import { H2 } from "@/components/ui/H2";
import { DevLogos } from "@/components/DevLogos";

const About = () => {
  return (
    <section className="space-y-3 text-center">
      <H2>Skill Sets</H2>
      <p>
        I am proficient in a variety of technologies including JavaScript,
        TypeScript, React, HTML, and CSS. I have a keen interest in design and
        UI/UX, and I also have experience with back end development using
        Node/Express.js, SQL/NoSQL, and REST/GraphQL.
      </p>
      <section className="group relative my-14 flex select-none gap-6 overflow-hidden">
        <div className="animate-scroll group-hover:pause-motion flex min-w-full flex-shrink-0 justify-around gap-6">
          <DevLogos />
        </div>

        {/* <div aria-hidden="true" className="marquee-content">
          <DevLogos />
        </div> */}
      </section>
    </section>
  );
};

export default About;
