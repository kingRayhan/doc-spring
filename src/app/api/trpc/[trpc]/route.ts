import { trpcRootRouter } from "@/trpc/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { initTRPCContext } from "@/trpc/api/contexts";

const handler = (request: Request) => {
  return fetchRequestHandler({
    createContext: () => initTRPCContext({ req: request }),
    endpoint: "/api/trpc",
    req: request,
    router: trpcRootRouter,
  });
};

export { handler as GET, handler as POST };
