


export default function PositionMedals(props){

    const {position, big} = props


    if(position === 1){
        return <img src="/static/medals/first.svg" className={big === true ? "medal big-medal" : "medal"}/>
    }
    else if (position === 2){
        return <img src="/static/medals/second.svg" className={big === true ? "medal big-medal" : "medal"}/>
    }
    else if (position === 3){
        return <img src="/static/medals/third.svg" className={big === true ? "medal big-medal" : "medal"}/>
    }
    else{
        return (
            <></>
        )
    }
}
