import { trpcRootRouter } from "@/trpc/api/root-router";
import { t } from "@/trpc/api/trpc.server";

const createCaller = t.createCallerFactory(trpcRootRouter);
export const trpcServerApi = createCaller({});
