import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`container-main ${className}`}>{children}</div>
  );
}

interface SectionHeaderProps {
  label: string;
  heading: string;
  align?: "center" | "left";
  action?: ReactNode;
}

export function SectionHeader({
  label,
  heading,
  align = "center",
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex flex-col gap-4 ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      } ${action ? "lg:flex-row lg:items-end lg:justify-between" : ""}`}
    >
      <div className={align === "center" ? "max-w-3xl" : ""}>
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading text-balance">{heading}</h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
