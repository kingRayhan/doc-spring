import { initTRPC } from "@trpc/server";
import { TContext } from "@/trpc/api/contexts";

export const t = initTRPC.context<TContext>().create();
export const publicProcedure = t.procedure;
export const createRouter = t.router;
