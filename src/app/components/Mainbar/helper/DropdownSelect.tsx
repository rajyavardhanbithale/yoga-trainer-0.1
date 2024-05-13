import { AudioState } from "../../../../../types"


export default function DropdownSelect(props: any) {

    const handleOption = (option: string) => {
        props?.setAudioState((prevState: AudioState) => ({...prevState,playbackSpeed:option}))
        props?.dropdown(false)

    }


    return (
        <>
            <div className="ml-[1.05rem] mt-2">
                <div className="rounded-lg shadow absolute animate-fade-down animate-once animate-ease-in-out animate-duration-[300ms]">
                    <ul className="py-2 px-2 rounded-xl bg-secondary capitalize">
                        <li onClick={() => handleOption('slower')}  className="py-0.5 px-2 text-button-text rounded-xl hover:bg-secondary hover:brightness-90 duration-500 cursor-pointer">slowest</li>
                        <li onClick={() => handleOption('slow')}    className="py-0.5 px-2 text-button-text rounded-xl hover:bg-secondary hover:brightness-90 duration-500 cursor-pointer">slow</li>
                        <li onClick={() => handleOption('fine')}    className="py-0.5 px-2 text-button-text rounded-xl hover:bg-secondary hover:brightness-90 duration-500 cursor-pointer">fine</li>
                        <li onClick={() => handleOption('fast')}    className="py-0.5 px-2 text-button-text rounded-xl hover:bg-secondary hover:brightness-90 duration-500 cursor-pointer">fast</li>
                        <li onClick={() => handleOption('fastest')} className="py-0.5 px-2 text-button-text rounded-xl hover:bg-secondary hover:brightness-90 duration-500 cursor-pointer">fastest</li>
                    </ul>
                </div>
            </div>
        </>
    )
}