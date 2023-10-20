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
                return <InfernalIcon className={icon.class} width={icon.width} height={icon.height}></InfernalIcon>
            case "Mountains":
                return <MountainIcon className={icon.class} width={icon.width} height={icon.height}></MountainIcon>
            case "Clouds":
                return <CloudIcon className={icon.class} width={icon.width} height={icon.height}></CloudIcon>
            case "Oceans":
                return <OceanIcon className={icon.class} width={icon.width} height={icon.height}></OceanIcon>
            case "Chemtechs":
                return <ChemtechIcon className={icon.class} width={icon.width} height={icon.height}></ChemtechIcon>
            case "Hextechs":
                return <HextechIcon className={icon.class} width={icon.width} height={icon.height}></HextechIcon>
            default:
                return <></>
        }

    }


    return (
        <>

   
<div className="card-top-wrapper">
        <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>
        {crystal_data.card_data ? <DragonIcon class="card-main-img" dragon={crystal_data.card_data[0].dragon} width={200} height={200}></DragonIcon> : null}
            
            <div className="main-text-overlay">
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{crystal_data.card_data ? `${crystal_data.card_data[0].dragon.slice(0, -1)} - ${crystal_data.card_data[0].value}` : null}</h2>
            </div>
        </div>


            <div className="grid grid-cols-5 lg:grid-cols-5 gap-2">
                {trimmedData?.map((card_data, index) => (
                    <div className="card-data" key={index}>
                        <DragonIcon class="dragon-icon-small" dragon={card_data.dragon} width={40} height={40}></DragonIcon>
                        <span className="card-value"> {card_data.value}</span>                     
                    </div>
                ))}
            </div>
        </>
    )
}

