export default async function Background(){
    return (
        <>
            <div className="w-full xl:h-[100vh] h-[50vh] absolute -z-50">
                    {/* <img src="homepage/bg-1.svg" className="w-full" alt="" /> */}
                    <img src="homepage/bg-mesh.png" className="w-full xl:max-h-[100vh] max-h-[100vh]" alt="" />
                    <img src="homepage/bg-mesh.png" className="xl:hidden block w-full  max-h-[20vh]" alt="" />
            </div>
        </>
    )
}