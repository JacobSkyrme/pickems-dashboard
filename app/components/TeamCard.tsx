'use client'

import CardTop from "./CardTop";
import PositionMedals from "./PositionMedals";

const TeamCard = (props: {
    crystal_data: {
        card_name: string;
        card_type: string;
        created_at: string;
        id: number;
        value_title?: string;
        card_data: [{
            teamname: string;
            value: string | number;

        }]
    }
}) => {



    const { crystal_data } = props

    let position = 1;
    let last: string | number = 0;
    let first: string | number;

    const CardData = (data: { index: number; props: { value: string | number; teamname: string } }) => {
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
                {data.index < 1 ?
                    <CardTop
                        value={data.props.teamname && data.props.value ? data.props.teamname + " - " + data.props.value : (data.props.teamname ? data.props.teamname : (data.props.value ? data.props.value : ""))}
                        image={data.props.teamname ? `/static/team_logos/${data.props.teamname}.jpg` : ""}
                    ></CardTop > : <></>}

                <div className="card-data-row-wrapper">
                    <div className="card-data-team-row" key={data.index}>
                        <span className={"card-value text-center"}>{position < 4 ? <PositionMedals position={position}></PositionMedals> : position}</span>
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
            <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl text-white">{crystal_data.card_name}</h2>


            {crystal_data.card_data?.map((card_data, index: number) => (
                <CardData props={card_data} index={index} key={index}></CardData>
            ))}

        </div>
    )
}

export default TeamCard;