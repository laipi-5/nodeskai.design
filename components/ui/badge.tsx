const typeStyles = {
  feature: "bg-foreground/8 text-text-primary",
  improvement: "bg-foreground/8 text-text-primary",
  fix: "bg-foreground/8 text-text-primary",
  breaking: "bg-foreground/8 text-text-primary",
  default: "bg-foreground/8 text-text-primary",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof typeStyles;
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeStyles[variant]}`}
    >
      {children}
    </span>
  );
}
