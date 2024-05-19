import { useSearchParams } from "next/navigation"

export default function VideoSection(props: any) {
 
    
    const size = 1000
    return (
        <>
            <div className="grid xl:grid-cols-12 place-content-center">

                {/* Input Source */}
                <div className="grid-blur xl:col-span-6 max-h-[400px] m-5">
                    <video
                        ref={props?.videoRef}
                        src={`test/${props?.source}`}
                        className="w-full h-full object-contain rounded-xl"
                        controls
                    ></video>
                </div>

                {/* <div className="xl:block xl:col-span-1 hidden max-h-[400px]"></div> */}

                {props?.showTutorial ? (
                    <>
                        <div className="xl:col-span-6 min-h-[400px] m-5 relative">
                            <div className="-z-50 absolute w-full h-full mx-auto  rounded-2xl bg-slate-400 animate-pulse"></div>
                            <iframe
                                className="w-full h-full mx-auto z-40 rounded-2xl"
                                src={props?.tutorialVideo}
                                title="YouTube video player"
                                allow="encrypted-media; picture-in-picture;"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>


                        </div>
                    </>
                ) : (
                    <>
                        <div className="xl:col-span-6 max-h-[400px] m-5 mx-auto">
                            <img
                                src={`/pose/tutorial/${props?.tutorial}`}
                                alt={props?.name}
                                className="w-full h-full object-contain rounded-xl mx-auto" />
                        </div>
                    </>
                )}

            </div>
        </>
    )
}