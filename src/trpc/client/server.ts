import { t, trpcRootRouter } from "@/trpc/api";

const createCaller = t.createCallerFactory(trpcRootRouter);
export const trpcServerApi = createCaller({
  appName: "trpc-next-example",
});
