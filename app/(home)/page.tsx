import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = (): React.JSX.Element => {
  const { userId } = auth();

  if (userId) {
    return redirect("/documents");
  }
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
