import Loader from "@/components/loader/PageLoader";
import React, { Suspense } from "react";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto mt-24 mb-20">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default MainLayout;
