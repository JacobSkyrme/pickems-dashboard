import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Test() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: players } = await supabase.from("players").select();

  console.log(players)

  return (
    <ul className="my-auto text-foreground">
      {players?.map((player) => (
        <li key={player.id}>{player.champion}</li>
      ))}
    </ul>
  );
}