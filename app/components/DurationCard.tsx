'use client'

export default function DurationCard({ crystal_data }) {

    console.log(crystal_data)
    const percentage = crystal_data.id === 10 ? "%" : ""

    const first = crystal_data.card_data[0]

    const length = (gamelength) => {
        let minutes = Math.floor(gamelength / 60);
        let extraSeconds = gamelength % 60;
        return `${minutes< 10 ? `0${minutes}` : minutes}:${extraSeconds< 10 ? `0${extraSeconds}` : extraSeconds}`
    }


    return (
        <>
        <div className="card-top-wrapper">
        <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>
            {first ? <img className="card-main-img" src={`/static/team_logos/${first.team1_result === 1 ? first.team1_name.toLowerCase() : first.team2_name.toLowerCase()}.jpg`}></img> : null}
            
            <div className="main-text-overlay">
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{first ? `${first.team1_result === 1 ? first.team1_name : first.team2_name} - ${length(first.gamelength)}` : null}</h2>
            </div>
        </div>

        <div className="card-data-row-wrapper">

            {crystal_data.card_data?.map((card_data, index) => (
                    <div className="card-data-game-row">
                        <span className="card-value text-left">{index+1}:</span>

                        {card_data.team1_name ? <img className={card_data.team1_result === 1 ? "mini-icon team-win" : "team-icon team-loss"} alt={card_data.team1_name} src={`/static/team_logos/${card_data.team1_name.toLowerCase()}.jpg`}/> : null}
                        <span className="card-value text-center">vs</span>
                        {card_data.team2_name ? <img className={card_data.team2_result === 1 ? "mini-icon team-win" : "team-icon team-loss"} alt={card_data.team2_name} src={`/static/team_logos/${card_data.team2_name.toLowerCase()}.jpg`}/> : null}
                        
                        
                        <span className="card-value  text-right"> {length(card_data.gamelength)}</span>
                    </div>

                ))}
            </div>
        </>
    )
}
