import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  return {
    appName: "trpc-next-example",
  };
};

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
