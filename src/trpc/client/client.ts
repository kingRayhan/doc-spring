import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/trpc/api";

export const trpcClientApi = createTRPCReact<AppRouter>({});
