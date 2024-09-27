import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/trpc/api/root-router";

export const trpcClientApi = createTRPCReact<AppRouter>({});
