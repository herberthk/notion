import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
const PagesSkeleton = (): React.JSX.Element => {
  return (
    <>
      <Skeleton className="h-36 w-full" />
      <Skeleton className="h-36 w-full" />
      <Skeleton className="h-36 w-full" />
      <Skeleton className="h-36 w-full" />
    </>
  );
};

export default PagesSkeleton;
