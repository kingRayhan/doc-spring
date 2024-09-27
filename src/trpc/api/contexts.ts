import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const initTRPCContext = async (opts: { req: Request }) => {
  const { getUser, getStringFlag } = getKindeServerSession();
  const sessionUser = await getUser();
  const sessionUserId = await getStringFlag("uuid", sessionUser.id);

  return {
    ...opts,
    sessionUser,
    sessionUserId,
  };
};

export type TContext = Awaited<ReturnType<typeof initTRPCContext>>;
