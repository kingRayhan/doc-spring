import { z } from "zod";
import { createRouter, publicProcedure } from "@/trpc/api/trpc";

export default createRouter({
  pingQuery: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello ${input.name}`,
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
