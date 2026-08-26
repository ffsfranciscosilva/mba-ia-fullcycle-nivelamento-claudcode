import type { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

type BadgeVariant = "primary" | "neutral" | "danger" | "success";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClass: Record<BadgeVariant, string> = {
  primary: styles.primary,
  neutral: styles.neutral,
  danger: styles.danger,
  success: styles.success,
};

export default function Badge({
  variant = "neutral",
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={[styles.badge, variantClass[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}
