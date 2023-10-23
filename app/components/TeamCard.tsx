'use client'

import CardTop from "./CardTop";
import PositionMedals from "./PositionMedals";



export default function TeamCard({ crystal_data }) {

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    let position = 1;
    let last = 0;
    let first; // eslint-disable-next-line no-console console.

    const CardData = (data) => {
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
            <>
                {data.index === 0 ?
                    <CardTop
                        value={data.props.teamname && data.props.value ? data.props.teamname + " - " + data.props.value : (data.props.teamname ? data.props.teamname : (data.props.value ? data.props.value : null))}
                        image={data.props.teamname ? `/static/team_logos/${data.props.teamname}.jpg` : null}>
                    </CardTop > : null}
                <div className="card-data-row-wrapper">
                    <div className="card-data-team-row" key={data.props.index}>
                    <span className={"card-value text-center"}>{crystal_data.card_name !== "Best Minor Region Team" ? (position < 4 ? <PositionMedals position={position}></PositionMedals> : position) : null}</span>

                        {data.props.teamname ? <img className="mini-icon" alt={data.props.teamname} src={`/static/team_logos/${data.props.teamname.toLowerCase()}.jpg`} /> : null}
                        <span className="card-value text-left">{data.props.teamname}</span>
                        <span className="card-value  text-right"> {data.props.value}</span>
                    </div>

                </div>
            </>
        )
    }





return (
    <div className="card-data-row-wrapper">
        <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>


        {crystal_data.card_data?.map((card_data, index) => ( // eslint-disable-line no-console 

            <CardData props={card_data} index={index} key={index}></CardData>
        ))}

    </div>
)
}

