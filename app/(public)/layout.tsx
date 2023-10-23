import type { FC } from "react";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const PublicLayout: FC<Props> = ({ children }) => {
  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
