export default async function Background(){
    return (
        <>
            <div className="w-full absolute -z-50">
                    {/* <img src="home-page/bg-1.svg" className="w-full" alt="" /> */}
                    <img src="home-page/bg/bg-desktop.png" className="sm:block hidden w-full xl:max-h-[100vh] max-h-[100vh]" alt="" />
                    <img src="home-page/bg/bg-mobile.png" className="sm:hidden block w-full h-screen" alt="" />
                    {/* <img src="home-page/bg/bg-mobile.png" className="sm:hidden block w-full" alt="" /> */}
                  
            </div>
        </>
    )
}