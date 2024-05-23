'use client'

export default function Dashboard(){
    return(
        <>
            <div className="grid grid-cols-12 gap-5 m-5">
                    <div className="col-span-12 min-h-[5vh] bg-rose-400 rounded-2xl"></div>
                    
                    <div className="col-span-4 min-h-[40vh] bg-emerald-400 rounded-2xl"></div>
                    <div className="col-span-5 min-h-[40vh] bg-rose-400 rounded-2xl"></div>
                    <div className="col-span-3 min-h-[40vh] bg-teal-400 rounded-2xl"></div>
            
            
            </div>
        </>
    )
}