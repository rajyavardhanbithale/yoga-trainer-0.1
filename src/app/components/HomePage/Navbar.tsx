import { PiFlowerLotusLight } from "react-icons/pi";


export default async function Navbar() {
    return (
        <>
            <div className="w-full  border-b-2 border-b-blue-900 z-50">

                <div className="flex justify-between p-3">
                    <div className="flex justify-center items-center mx-5">
                        <span>
                            <PiFlowerLotusLight className="text-6xl text-white" />
                        </span>

                        <span className="text-2xl px-5 text-white font-semibold">
                            InnerBalance
                        </span>
                    </div>

                    <div className="flex justify-center items-center mx-5">
                        <span className="text-xl px-5 text-white font-semibold">
                            Home
                        </span> 
                        <span className="text-xl px-5 text-white font-semibold">
                            Practice
                        </span> 
                        <span className="text-xl px-5 text-white font-semibold">
                            Explore
                        </span>
                    </div> 
                    
                    <div className="flex justify-center items-center mx-5">
                        <span className="text-xl px-5 text-text font-semibold bg-slate-100 p-2 rounded-2xl">
                            Login
                        </span> 
                       
                    </div>

                </div>

                
            </div>
        </>
    )
}