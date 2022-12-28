import { useLoaderData } from "@remix-run/react";
import supabasae from "utils/supabasae";

import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({}: LoaderArgs) => {
  const { data } = await supabasae.from("messages").select();

  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  return <pre>{JSON.stringify(messages, null, 2)}</pre>;
}
