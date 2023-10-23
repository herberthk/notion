import React from "react";

import { cn } from "@/lib/utils";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/5", className)}
      {...props}
    />
  );
};

export { Skeleton };
