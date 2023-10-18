'use client'

export default function PlayerCard({ crystal_data }) {


    const percentage = crystal_data.id === 10 ? "%" : ""
    return (
        <>

<div className="card-top-wrapper">
        <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>
        {crystal_data.card_data ? <img className="card-main-img" src={`/static/players/${crystal_data.card_data[0].playername.toLowerCase()}.jpg`}></img> : null}
            
            <div className="main-text-overlay">
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{crystal_data.card_data ? `${crystal_data.card_data[0].teamname} ${crystal_data.card_data[0].playername} - ${crystal_data.card_data[0].value}` : null}</h2>
            </div>
        </div>

            <div className="card-data-row-wrapper">
                {crystal_data.card_data?.map((card_data, index) => (
                    <div className="card-data-row">
                    <span className="card-value text-left">{index+1}:</span>
                    {card_data.teamname ? <img className="mini-icon" alt={card_data.teamname} src={`/static/team_logos/${card_data.teamname.toLowerCase()}.jpg`}/> : null}
                    
                    <span className="card-value text-left">{card_data.playername}</span>
                    
                    {card_data.champion ? <img className="mini-icon" alt={card_data.champion} src={`static/icons/${card_data.champion.replace("'", "").replace(" ", "")}_0.jpg`}/> : null}
                    <span className="card-value text-right">{card_data.value}</span>
                </div>

                ))}

            </div>
        </>
    )
}
