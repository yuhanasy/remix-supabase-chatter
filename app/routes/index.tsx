import { useLoaderData } from "@remix-run/react";
import supabasae from "utils/supabase";

import type { LoaderArgs } from "@remix-run/node";
import Login from "components/login";

export const loader = async ({}: LoaderArgs) => {
  const { data } = await supabasae.from("messages").select();

  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  return (
    <main>
      <Login />
      <pre>{JSON.stringify(messages, null, 2)}</pre>;
    </main>
  );
}
