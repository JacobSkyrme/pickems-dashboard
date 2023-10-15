// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function ServerAction() {
    'use server'



    // Create a Supabase client configured to use cookies
      const supabase = createServerActionClient({ cookies })

      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      //6

      const { data: mostPlayed } = await supabase.rpc("most_played")

      await supabase
      .from('crystal-cards')
      .update({ card_data: mostPlayed })
      .eq('id', 7)

      //3
      const {data: pentaKills} = await supabase
      .from('players')
      .select(`champion, playername, teamname`)
      .eq('pentakills', 1)
      
      await supabase
      .from('crystal-cards')
      .update({ card_data: pentaKills })
      .eq('id', 3)

      const { data: mostFirstBloods } = await supabase.rpc("player_most_firstblood")

      await supabase
      .from('crystal-cards')
      .update({ card_data: mostFirstBloods })
      .eq('id', 14)



      const { data: playerMostKills } = await supabase.rpc("player_most_kills")

      await supabase
      .from('crystal-cards')
      .update({ card_data: playerMostKills })
      .eq('id', 12)
      const { data: mostDeaths } = await supabase.rpc("most_deaths")

      await supabase
      .from('crystal-cards')
      .update({ card_data: mostDeaths })
      .eq('id', 9)
  return (
    <div>

    </div>
  )
}
