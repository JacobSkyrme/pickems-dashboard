'use client'

import CardTop from "./CardTop";
import PositionMedals from "./PositionMedals";


const DurationCard =  (props: {
    crystal_data: {
        card_name: string;
        card_type: string;
        created_at: string;
        id: number;
        value_title?: string;
        card_data: [{
            game: number;
            gameid: string;
            gamelength: number;
            id: number;
            team1_name: string;
            team1_result: number;
            team1_side: string;
            team2_name: string;
            team2_result: number;
            team2_side: string;
        }]
    }
}) => {

    const {crystal_data} = props

    const first = crystal_data.card_data[0]

    const length = (gamelength: number) => {
        let minutes = Math.floor(gamelength / 60);
        let extraSeconds = gamelength % 60;
        return `${minutes< 10 ? `0${minutes}` : minutes}:${extraSeconds< 10 ? `0${extraSeconds}` : extraSeconds}`
    }


    return (
        <div className="card-data-row-wrapper">
        <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>
        
        
        <CardTop 
            image={`/static/team_logos/${first.team1_result === 1 ? first.team1_name.toLowerCase() : first.team2_name.toLowerCase()}.jpg`}
            value={first ? `${first.team1_result === 1 ? first.team1_name : first.team2_name} - ${length(first.gamelength)}` : ""}
        ></CardTop>
        

        <div className="card-data-row-wrapper">

            {crystal_data.card_data?.map((card_data, index: number) => (
                    <div className="card-data-game-row" key={index}>
                        <span className={"card-value text-center"}>{index+1 < 4 ? <PositionMedals position={index+1}></PositionMedals> : index+1}</span>
                        {card_data.team1_name ? <img className={card_data.team1_result === 1 ? "mini-icon team-win" : "team-icon team-loss"} alt={card_data.team1_name} src={`/static/team_logos/${card_data.team1_name.toLowerCase()}.jpg`}/> : null}
                        <span className="card-value text-center">vs</span>
                        {card_data.team2_name ? <img className={card_data.team2_result === 1 ? "mini-icon team-win" : "team-icon team-loss"} alt={card_data.team2_name} src={`/static/team_logos/${card_data.team2_name.toLowerCase()}.jpg`}/> : null}
                        
                        
                        <span className="card-value  text-right"> {length(card_data.gamelength)}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}


export default DurationCard