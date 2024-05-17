export default function MainbarSkeleton() {
    return (
        <>
            <div className="lg:w-[78%] xl:w-[88%] mt-5 sidebar_scrollable">
                <div className="m-4 mx-4">
                    {/* Title */}
                    <div className="grid grid-cols-1 place-items-center gap-2">
                        <span className="w-80 rounded-xl bg-slate-400 h-8 animate-pulse animate-duration-[1.8s]"></span>
                        <span className="w-11/12  rounded-xl bg-slate-400 h-6 animate-pulse animate-duration-[1.8s]"></span>
                    </div>
                </div>


                <div className="grid xl:grid-cols-11 md:grid-cols-1 p-5 gap-10">
                    <div className="sm:col-span-5 min-h-[400px]">
                        <div className="h-full max-h-[400px] ">
                            <div className="w-full h-full rounded-2xl bg-slate-400  animate-pulse animate-duration-[1.8s]"></div>
                        </div>
                    </div>

                    {/* Controller */}
                    <div className="sm:col-span-1 min-h-[400px]">
                        <div className="h-full max-h-[400px] ">
                            <div className="w-1/2 mx-auto h-full rounded-2xl bg-slate-400  animate-pulse animate-duration-[1.8s]"></div>
                        </div>
                    </div>

                    {/* Tutorial */}
                    <div className="sm:col-span-5 min-h-[400px]">
                        <div className="h-full max-h-[400px] ">
                            <div className="w-full h-full rounded-2xl bg-slate-400  animate-pulse animate-duration-[1.8s]"></div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-7 my-6 p-5 gap-10">
                    <div className="col-span-4">
                        <div className={`flex flex-col gap-8`}>
                            <span className="w-80 rounded-xl bg-slate-400 h-8 animate-pulse animate-duration-[1.8s]"></span>
                            <span className="w-11/12 rounded-xl bg-slate-400 h-64 animate-pulse animate-duration-[1.8s]"></span>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-full rounded-2xl bg-slate-400  animate-pulse animate-duration-[1.8s]">
                       
                    </div>
                </div>


            </div>
        </>
    )
}