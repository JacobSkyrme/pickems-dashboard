import CrystalCard from "@/app/components/CrystalCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: crystalCards } = await supabase.from("crystal-cards").select().order('id', { ascending: true })


  
  return (
    <div className="w-full flex flex-col items-center">

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-full px-3 py-16 lg:py-24 text-foreground">
        <h2 className="mb-4 pl-10  text-8xl font-extrabold  md:text-8xl lg:text-8xl dark:text-white">Event</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(0, 5).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-foreground" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>
        <h2 className="mb-4 pl-10  text-8xl font-extrabold  md:text-8xl lg:text-8xl dark:text-white">Champions</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(5, 10).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-foreground" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>
        <h2 className="mb-4 pl-10  text-8xl sm:grid-cols-2 md:grid-cols-3 font-extrabold  md:text-8xl lg:text-8xl dark:text-white">Players</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(10, 15).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-foreground" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 pl-10 text-8xl sm:grid-cols-2 md:grid-cols-3 font-extrabold  md:text-8xl lg:text-8xl dark:text-white">Teams</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(15, 20).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-foreground" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>

      </div>
      
      <p className="mb-3 text-gray-500 dark:text-gray-400">Copyright © 2023 - Pickems Tracker</p>
    
      <p className="mb-3 text-gray-500 dark:text-gray-400">Pickems Tracker is not endorsed by Riot Games.</p>
      <p className="mb-3 text-gray-500 dark:text-gray-400">This data is an estimation of the pickems results. There may be inaccuracies  in the calculation and data submission process.</p>
    </div>
  );
}