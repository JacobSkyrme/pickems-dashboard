'use client'

import PositionMedals from "./PositionMedals";

const PlayerCard = (props: {
    crystal_data: {
        card_name: string;
        card_type: string;
        created_at: string;
        id: number;
        value_title?: string;
        card_data: [{
            teamname?: string;
            playername: string;
            value: string | number;
            champion_list?: string;
            champion?: string;
            total_assists?: number;
            total_deaths?: number;
            total_kills?: number
        }]
    }
}) => {
    const {crystal_data} = props
    
    const tags = [
        {name: "Movistar R7", tag: "R7"},
        {name: "GAM Esports", tag: "GAM"},
        {name: "LOUD", tag: "LOUD"},
        {name: "CTBC Flying Oyster", tag: "CFO"},
        {name: "DetonatioN FocusMe", tag: "DFM"},
        {name: "Team BDS", tag: "BDS"},
        {name: "PSG Talon", tag: "PSG"},
        {name: "Team Whales", tag: "TW"}       
    ]
    let position:number = 1;
    let last:string|number = 0;
    let first: string|number;


    const ChampionList = (data: {champion_list:string}) =>{
        return(
        <div className="champion-list"> 
            {data.champion_list?.split(',').map((champion_list, index:number) =>  (
                <img className="champion-list-mini-icon" key={index} alt={champion_list} src={`/static/icons/${champion_list.replace("'", "").replace(/\s/g, "").toLowerCase()}_0.jpg`}></img>
            ))}
        </div>)
    }


    const KdaInfo = (data: {
        props:{
            teamname?: string;
            playername: string;
            value: string | number;
            champion_list?: string;
            champion?: string;
            total_assists?: number;
            total_deaths?: number;
            total_kills?: number 
        }

    }) => {
        return(
            <div className="kda-list">

                    <div className="kda-item-wrapper">
                        <span className="kda-item-label">K</span>
                        <span className="kda-item-value">{data.props.total_kills ? data.props.total_kills : 0}</span>
                    </div>


                    <div className="kda-item-wrapper">
                        <span className="kda-item-label">D</span>
                        <span className="kda-item-value">{data.props.total_deaths ? data.props.total_deaths : 0}</span>
                    </div>


                    <div className="kda-item-wrapper">
                        <span className="kda-item-label">A</span>
                        <span className="kda-item-value">{data.props.total_assists ? data.props.total_assists : 0}</span>
                    </div>

                    <div className="kda-item-wrapper kda-label-wrapper">
                        <span className="kda-item-value">KDA - {data.props.value ? data.props.value : 0}</span>
                    </div>
                
            </div> 

        )
    }

    const CardData = (data: { 
        index: number;
        props: {
            teamname?: string;
            playername: string;
            value: string | number;
            champion_list?: string;
            champion?: string;
            total_assists?: number;
            total_deaths?: number;
            total_kills?: number
        }
    }) => {


        if(data.index === 0){
            first = data.props.value
        }

        if(last === 0){
            last = data.props.value;
        }
        else if(last !== data.props.value){
            last = data.props.value
            position = data.index + 1;
        }
        if((data.index < 3) && (crystal_data.card_name !== "Total Pentakills" && crystal_data.card_name !== "Baron Steals" )){


            return(
              
        <div className="player-top-wrapper">

            {crystal_data.card_data ? <img className="player-main-big" src={`/static/players/${data.props.playername.toLowerCase()}.jpg`}></img> : null}

            <div className="player-text">
            <PositionMedals big={true} position={position}></PositionMedals>
                {data.props.teamname ? <img className="player-mini-icon" alt={data.props.teamname} src={`/static/team_logos/${data.props.teamname.toLowerCase()}.jpg`}/> : null}
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center text-white">{data.props.playername} - {data.props.value}</h2>
            </div>
            
                        {data.props.champion ? <img className="player-champion-icon" alt={data.props.champion} src={`static/splash/${data.props.champion.replace("'", "").toLowerCase()}_0.jpg`}/> : null}

            {data.props.champion_list ? <ChampionList champion_list={data.props.champion_list}></ChampionList> : null}
            {crystal_data.card_name ===  "Highest KDA" ? <KdaInfo props={data.props}></KdaInfo> : null}

            </div>
            )
        }
        else{
            return(
                <div className={data.props.champion ? "card-data-player-champion-row" : "card-data-row"}>
        

                <span className={"card-value text-center"}>{crystal_data.card_name !== "Total Pentakills" && crystal_data.card_name !== "Baron Steals" ? (position < 4 ? <PositionMedals position={position}></PositionMedals> : position) : null}</span>
                {data.props.teamname ? <img className="mini-icon" alt={data.props.teamname} src={`/static/team_logos/${data.props.teamname.toLowerCase()}.jpg`}/> : null}
                
                <span className="card-value text-left">{tags.find(tag => tag.name === data.props.teamname)?.tag} {data.props.playername}</span>
                
                {data.props.champion ? <img className="mini-icon" alt={data.props.champion} src={`/static/icons/${data.props.champion.replace("'", "").replace(" ", "").toLowerCase()}_0.jpg`}/> : null}
                <span className="card-value text-right">{crystal_data.value_title !== "Pentakill" ? data.props.value : null}</span>
            </div>
        )
        }

    }
    





    return (
        <>
            <div className="card-data-row-wrapper">
                <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl text-white">{crystal_data.card_name}</h2>
                {crystal_data.card_name === "Total Pentakills" || crystal_data.card_name ===  "Baron Steals" ?
                <div className="card-top-wrapper">

<svg className="card-main-img" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M68.0592 11.04L71.2725 16.6603H80.0369C80.1521 31.6555 77.031 42.7463 70.1092 52.7085L73.2879 56.2212C69.3031 52.7546 64.2356 48.3321 62.4159 46.7427L62.7269 46.1323L63.6367 44.6005C62.5826 44.4623 60.7708 44.2232 58.9593 43.9842C57.1487 43.7453 55.3384 43.5064 54.2849 43.3682C55.6947 41.6037 56.113 41.0728 56.908 40.0638C57.0937 39.8281 57.3 39.5663 57.5442 39.2567C55.5327 35.7742 54.2926 32.6099 53.2558 29.9644C51.354 25.1119 50.1361 22.0042 46.0963 21.8775V28.4883C46.0952 28.4875 46.093 28.4858 46.0897 28.4833C45.8514 28.3033 39.9488 23.8435 36.8136 38.5426C36.8136 38.5426 41.3053 39.2451 45.866 46.2475H54.5959H54.7341C55.8167 46.2475 56.8877 46.6391 57.7285 47.3301L72.0096 59.1004C75.1076 61.6572 75.338 66.3331 72.4933 69.1663C69.5104 72.1492 64.6041 71.7231 62.1625 68.3371L56.3925 60.3443V64.6977L46.0963 70.652V80.6602C46.0963 80.6602 42.7103 71.9649 36.2263 64.9511C36.2263 64.9511 34.6484 63.3272 34.038 62.7744L30.0301 68.3371C27.577 71.7346 22.6592 72.1377 19.6879 69.1663C16.8547 66.3331 17.0735 61.6572 20.1716 59.1004L23.0739 56.7049C21.7379 56.4055 20.3443 56.2212 18.8932 56.2212L22.1064 53.031C16.4977 45.1073 11.96 35.4791 11.96 16.6603H20.7244L23.9376 11.04L28.8093 16.6603H33.3585C34.243 14.4592 35.0134 13.5562 36.198 12.1679C36.3708 11.9653 36.5525 11.7525 36.7445 11.5238L40.2457 14.2878C40.2457 14.2878 42.3648 11.5929 45.9927 11.5929C49.632 11.5929 51.7512 14.2878 51.7512 14.2878L55.2523 11.5238C55.445 11.7538 55.6275 11.968 55.8013 12.172C56.9676 13.5412 57.7463 14.4552 58.6383 16.6603H63.1875L68.0592 11.04ZM55.1831 48.3436C55.0335 48.3205 54.8838 48.2975 54.7341 48.2975H48.607L56.3925 52.8006V56.8431L63.821 67.1393C66.7002 70.9744 72.6545 68.7517 72.4357 64.1218C72.3781 62.855 71.7907 61.5766 70.7081 60.6783L62.8766 54.2287L56.4155 48.9079C56.0585 48.62 55.6324 48.4242 55.1832 48.3436L55.1831 48.3436ZM54.3425 53.9869C47.0753 49.7832 46.1769 49.2649 46.0963 49.2189L37.8386 53.9869V63.5114L46.0963 68.2795L54.3425 63.5114V53.9869ZM43.5741 48.2975H37.4586C36.8367 48.2975 36.2378 48.5163 35.7656 48.9079C30.1206 53.5593 28.0852 55.234 26.4511 56.5786C25.1113 57.6809 24.0413 58.5613 21.473 60.6783C19.3078 62.4634 19.1581 65.7342 21.139 67.7151C23.2121 69.7882 26.6441 69.5118 28.3602 67.1393C31.3231 63.0265 31.8532 62.2928 32.7932 60.9919C33.3878 60.1689 34.1464 59.119 35.7886 56.8431V52.8006L43.5741 48.2975ZM67.6907 50.0366L67.7137 50.0596C72.8273 43.1494 76.3975 31.0796 76.4666 20.1845H70.259L67.875 16.0154C67.6216 19.3553 67.1148 22.0733 66.5044 24.227C64.7999 30.3195 62.3007 32.1507 62.3007 32.1507C63.4064 28.3961 64.201 24.1233 63.9592 20.1845H56.4501C56.4501 20.1845 56.6689 17.1095 54.8377 14.9328L50.9335 18.0078H50.8413C50.3231 15.8081 48.1118 14.2533 45.9927 14.2533C43.8851 14.2533 41.6738 15.8081 41.1555 18.0078H41.0634L37.1591 14.9328C35.3164 17.1095 35.5468 20.1845 35.5468 20.1845H28.0262C27.8764 22.7759 28.0953 26.7492 29.6846 32.1507C29.6846 32.1507 25.1008 28.7762 24.1219 16.0154L21.7264 20.1845H15.5302C15.5993 31.3906 19.3769 43.8404 24.7323 50.647L28.7517 46.8118L27.22 44.209L36.3529 43.0112L33.658 39.3488C35.372 36.3445 36.6174 33.3028 37.7422 30.5559C40.0408 24.942 41.8353 20.5592 46.0963 20.2421C51.2085 20.3637 52.7084 24.1175 54.9216 29.6566C56.064 32.5156 57.3964 35.8502 59.5136 39.4064C59.4163 39.5315 59.3567 39.6086 59.3065 39.6736C59.1071 39.9318 59.055 39.9992 57.3715 42.1244L66.2971 43.2876C65.7165 44.2884 65.6731 44.3618 65.3231 44.9533C65.1454 45.2535 64.8888 45.6871 64.4429 46.4433L67.6907 50.0366ZM50.4382 30.8723C50.4382 30.8723 50.3806 32.2659 50.0466 33.9243C49.9521 34.0492 49.8561 34.1732 49.7597 34.2977C48.9052 35.4013 48.0193 36.5455 47.8124 38.7499C46.7413 39.6367 45.4168 39.6137 44.3803 38.7499C44.1643 36.5698 43.3056 35.4456 42.4518 34.328L42.4517 34.3278C42.3494 34.1938 42.2471 34.0599 42.146 33.9243C41.812 32.2659 41.7544 30.8723 41.7544 30.8723C44.9216 31.5633 47.5935 31.4942 50.4382 30.8723ZM55.1602 39.3603L55.4711 39.9131C53.1102 40.6733 49.1023 42.6772 46.8219 45.3952C46.8219 45.3952 49.7933 40.6733 54.688 38.5426L55.1602 39.3603ZM40.8446 54.8276L46.0963 58.3403C46.0963 58.016 46.0995 56.4704 46.1024 54.9919L46.1025 54.9806L46.1025 54.9707C46.1052 53.6215 46.1078 52.3333 46.1078 52.0866C46.0963 52.0866 40.8446 54.8276 40.8446 54.8276Z" fill="white" />
        </svg>           
              <div className="main-text-overlay">
                <h2 className="mt-1 mb-1 text-2xl font-bold text-center text-white">{crystal_data.card_data.length}</h2>
            </div>



            </div> : null}

                {crystal_data.card_data.map((card_data, index) => (
                    <CardData props={card_data} index={index} key={index}></CardData>
                ))}

            </div>
        </>
    )
}


 


export default PlayerCard