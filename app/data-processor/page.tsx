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



      //Longest Game
      const { data: longestGame } = await supabase.rpc("longest_game").limit(5)
      await supabase
      .from('crystal-cards')
      .update({ card_data: longestGame })
      .eq('id', 2)

      //Most Dragons
      const {data: mostDragons} = await supabase.rpc('most_dragons')
      await supabase
      .from('crystal-cards')
      .update({ card_data: mostDragons })
      .eq('id', 4)


      //Champion picked in most roles
      const {data: mostRoles} = await supabase.rpc('most_roles').limit(10)
      await supabase
      .from('crystal-cards')
      .update({ card_data: mostRoles })
      .eq('id', 6)

      //Most played champion
      const { data: mostPlayed } = await supabase.rpc("most_played").limit(10)
      await supabase
      .from('crystal-cards')
      .update({ card_data: mostPlayed })
      .eq('id', 7)

      //Most banned champion
      const { data: mostBanned } = await supabase.rpc("most_banned").limit(10)
      await supabase
      .from('crystal-cards')
      .update({ card_data: mostBanned })
      .eq('id', 8)

      //Champion Most Deaths
      const { data: mostDeaths } = await supabase.rpc("most_deaths").limit(10)

      await supabase
      .from('crystal-cards')
      .update({ card_data: mostDeaths })
      .eq('id', 9)

      //Champion Most Deaths
      const { data: highestWinrate } = await supabase.rpc("highest_winrate").limit(10)
      await supabase
      .from('crystal-cards')
      .update({ card_data: highestWinrate })
      .eq('id', 10)

      const { data: playerMostChampions } = await supabase.rpc("player_most_unique_champions").limit(10)
      await supabase
      .from('crystal-cards')
      .update({ card_data: playerMostChampions })
      .eq('id', 11)
      
      const { data: playerMostKills } = await supabase.rpc("player_most_kills").limit(10)

      await supabase
      .from('crystal-cards')
      .update({ card_data: playerMostKills })
      .eq('id', 12)
      
      const { data: highestKda } = await supabase.rpc("highest_kda").limit(10)
      await supabase
      .from('crystal-cards')
      .update({ card_data: highestKda })
      .eq('id', 13)

      const { data: mostFirstBloods } = await supabase.rpc("player_most_firstbloods").limit(10)

      await supabase
      .from('crystal-cards')
      .update({ card_data: mostFirstBloods })
      .eq('id', 14)

      const { data: playerPentakills } = await supabase.rpc("player_pentakills").limit(10)

      await supabase
      .from('crystal-cards')
      .update({ card_data: playerPentakills })
      .eq('id', 15)
      

      await supabase
      .from('crystal-cards')
      .update({ card_data: playerPentakills })
      .eq('id', 3)




      //Shortest Game
      const { data: shortestGame } = await supabase.rpc("shortest_game").limit(5)
      await supabase
      .from('crystal-cards')
      .update({ card_data: shortestGame })
      .eq('id', 17)


  return (
    <div>

    </div>
  )
}