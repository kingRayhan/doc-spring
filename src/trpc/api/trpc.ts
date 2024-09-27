import { initTRPC } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  return {
    appName: "trpc-next-example",
    ...opts,
  };
};

export const t = initTRPC.create();
export const publicProcedure = t.procedure;
export const createRouter = t.router;
