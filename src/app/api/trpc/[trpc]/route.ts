import { trpcRootRouter } from "@/trpc/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: trpcRootRouter,
  });
};

export { handler as GET, handler as POST };
