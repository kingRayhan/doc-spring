import { initTRPC } from "@trpc/server";

export const t = initTRPC.create();

export const createTrpcRouter = t.router;
export const trpcPublicProcedure = t.procedure;
