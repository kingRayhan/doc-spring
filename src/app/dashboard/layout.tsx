import React, { PropsWithChildren } from "react";
import DashboardLayout from "@/components/dashboardLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const DashboardLayoutRoot: React.FC<PropsWithChildren> = async ({
  children,
}) => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    redirect("/");
  }

  return <DashboardLayout authUser={user}>{children}</DashboardLayout>;
};

export default DashboardLayoutRoot;
