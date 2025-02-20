import React from "react";
import { Navbar } from "../components/";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};
