import CrystalCard from "@/app/components/CrystalCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: crystalCards } = await supabase.from("crystal-cards-2024").select().order('id', { ascending: true })

  const { data: lastGame } = await supabase.rpc("last_game").limit(1)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in flex flex-col gap-4 opacity-0 max-w-full px-3 py-16 lg:pb-12 lg:pt-24 text-white">
      <h2 className="mb-4 pl-10 text-center  text-6xl font-extrabold md:text-6xl lg:text-6xl text-white">Pickems Tracker Will No Longer Be Maintaineed </h2>

      <p className="text-center mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 mb-10 justify">I will no longer be maintaining pickems tracker since the release of <a href="https://dpm.lol/pickems" className="text-white">DPM.lol Pickems</a></p>
        <p className="text-center mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 mb-10 justify">Created by Tog (.Tog on Discord if you want to contract me.)</p>
        
        <div className="flex justify-center">
          <div className="max-w-sm mx-1 relative snap-center flex flex-col group rounded-lg border p-4 hover:border-white card-border">
            <Link href="/worlds2023">Worlds 2023 Pickems</Link>
          </div>
        </div>  
      </div>

    </div>
  );
}
