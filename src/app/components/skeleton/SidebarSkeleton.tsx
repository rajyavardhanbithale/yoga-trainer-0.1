import Image from "next/image";

export default function SidebarSkeleton() {
    return (
        <>
            {/* {[...Array(4).map((_, idx) => (
                <div key={idx}>
                    <span>hellow</span>
                </div>
            ))]} */}

            <div className="lg:w-[22%] xl:w-[12%] overflow-hidden">
                {[...Array(6)].map((_, idx) => (
                    <div key={idx} className="m-4 mx-4 grid grid-cols-1 gap-2 overflow-y-auto  sidebar_scrollable">
                        <div className="min-h-[160px] rounded-2xl overflow-hidden">
                            <div className="h-full bg-slate-400 animate-pulse animate-duration-[1.8s]"></div>
                        </div>
                        <span className="h-4 w-11/12 mx-auto rounded-2xl bg-slate-400 animate-pulse animate-duration-[1.8s]">
                        </span>
                    </div>
                ))}
            </div>



        </>
    )
}