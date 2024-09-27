import { createTrpcRouter } from "./trpc.server";
import pingRoute from "@/trpc/api/routes/ping.route";

export const trpcRootRouter = createTrpcRouter({
  ping: pingRoute,
});

export type AppRouter = typeof trpcRootRouter;
