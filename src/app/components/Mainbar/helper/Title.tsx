import { Sedan } from "next/font/google";

const titleFont = Sedan(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
);


export default function Title(props:any) {
    return (
        <>
            <div className="grid grid-cols-1 justify-center place-items-center gap-2">
                <div className={`${titleFont.className} flex flex-col xl:flex-row items-center text-4xl font-semibold capitalize gap-1`}>
                    <div>{props?.name}</div>
                    <div className="h-1.5 w-1.5 bg-text rounded-full mx-3"></div>
                    <div>{props?.originalName}</div>
                </div>
                <span className={`${titleFont.className} text-xl capitalize font-semibold  text-center`}>
                    &quot;{props?.description}&quot;
                </span>
            </div>
        </>
    )
}