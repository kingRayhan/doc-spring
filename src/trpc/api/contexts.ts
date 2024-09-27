export const initTRPCContext = async (opts: { req: Request }) => {
  return {
    ...opts,
    appName: "trpc-next-example",
  };
};

export type TContext = Awaited<ReturnType<typeof initTRPCContext>>;
