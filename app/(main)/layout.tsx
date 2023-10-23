"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import type { FC } from "react";
import React from "react";

import { SearchCommand } from "@/components/search-command";
import { Spinner } from "@/components/spinner";

import { Navigation } from "./_components/navigation";
type Props = {
  children: React.ReactNode;
};
const MainLayout: FC<Props> = ({ children }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
