export default function GridFeatures() {
    return (
        <>
            <div className="grid grid-cols-12 mt-10 mx-10 gap-10">
                <div className="col-span-8 h-[400px] bg-blue-400 rounded-2xl"> </div>
                <div className="col-span-4 h-[400px] bg-blue-500 rounded-2xl"> </div>
            </div>            
            <div className="grid grid-cols-12 mt-5 mx-10 gap-10">
                <div className="col-span-2 h-[200px] bg-blue-600 rounded-2xl"> </div>
                <div className="col-span-4 h-[200px] bg-blue-700 rounded-2xl"> </div>
                <div className="col-span-6 h-[200px] bg-blue-800 rounded-2xl"> </div>
            </div>
        </>
    )
}