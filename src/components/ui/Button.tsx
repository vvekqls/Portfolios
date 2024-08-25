import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "solid" | "outline";
  href?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  colorScheme?: "blue" | "orange" | "green" | "silver";
  domProps?: { [key: string]: any };
  children: React.ReactNode;
}

export const Button = ({
  variant = "solid",
  href = "",
  size = "md",
  colorScheme = "green",
  domProps = {},
  children,
}: ButtonProps) => {
  const styles = cn(
    "text-inherit border border-solid rounded-md inline-flex items-center justify-center font-semibold leading-4 transition-all duration-150 ease-in-out cursor-pointer",
    variant,
    `size-${size}`,
    `colorScheme-${colorScheme}`,
  );

  return (
    <>
      {href ? (
        <a href={href}>
          <button className="inline-flex items-center rounded bg-orange-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
            <svg
              className="mr-2 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>{children}</span>
          </button>
        </a>
      ) : (
        <button className={styles} {...domProps}>
          {children}
        </button>
      )}
    </>
  );
};
