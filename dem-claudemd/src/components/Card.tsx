import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  children?: ReactNode;
}

export default function Card({
  header,
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={[styles.card, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {header ? <div className={styles.header}>{header}</div> : null}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
