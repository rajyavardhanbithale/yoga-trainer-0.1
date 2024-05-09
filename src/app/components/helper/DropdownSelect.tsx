

export default function DropdownSelect(props: any) {

    const handleOption = (option: string) => {
        props?.playbackSpeed(option)
        props?.dropdown(false)

    }


    return (
        <>
            <div className="mt-2 ml-4">
                <div className="rounded-lg shadow absolute animate-fade-down animate-once animate-ease-in-out animate-duration-[300ms]">
                    <ul className="py-0.5 px-2 rounded-xl bg-slate-200 capitalize">
                        <li onClick={() => handleOption('slower')} className="py-0.5 px-2 rounded-xl hover:bg-slate-300 duration-500 cursor-pointer">slowest</li>
                        <li onClick={() => handleOption('slow')} className="py-0.5 px-2 rounded-xl hover:bg-slate-300 duration-500 cursor-pointer">slow</li>
                        <li onClick={() => handleOption('fine')} className="py-0.5 px-2 rounded-xl hover:bg-slate-300 duration-500 cursor-pointer">fine</li>
                        <li onClick={() => handleOption('fast')} className="py-0.5 px-2 rounded-xl hover:bg-slate-300 duration-500 cursor-pointer">fast</li>
                        <li onClick={() => handleOption('fastest')} className="py-0.5 px-2 rounded-xl hover:bg-slate-300 duration-500 cursor-pointer">fastest</li>
                    </ul>
                </div>
            </div>
        </>
    )
}