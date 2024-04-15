import NextAuth from "next-auth/next";
import googleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    googleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
