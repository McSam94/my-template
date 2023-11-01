import * as React from "react";
import classNames from "classnames";

export interface ButtonProps extends React.ComponentProps<"button"> {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ className, variant = "primary", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(
        "py-2 px-5 text-center rounded-lg uppercase",
        {
          "bg-primary hover:bg-primary/75 text-white": variant === "primary",
          "bg-secondary hover:bg-secondary/75 text-white":
            variant === "secondary",
          "border border-primary hover:bg-primary text-primary hover:text-white":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
