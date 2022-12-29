import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import createServerSupabase from "utils/supabase.server";

import Login from "components/login";

import type { LoaderArgs } from "@remix-run/node";

export const action = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = createServerSupabase({ request, response });

  const { message } = Object.fromEntries(await request.formData());

  const { error } = await supabase.from("messages").insert({ content: String(message) });

  if (error) {
    console.log(error);
  }
  return json(null, { headers: request.headers });
};

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = createServerSupabase({ request, response });

  const { data } = await supabase.from("messages").select();

  return json({ messages: data ?? [] }, { headers: request.headers });
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  return (
    <main>
      <Login />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
      <Form method="post">
        <input type="text" name="message" />
        <button type="submit">send</button>
      </Form>
    </main>
  );
}
