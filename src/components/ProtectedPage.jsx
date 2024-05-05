"use client";
import Navigation from "@/components/Navigation";
import Loading from "@/components/Loading";
import { usePathname } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const ProtectedPage = ({ children }) => {
  const pathname = usePathname();
  const regex = new RegExp("/room/*");
  const header = regex.test(pathname);
  const { status } = useSession();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }
    setConfirmed(true);
  }, [status]);

  return (
    <>
      {status === "loading" && <Loading />}
      {confirmed && (
        <div className="flex flex-col h-screen">
          {!header && <Navigation />}
          {children}
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
