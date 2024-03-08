import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

type ExtendedProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> & { fullWidth?: boolean };

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  ExtendedProps
>(
  (
    {
      className,
      orientation = "horizontal",
      fullWidth = true,
      decorative = true,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal"
          ? fullWidth === true
            ? "h-[1px] w-full"
            : "h-[1px]"
          : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
