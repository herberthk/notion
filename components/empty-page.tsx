import Image from "next/image";
import React from "react";

const EmptyPage = (): React.JSX.Element => {
  return (
    <>
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">No page available</h2>
    </>
  );
};

export default EmptyPage;
