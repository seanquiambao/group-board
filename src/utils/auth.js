import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const authenticate = async () => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    return { message: "Invalid Authentication Credentials.", auth: 401 };
  }

  return {
    message: null,
    auth: 200,
    user: session.user,
  };
};
