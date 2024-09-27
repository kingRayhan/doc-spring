import pingRoute from "@/trpc/api/routes/ping.route";
import { createRouter } from "@/trpc/api/trpc";

export const trpcRootRouter = createRouter({
  ping: pingRoute,
});

export type AppRouter = typeof trpcRootRouter;
