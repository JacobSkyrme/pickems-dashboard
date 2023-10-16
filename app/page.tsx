import CrystalCard from "@/app/components/CrystalCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from 'next/image'

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: crystalCards } = await supabase.from("crystal-cards").select().order('id', { ascending: true })

  console.log(crystalCards)

  return (
    <div className="w-full flex flex-col items-center">

      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-full px-3 py-16 lg:py-24 text-foreground">
        <ul className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {crystalCards?.map((crystalCard) => (
            <li className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground" key={crystalCard.id}>
              <CrystalCard crystal_data={crystalCard}></CrystalCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}