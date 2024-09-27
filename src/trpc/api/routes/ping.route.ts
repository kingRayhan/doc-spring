import { createTrpcRouter, trpcPublicProcedure } from "@/trpc/api/trpc.server";
import { z } from "zod";

export default createTrpcRouter({
  pingQuery: trpcPublicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello ${input.name}`,
      };
    }),

  pingMutation: trpcPublicProcedure
    .input(
      z.object({
        message: z.string(),
      }),
    )
    .mutation(({ input }) => {
      return {
        message: input.message,
      };
    }),
});
