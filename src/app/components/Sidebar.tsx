import Image from "next/image"

interface YogaPose {
    id: number
    name: string
    image: string
}


export default function Sidebar() {

    const pose: YogaPose[] = [
        {
            id: 101,
            name: "warrior 1",
            image: "warrior1.png"
        },
        {
            id: 101,
            name: "downward dog",
            image: "downdog.png"
        }
    ]
    return (
        <>

            <div className="m-4 grid grid-cols-1 gap-2 w-[20%]">
                {pose.map((name: YogaPose, idx: number) => (
                    <>
                        <div key={idx} className="min-h-[100px] rounded-2xl overflow-hidden  hover:bg-gray-200">
                            <Image
                                src={`/pose/${name?.image}`}
                                alt={name.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full hover:scale-105 object-cover duration-500 hover:brightness-[.80]"
                            >

                            </Image>

                            <span className="m-1.5 p-1 capitalize tracking-wide flex justify-center">
                                {name.name}
                            </span>
                        </div>
                    </>
                ))}

            </div>
        </>
    )
}