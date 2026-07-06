interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const lineColor = variant === "light" ? "bg-white/40" : "bg-navy/30";

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="8" y="12" width="8" height="24" rx="1" fill="#D69A2D" />
        <rect x="18" y="8" width="8" height="28" rx="1" fill={variant === "light" ? "#FFFFFF" : "#0B2D5C"} />
        <rect x="28" y="14" width="8" height="22" rx="1" fill="#D69A2D" />
        <path
          d="M6 38H38"
          stroke={variant === "light" ? "#FFFFFF" : "#0B2D5C"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span
          className={`text-lg font-extrabold leading-none tracking-tight ${textColor}`}
        >
          METROCRAFT
        </span>
        <div className="mt-1 flex items-center gap-2">
          <span className={`h-px w-3 ${lineColor}`} />
          <span
            className={`text-[10px] font-semibold tracking-[0.25em] ${textColor}`}
          >
            GROUP
          </span>
          <span className={`h-px w-3 ${lineColor}`} />
        </div>
      </div>
    </a>
  );
}
