'use client'



export default function PlayerCard({ crystal_data }) {

    const tags = [
        {name: "Movistar R7", tag: "R7"},
        {name: "GAM Esports", tag: "GAM"},
        {name: "LOUD", tag: "LOUD"},
        {name: "CTBC Flying Oyster", tag: "CFO"},
        {name: "DetonatioN FocusMe", tag: "DFM"},
        {name: "Team BDS", tag: "BDS"},
        {name: "PSG Talon", tag: "PSG"},
        {name: "Team Whales", tag: "TW"}       
    ]
    let position = 1;
    let last = 0;
    let first;


    const ChampionList = (data) =>{
        return(
        <div className="champion-list"> 
            {data.champion_list?.split(',').map((champion_list, index) =>  (
                <>
                <img className="champion-list-mini-icon" key={index} alt={champion_list} src={`static/icons/${(champion_list.replace("'", "")).replace(" ", "") }_0.jpg`}/>
                
                </>
            ))}
        </div>)
    }

    const CardData = (data) => {


        if(data.index === 0){
            first = data.props.value
        }

        if(last === 0){
            last = data.props.value;
        }
        else if(last !== data.props.value){
            last = data.props.value
            position = data.index + 1;
        }
        
        if(data.props.value === first || data.index < 3){


            return(
              
        <div className="player-top-wrapper">

            {crystal_data.card_data ? <img className="player-main-big" src={`/static/players/${data.props.playername.toLowerCase()}.jpg`}></img> : null}

            <div className="player-text">
                <span className={"text-left ml-3 text-2xl font-bold" + (position === 1 ? " gold" : (position === 2 ? " silver" : position === 3 ? " bronze" : ""))}>{position}</span>
                {data.props.teamname ? <img className="player-mini-icon" alt={data.props.teamname} src={`/static/team_logos/${data.props.teamname.toLowerCase()}.jpg`}/> : null}

                <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{data.props.playername} - {data.props.value}</h2>
            </div>
            
            {data.props.champion ? <img className="player-champion-icon" alt={data.props.champion} src={`static/splash/${data.props.champion.replace("'", "")}_0.jpg`}/> : null}

            {data.props.champion_list ? <ChampionList champion_list={data.props.champion_list}></ChampionList> : null}

            </div>
            )
        }
        else{
            return(
                <div className={data.props.champion ? "card-data-player-champion-row" : "card-data-row"}>
        
                <span className={"card-value text-left" + (position === 1 ? " gold" : (position === 2 ? " silver" : position === 3 ? " bronze" : ""))}>{position}</span>
                {data.props.teamname ? <img className="mini-icon" alt={data.props.teamname} src={`/static/team_logos/${data.props.teamname.toLowerCase()}.jpg`}/> : null}
                
                <span className="card-value text-left">{tags.find(tag => tag.name === data.props.teamname)?.tag} {data.props.playername}</span>
                
                {data.props.champion ? <img className="mini-icon" alt={data.props.champion} src={`static/icons/${data.props.champion.replace("'", "").replace(" ", "")}_0.jpg`}/> : null}
                <span className="card-value text-right">{crystal_data.value_title !== "Pentakill" ? data.props.value : null}</span>
            </div>
        )
        }

    }
    





    return (
        <>
            <div className="card-data-row-wrapper">
                <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>


                {crystal_data.card_data?.map((card_data, index) => (
                    <CardData props={card_data} index={index} key={index}></CardData>
                ))}

            </div>
        </>
    )
}

