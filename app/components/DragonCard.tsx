'use client'

import CardTop from "./CardTop"
import ChemtechIcon from "./svgs/ChemtechIcon"
import CloudIcon from "./svgs/CloudIcon"
import HextechIcon from "./svgs/HextechIcon"
import InfernalIcon from "./svgs/InfernalIcon"
import MountainIcon from "./svgs/MountainIcon"
import OceanIcon from "./svgs/OceanIcon"


const DragonCard = (props) => {

    const { crystal_data } = props

    const first = crystal_data.card_data[0];


    const DragonIcon = (icon: { dragon: string; class: string; width: number; height: number }) => {
        switch (icon.dragon) {
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
        <div className="card-data-row-wrapper">
            <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>

            <div className="card-top-wrapper">

                <DragonIcon class="card-main-img" dragon={first.dragon} width={200} height={200}></DragonIcon>

                <div className="main-text-overlay">
                    <h2 className="mt-1 mb-1 text-2xl font-bold text-center dark:text-white">{first.dragon} - {first.value}</h2>
                </div>
            </div>


            <div className="grid grid-cols-5 lg:grid-cols-5 gap-2">
                {crystal_data.card_data?.map((card_data: { dragon: string; value: number }, index: number) => (
                    <>{index === 0 ? <></> :
                        <div className="card-data" key={index}>
                            <DragonIcon class="dragon-icon-small" dragon={card_data.dragon} width={40} height={40}></DragonIcon>
                            <span className="card-value">{card_data.value}</span>
                        </div>
                    }</>
                ))}
            </div>
        </div>
    )
}

export default DragonCard

