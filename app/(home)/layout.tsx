import type { FC } from "react";
import React from "react";

import { Navbar } from "./_components/navbar";
type Props = {
  children: React.ReactNode;
};
const MarketingLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
