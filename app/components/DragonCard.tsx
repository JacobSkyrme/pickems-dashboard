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
    
    return (
        <>
        <HextechIcon width={40} height={40}></HextechIcon>
        <CloudIcon width={40} height={40}></CloudIcon>
        <InfernalIcon width={40} height={40}></InfernalIcon>
        <OceanIcon width={40} height={40}></OceanIcon>
        <MountainIcon width={40} height={40}></MountainIcon>
        <ChemtechIcon width={40} height={40}></ChemtechIcon>
        </>
    )
}


