import { z } from "zod";
import { createRouter, publicProcedure } from "@/trpc/api/trpc";

export default createRouter({
  pingQuery: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input, ctx }) => {
      return {
        message: `Hello ${input.name}`,
        name: JSON.stringify(ctx),
      };
    }),
  pingMutation: publicProcedure
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
  secretQuery: publicProcedure.query(({ ctx }) => {
    return {
      message: `Hello secondQuery`,
    };
  }),
});
