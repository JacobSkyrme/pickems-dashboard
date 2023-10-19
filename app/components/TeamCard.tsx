'use client'



export default function TeamCard({ crystal_data }) {


    let position = 1;
    let last = 0;
    let first;



    return (
        <>
            <div className="card-data-row-wrapper">
                <h2 className="mb-4 text-2xl font-extrabold text-center md:text-3xl lg:text-3xl dark:text-white">{crystal_data.card_name}</h2>


            </div>
        </>
    )
}

