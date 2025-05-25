import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
// import Nodemailer from "next-auth/providers/nodemailer";

const providers: Provider[] = [
  Google,
  // Nodemailer({
  //   server: process.env.EMAIL_SERVER,
  //   from: process.env.EMAIL_FROM,
  // }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (account?.provider === "google") {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
