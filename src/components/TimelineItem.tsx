import Image from "next/image";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  isCurrent?: boolean;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  logo: string;
  responsibilities: string[];
  workLocation: "Remote" | "On-Site" | "Hybrid";
}

export const TimelineItem = ({
  isCurrent,
  title,
  company,
  startDate,
  endDate,
  logo,
  responsibilities,
  workLocation,
}: TimelineItemProps) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Initial calculations for year and month differences
  let yearDifference = end.getFullYear() - start.getFullYear();
  let monthDifference = end.getMonth() - start.getMonth();

  // Check if end date is earlier in the year than start date
  const isEndDateEarlierInYear =
    monthDifference < 0 ||
    (monthDifference === 0 && end.getDate() < start.getDate());

  if (isEndDateEarlierInYear) {
    yearDifference--;
    monthDifference += 12;
  }

  // The final number of years and months
  const years = yearDifference;
  const months = monthDifference;

  return (
    <div
      className={cn(
        `relative flex gap-6 border-b border-l-[10px]
        border-b-gray-500/[0.15]
         border-l-gray-500/[0.15] bg-green-50/[0.05]
          p-5 text-left md:flex-col ${isCurrent ? "border-l-green-400/[0.30]" : ""}`,
      )}
    >
      <Image className="h-12" width={40} height={40} src={logo} alt={company} />
      <div>
        <div className="text-silver-200 flex flex-wrap items-center gap-1.5 text-2xl font-semibold">
          {title}
          <span className="text-silver-800 mx-0.5">/</span>
          <span className="text-silver-300 text-lg">{company}</span>
          <span className="text-silver-800 mx-0.5">/</span>
          <span
            className={`rounded-md px-2.5 py-0.5 text-sm text-white ${workLocation === "Remote" ? "bg-[#73007e]" : workLocation === "On-Site" ? "bg-[#0048b3]" : "bg-gradient-to-r from-[#73007e] to-[#0048b3]"}`}
          >
            {workLocation}
          </span>
        </div>
        <p className="text-silver-300 mt-0 font-['IBM_Plex_Mono'] text-base">
          {startDate} - {endDate || "Present"}{" "}
          <span className="text-silver-400 text-sm">
            / {years > 0 && `${years}y`} {months > 0 && `${months}m`}
          </span>
        </p>
        <ul className="text-silver-400 pl-4 text-lg leading-6">
          {responsibilities.map((responsibility, idx) => (
            <li
              key={idx}
              className="my-2 before:pr-3 before:text-green-700 before:content-['►']"
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
