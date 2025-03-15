import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

function layout({ children }: { children: React.ReactNode }) {
  0;
  return (
    <div className="px-5">
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray"/>}>{children}</Suspense>
    </div>
  );
}

export default layout;
