import { Skills } from "@/lib/types";
import Image from "next/image";

const devIcons: { title: Skills; filePath: string }[] = [
  { title: "JavaScript", filePath: "/dev-logos/javascript.svg" },
  { title: "TypeScript", filePath: "/dev-logos/typescript.svg" },
  { title: "React", filePath: "/dev-logos/react.svg" },
  { title: "PHP", filePath: "/dev-logos/php.svg" },
  { title: "Next.js", filePath: "/dev-logos/nextjs.png" },
  { title: "Node.js", filePath: "/dev-logos/nodejs.svg" },
  { title: "HTML", filePath: "/dev-logos/html.svg" },
  { title: "CSS", filePath: "/dev-logos/css.svg" },
  { title: "Sass", filePath: "/dev-logos/sass.svg" },
  { title: "Tailwind CSS", filePath: "/dev-logos/tailwind.svg" },
  { title: "Python", filePath: "/dev-logos/python.svg" },
  { title: "MongoDB", filePath: "/dev-logos/mongodb.svg" },
  { title: "PostgreSQL", filePath: "/dev-logos/postgresql.svg" },
  { title: "Redis", filePath: "/dev-logos/redis.svg" },
  { title: "Selenium", filePath: "/dev-logos/selenium.svg" },
  { title: "Mocha", filePath: "/dev-logos/mocha.svg" },
  { title: "Linux", filePath: "/dev-logos/linux.svg" },
  { title: "Docker", filePath: "/dev-logos/docker.svg" },
  { title: "AWS", filePath: "/dev-logos/aws.svg" },
  { title: "Git", filePath: "/dev-logos/git.svg" },
  { title: "Figma", filePath: "/dev-logos/figma.svg" },
];

export const DevLogos = () => {
  return devIcons.map((devIcon) => {
    return (
      <Image
        key={devIcon.title}
        src={devIcon.filePath}
        alt={devIcon.title}
        width={60}
        height={60}
        title={devIcon.title}
      />
    );
  });
};
