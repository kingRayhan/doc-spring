"use client";

import { trpcClientApi } from "@/trpc/client/client";

const DashboardPage = () => {
  const pingQuery = trpcClientApi.ping.pingQuery.useQuery({
    name: "John",
  });
  // const secretQuery = trpcClientApi.ping.secretQuery.useQuery();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify({ pingQuery: pingQuery.data }, null, 2)}</pre>
      {/*<pre>{JSON.stringify({ secretQuery: secretQuery.data }, null, 2)}</pre>*/}
    </div>
  );
};

export default DashboardPage;
