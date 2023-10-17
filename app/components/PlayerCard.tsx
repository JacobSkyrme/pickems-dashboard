'use client'

export default function PlayerCard({ crystal_data }) {


    const trimmedData = crystal_data.card_data ? crystal_data.card_data.slice(1) : null
    const percentage = crystal_data.id === 10 ? "%" : ""
    console.log(crystal_data)
    return (
        <>

<div className="card-top-wrapper">
        <h2 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-400 md:text-3xl lg:text-4xl dark:text-white">{crystal_data.card_name}</h2>
        {crystal_data.card_data ? <img className="card-main-img" src={`/static/players/${crystal_data.card_data[0].playername.toLowerCase()}.jpg`}></img> : null}
            
            <div className="main-text-overlay">
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{crystal_data.card_data ? `${crystal_data.card_data[0].teamname} ${crystal_data.card_data[0].playername} - ${crystal_data.card_data[0].value}` : null}</h2>
            </div>
        </div>

            <div className="card-data-wrapper">
                {trimmedData?.map((card_data, index) => (
                    <div className="card-data">
                        
                        <span className="card-value"> {card_data.playername} {card_data.value}</span>
                    </div>

                ))}

            </div>
        </>
    )
}
