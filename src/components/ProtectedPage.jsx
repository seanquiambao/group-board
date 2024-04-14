"use client";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";

const ProtectedPage = ({ children }) => {
  const pathname = usePathname();
  const regex = new RegExp("/room/*");
  const header = regex.test(pathname);
  return (
    <div className="flex flex-col h-screen">
      {!header && <Navigation />}
      {children}
    </div>
  );
};

export default ProtectedPage;
