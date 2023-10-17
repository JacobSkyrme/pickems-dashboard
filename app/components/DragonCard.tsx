'use client'

import ChemtechIcon from "./svgs/ChemtechIcon"
import CloudIcon from "./svgs/CloudIcon"
import HextechIcon from "./svgs/HextechIcon"
import InfernalIcon from "./svgs/InfernalIcon"
import MountainIcon from "./svgs/MountainIcon"
import OceanIcon from "./svgs/OceanIcon"

export default function DragonCard(props) {


    const {crystal_data} = props;
    //const trimmedData = crystal_data.card_data ? crystal_data.card_data.slice(1) : null
    const trimmedData = crystal_data.card_data ? crystal_data.card_data.slice(1) : null

    const DragonIcon = (icon) =>{
        switch(icon.dragon){
            case "Infernals":
                return <InfernalIcon class={icon.class} width={icon.width} height={icon.height}></InfernalIcon>
            case "Mountains":
                return <MountainIcon class={icon.class} width={icon.width} height={icon.height}></MountainIcon>
            case "Clouds":
                return <CloudIcon class={icon.class} width={icon.width} height={icon.height}></CloudIcon>
            case "Oceans":
                return <OceanIcon class={icon.class} width={icon.width} height={icon.height}></OceanIcon>
            case "Chemtechs":
                return <ChemtechIcon class={icon.class} width={icon.width} height={icon.height}></ChemtechIcon>
            case "Hextechs":
                return <HextechIcon class={icon.class} width={icon.width} height={icon.height}></HextechIcon>
            default:
                return <></>
        }

    }


    return (
        <>

   
            <h2 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-400 md:text-3xl lg:text-4xl dark:text-white">{crystal_data.card_name}</h2>
            {crystal_data.card_data ? <DragonIcon class="dragon-icon-large" dragon={crystal_data.card_data[0].dragon} width={200} height={200}></DragonIcon> : null}
            <h2 className="mb-4 text-1xl font-extrabold text-center leading-none tracking-tight text-gray-400 md:text-2xl lg:text-3xl dark:text-white">{crystal_data.card_data ? `${crystal_data.card_data[0].dragon.slice(0, -1)} - ${crystal_data.card_data[0].value}` : null}</h2>

            <div className="card-data-wrapper">
                {trimmedData?.map((card_data, index) => (
                    <div className="card-data">
                        <DragonIcon class="dragon-icon-small" dragon={card_data.dragon} width={40} height={40}></DragonIcon>
                        <span className="card-value"> {card_data.value}</span>                     
                    </div>

                ))}

            </div>
        </>
    )
}

