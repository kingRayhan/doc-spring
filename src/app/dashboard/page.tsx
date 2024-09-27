"use client";

import { trpcClientApi } from "@/trpc/client/client";

const DashboardPage = () => {
  const _api = trpcClientApi.ping.pingQuery.useQuery({
    name: "John",
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(_api.data, null, 2)}</pre>
    </div>
  );
};

export default DashboardPage;
