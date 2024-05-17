export default function VideoSection(props: any) {
    const size = 1000
    return (
        <>
            <div className="mx-auto grid xl:grid-cols-12 place-content-center">

                {/* Input Source */}
                <div className="grid-blur xl:col-span-6 max-h-[400px] m-5">
                    <video
                        src="test/tree.mp4"
                        className="w-full h-full object-contain rounded-xl"
                        controls
                    ></video>
                </div>

                <div className="xl:block xl:col-span-1 hidden max-h-[400px]"></div>

                <div className="xl:col-span-5 max-h-[400px] m-5 ">
                    <img
                        src={`/pose/tutorial/${props?.tutorial}`}
                        alt={props?.name}
                        className="w-full h-full object-contain rounded-xl" />
                </div>
            </div>
        </>
    )
}