import { H2 } from "@/components/ui/H2";
import { DevLogos } from "@/components/DevLogos";
import { TimelineItem } from "@/components/TimelineItem";

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
      <section className="space-y-3">
        <H2 className="sub-heading">Experience</H2>

        <div className="flex flex-col ">
          <TimelineItem
            company="Econify"
            workLocation="Remote"
            title="Mid Software Developer - Consultant"
            startDate="Jan 2020"
            endDate="June 2024"
            logo="/Econify.png"
            responsibilities={[
              "Generated JSON web tokens using randomly generated keys, which removed the need to store sessions in the server.",
              "Implemented route utilities for protected and authenticated frontend routes by reading authentication information from client state and redirecting users appropriately.",
              "Consultant company that specializes in building high-performance websites efficiently, often delivering results from day one.",
              "Engineered custom software solutions for clients, reducing operational costs by 25% through the integration of advanced algorithms and efficient backend systems using Python, SQL, and AWS over a 12-month period.",
            ]}
          />

          <TimelineItem
            company="NBC"
            workLocation="Remote"
            title="Mid Software Developer"
            startDate="June 2022"
            endDate="Dec 2022"
            logo="/NBCU.png"
            responsibilities={[
              "Collaborated with a cross-functional team to deliver live primary and midterm election coverage.",
              "Improved performance of the application by moving costly computations into a centralized Vuex store.",
              "Created and enhanced D3 donut charts to preview exit poll data before final election results were in.",
              "Leveraged Websocket.io to stream data real-time into D3 charts on live television.",
              "Optimized caching strategies, including HTTP caching, CDN integration, and front-end caching with Service Workers, resulting in significantly reduced API response times and enhanced website performance.",
              "Developed a robust API using Node and Express, reducing integration time by 30% and facilitating seamless data exchange between client and server applications.",
            ]}
          />

          <TimelineItem
            company="CNBC"
            workLocation="Remote"
            title="Software Developer"
            startDate="Oct 2021"
            endDate="June 2022"
            logo="/CNBC.png"
            responsibilities={[
              "Guided and instructed the team for migration of a large suite of tests from Enzyme to React Testing Library.",
              "Parallelized the Cypress test suite to reduce continuous integration runtimes.",
              "Refactored global event bus to reduce app-wide event/action bottlenecks.",
              "Migrated JavaScript React components to TypeScript React components.",
              "Enhanced the live TV schedule page, resulting in a 30% faster data retrieval and display by implementing Axios for asynchronous updates and optimizing backend database queries using GraphQL.",
            ]}
          />

          <TimelineItem
            company="Discovery Network"
            workLocation="Hybrid"
            title="Junior Software Developer"
            startDate="Jan 2020"
            endDate="Sep 2021"
            logo="/MOTORTREND.png"
            responsibilities={[
              "Co-lead developer on editorial curation tool built with React, Redux-Saga, and Node.js.",
              "Developed React components for a website receiving 4 million unique visitors per week.",
              "Performed an audit and rewrite of MotorTrend's entire stack, resulting in a 650% performance increase and a 35% revenue spike. We drove costs down while driving web performance and ad viewability.",
              "Extended GraphQL queries for consuming client applications.",
              "Improved Google Pagespeed Insight CLS scores.",
              "Maintained Google AMP-compliant page templates.",
            ]}
          />
        </div>
      </section>
    </section>
  );
};

export default About;
