import { useId, type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        id={inputId}
        className={[styles.input, error ? styles.inputError : ""]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        {...rest}
      />
      {error ? (
        <p id={errorId} className={styles.errorText}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
