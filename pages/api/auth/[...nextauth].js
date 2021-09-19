import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma from "../../../lib/prisma";
import { redirect } from "next/dist/server/api-utils";

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
  callbacks: {
    session: async (session, user, _sessionToken) => {
      session.user.id = user.id;
      session.user.kollektivId = user.kollektivId;
      return Promise.resolve(session);
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
  },
};
