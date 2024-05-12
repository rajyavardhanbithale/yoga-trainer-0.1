import useFetch from "@/app/hooks/useFetch";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AmbientMusic } from "../../../../types";
import useAudioManager from "@/app/hooks/useAudioPlayer";


export default function MusicSelection() {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [selected, setSelected] = useState<boolean>(false);
    const [data, setData] = useState<AmbientMusic[] | string>();
    const [music, setMusic] = useState<number>()

    const { fetchAPI } = useFetch();
    const { playNarratorAudio, stopAudio } = useAudioManager();

    const url = '/api/ambient-music';
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchAPI(url) as AmbientMusic[] | string;
            if (response) {
                setData(response)
            }
        }
        fetchData();
    }, [url]);

    const handleHover = (state: boolean) => {
        if (selected) {
            setDropdown(state);
        }
    };


    useEffect(() => {
        console.log(music);
        if(data){
            stopAudio()
            const info:AmbientMusic = data?.filter(item => item.id === music)[0]
            playNarratorAudio(info.file,'user/background','fine')   
        }
    }, [music])

    

    return (
        <div
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="relative flex">
            <label

                className="relative mx-auto inline-flex items-center cursor-pointer"
            >
                <input type="checkbox" value="" className="sr-only peer" />
                <div
                    onClick={() => { setSelected(!selected); handleHover(false); stopAudio();setMusic(data && data[0]?.id)}}
                    className="group peer ring-0 bg-secondary rounded-full outline-none duration-300 after:duration-300 w-[86px] h-9 shadow-md peer-checked:bg-[#00b499] peer-focus:outline-none after:content-['🍂'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-7 after:w-7 after:top-[4.1px] after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['🌿'] peer-hover:after:scale-95 peer-checked:after:rotate-0"
                ></div>
            </label>


            {dropdown && (
                <>
                    <div className="mt-9 w-max rounded-lg shadow absolute animate-fade-down animate-once animate-ease-in-out animate-duration-[300ms]">
                        <div className="my-2"></div>
                        <ul className="py-2 px-2 rounded-xl bg-[#00b499] capitalize">
                            {data && Array.isArray(data) && data?.map((music: AmbientMusic, idx: number) => (
                                <li
                                    key={idx}
                                    onClick={()=>setMusic(music.id)}
                                    className="py-0.5 px-2 text-button-text rounded-xl hover:bg-[#00b499] hover:brightness-90 duration-500 cursor-pointer">{music.name}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}
