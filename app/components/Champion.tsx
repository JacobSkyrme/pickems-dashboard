'use client'

export default function ChampionCard({ crystal_data }) {


    const trimmedData = crystal_data.card_data ? crystal_data.card_data.slice(1) : null
    const percentage = crystal_data.id === 10 ? "%" : ""

    return (
        <>
        <div className="card-top-wrapper">
            
        <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>
            {crystal_data.card_data ? <img className="card-main-big" src={`/static/splash/${crystal_data.card_data[0].champion.replace("'", "")}_0.jpg`}></img> : null}
            
            <div className="main-text-overlay">
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{crystal_data.card_data ? `${crystal_data.card_data[0].champion} - ${crystal_data.card_data[0].value}${percentage}` : null}</h2>
            </div>
        </div>

            <div className="card-data-wrapper">

            {trimmedData?.map((card_data, index) => (
                    <div className="card-data" key={index}>
                        {card_data.champion ? <img className="mini-icon" alt={card_data.champion} src={`/static/icons/${card_data.champion.replace("'", "").replace(" ", "")}_0.jpg`}></img> : null}
                        
                        <span className="card-value"> {card_data.value}{percentage}</span>
                    </div>

                ))}
            </div>
        </>
    )
}
