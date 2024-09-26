import CrystalCard from "@/app/components/CrystalCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: crystalCards } = await supabase.from("crystal-cards").select().order('id', { ascending: true })

  const { data: lastGame } = await supabase.rpc("last_game").limit(1)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in flex flex-col gap-4 opacity-0 max-w-full px-3 py-16 lg:pb-12 lg:pt-24 text-white">
      <h1 className="mb-4 pl-10 text-center  text-6xl font-extrabold md:text-6xl lg:text-6xl text-white">Worlds 2023 Pickems Tracker</h1>
        <div className="flex flex-col	max-w-5xl">
        <div className="last-game-row">
        <h4 className="text-2xl font-bold md:text-2xl lg:text-2xl text-white">Last Game</h4>
          {lastGame[0].team1_name ? <img className={lastGame[0].team1_result === 1 ? "mini-icon team-win text-white" : "team-icon team-loss text-white"} alt={lastGame[0].team1_name} src={`/static/team_logos/${lastGame[0].team1_name.toLowerCase()}.jpg`} /> : null}
          <span className="card-value text-center">vs</span>
          {lastGame[0].team2_name ? <img className={lastGame[0].team2_result === 1 ? "mini-icon team-win text-white" : "team-icon team-loss text-white"} alt={lastGame[0].team2_name} src={`/static/team_logos/${lastGame[0].team2_name.toLowerCase()}.jpg`} /> : null}

          <span className="text-left font-bold">Game {lastGame[0].game}</span>

        </div>


        <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 mb-10 justify">
          Welcome to The Worlds 2023 Pickems Tracker. This website is designed to estimate the Worlds 2023 Crystal Ball results. It should be noted that the information here is an estimation and the final result may be different. All values are automatically calculated from <a href="https://oracleselixir.com/" className="text-white">Oracle Elixer</a> match data. The only data manually entered is baron steals.</p>
          <div className="flex justify-center">
          <div className="max-w-sm mx-1 relative snap-center flex flex-col group rounded-lg border p-4 hover:border-white card-border">
            <Link href="/">Worlds 2023 Pickems</Link>
          </div>
          <div className="max-w-sm mx-1 relative snap-center flex flex-col group rounded-lg border p-4 hover:border-white card-border">
            <Link href="../">Worlds 2024 Pickems</Link>
          </div>
        </div>
        </div>



      </div>
      <div className="animate-in flex flex-col gap-10 opacity-0 max-w-full px-3 lg:pb-24 text-white">
        <h2 className="mb-4 md:pl-10 xl:p-10  text-4xl font-extrabold  md:text-6xl lg:text-8xl text-white">Event</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(0, 5).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-white card-border" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>
        <h2 className="mb-4 md:pl-10 xl:p-10  text-4xl font-extrabold  md:text-6xl lg:text-8xl text-white">Champions</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(5, 10).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-white card-border"  key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>
        <h2 className="mb-4 md:pl-10 xl:p-10 text-4xl font-extrabold  md:text-6xl lg:text-8xl text-white">Players</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(10, 15).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-white card-border" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 md:pl-10 xl:p-10 text-4xl font-extrabold  md:text-6xl lg:text-8xl text-white">Teams</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          {crystalCards?.slice(15, 20).map((crystalCard) => (
            <li className="max-w-sm relative flex flex-col group rounded-lg border p-4 hover:border-white card-border" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>

      </div>

      <p className="p-3 text-gray-500 dark:text-gray-400 text-center">Copyright © 2023 - Pickems Tracker</p>

      <p className="p-3 text-gray-500 dark:text-gray-400 text-center">Pickems Tracker is not endorsed by Riot Games.</p>
      <p className="p-3 text-gray-500 dark:text-gray-400 text-center">This data is an estimation of the pickems results. There may be inaccuracies  in the calculation and data submission process.</p>
    </div>
  );
}
