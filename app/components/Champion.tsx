'use client'

import PositionMedals from "./PositionMedals"


const ChampionCard = (props: {
    crystal_data: {
        card_name: string;
        card_type: string;
        created_at: string;
        id: number;
        value_title?: string;
        card_data: [{
            teamname?: string;
            value: string | number;
            position_list?: string;
            champion?: string;
            wins?:number;
            losses?:number;
        }]
    }
}) => {

    const { crystal_data } = props

    const percentage = crystal_data.id === 10 ? "%" : ""
    let position:number = 1;
    let last:string|number = 0;
    let first: string|number;

    const CardData = (data: {
        index: number;
        props: {
            teamname?: string;
            value: string | number;
            position_list?: string;
            champion?: string;
            wins?:number;
            losses?:number;
        }
    }
    ) => {


        const positionIcons = [
            { name: "top", icon: <svg className="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><g><path fillRule="evenodd" fill="#555d64" d="M247.059, 247.059V164.706H164.706v82.353h82.353ZM352.936, 352.933V82.537l-47.054, 46.875v176.47l-176.309.019L82.532,352.933h270.4Z"></path><path fillRule="evenodd" fill="#c79e57" d="M329.946, 47.1l-59.358,58.787H105.882V270.588L47.1,329.945,47.059,47.059Z"></path></g></svg> },
            { name: "jng", icon: <svg className="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path fillRule="evenodd" fill="#c79e57" d="M294.118, 35.294c-25.034,38.865-60.555,80.6-81.959,134.935,8.81,21.507, 17.469,42.872,23.135,65.065,5.088-12.873,5.51-23.4, 11.765-35.294C247, 141.447,268.9,97.375,294.118,35.294m-141.177, 200c-17.5-52.79-56-81.948-105.882-105.882,45.506,36.9,52.025, 88.47,58.823,141.176l44.035,38.96c17.313,18.887, 44.514,48.694,50.083,55.158, 53.589-111.119-39.6-244.759-94.118-329.412C137.292, 112.618,161.376,156.962, 152.941,235.294Zm94.118,58.824c1.1,9.873-.075,13.739,0, 23.529l47.059-47.059c6.8-52.706,13.318-104.28, 58.823-141.176C290.728,159.259,260.4,221.817, 247.059,294.118Z"></path></svg> },
            { name: "mid", icon: <svg className="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><g><path fillRule="evenodd" fill="#555d64" d="M305.755,199.6L352.9,152.569l0.039,200.372h-200L200,305.882H305.883Zm-58.7-152.541L199.753,94.1H94.1L94.117,200,47.065,246.79V47.068Z"></path><path fillRule="evenodd" fill="#c79e57" d="M105.882,352.941l247.06-247.059V47.059H294.118L47.059,294.117v58.824h58.823Z"></path></g></svg> },
            { name: "bot", icon: <svg className="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><g><path fillRule="evenodd" fill="#555d64" d="M152.942,152.941v82.353h82.352V152.941H152.942ZM47.064,47.067v270.4L93.6,270.436l0.52-176.318,176.31-.019,47.041-47.032H47.064Z"></path><path fillRule="evenodd" fill="#c79e57" d="M70.054,352.905l59.357-58.787H294.118V129.412L352.9,70.055l0.039,282.886Z"></path></g></svg> },
            { name: "sup", icon: <svg className="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path fillRule="evenodd" fill="#c8aa6e" d="M317.647,200l-35.294-47.059h23.53c41.584,0,94.117-47.058,94.117-47.058H270.588l-35.294,35.293,23.53,82.354ZM245.026,35.3H153.673l-12.5,23.523L200,129.412l58.823-70.588L245.026,35.3m-33.262,117.64L200,164.706l-11.765-11.765L152.941,329.412,200,364.706l47.059-35.294ZM82.353,200l35.294-47.059H94.118C52.533,152.941,0,105.883,0,105.883H129.412l35.294,35.293-23.53,82.354Z"></path></svg> }

        ]

        if (data.index === 0) {
            first = data.props.value
        }

        if (last === 0) {
            last = data.props.value;
        }
        else if (last !== data.props.value) {
            last = data.props.value
            position = data.index + 1;
        }

        return (
            <div className="card-data" key={data.index}>
                <div className="champion-icon-wrapper">
                    <div className={position < 4 ? "champion-position-order champion-position-medal" : "champion-position-order champion-position-value"}><span className={"card-value text-left"}>{position < 4 ? <PositionMedals position={position}></PositionMedals> : position}</span></div>
                    {data.props.champion ? <img className="mini-icon" alt={data.props.champion} src={`/static/icons/${data.props.champion.replace("'", "").replace(" ", "").toLowerCase()}_0.jpg`}></img> : null}

                    <div className="champion-value-wrapper">

                        {data.props.position_list?.split(', ')?.map((position: string, index:number) => (
                            <div key={index}>
                                {positionIcons.find(icon => icon.name === position)?.icon}
                            </div>
                        ))}

                        {data.props.position_list ? null : <span className="card-value text-right champion-value">{typeof data.props.value === "number" ? Math.round(data.props.value) : ""}{percentage}{data.props.wins ? ` - ${data.props.wins}/${data.props.losses}` : null}</span>}

                    </div>
                </div>
            </div>
        )
    }




    return (
        <>
            <div className="card-top-wrapper">

                <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl text-white">{crystal_data.card_name}</h2>
            </div>

            <div className="card-data-wrapper">

                {crystal_data.card_data?.map((card_data, index) => (
                    <CardData props={card_data} index={index} key={index}></CardData>
                ))}
            </div>
        </>
    )
}

export default ChampionCard