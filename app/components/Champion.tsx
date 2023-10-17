'use client'

export default function ChampionCard({ crystal_data }) {


    const trimmedData = crystal_data.card_data ? crystal_data.card_data.slice(1) : null
    const percentage = crystal_data.id === 10 ? "%" : ""

    return (
        <>
            <h2 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-400 md:text-3xl lg:text-4xl dark:text-white">{crystal_data.card_name}</h2>
            {crystal_data.card_data ? <img className="card-main-img" src={`/static/splash/${crystal_data.card_data[0].champion.replace("'", "")}_0.jpg`}></img> : null}
            <h2 className="mb-4 text-1xl font-extrabold text-center leading-none tracking-tight text-gray-400 md:text-2xl lg:text-3xl dark:text-white">{crystal_data.card_data ? `${crystal_data.card_data[0].champion} - ${crystal_data.card_data[0].value}${percentage}` : null}</h2>

            <div className="card-data-wrapper">
                {trimmedData?.map((card_data, index) => (
                    <div className="card-data">
                        {card_data.champion ? <img className="mini-icon" alt={card_data.champion} src={`/static/icons/${card_data.champion.replace("'", "").replace(" ", "")}_0.jpg`}></img> : null}
                        
                        <span className="card-value"> {card_data.value}{percentage}</span>
                    </div>

                ))}

            </div>
        </>
    )
}
