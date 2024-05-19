import { Sedan } from "next/font/google";

const titleFont = Sedan(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
);


export default function Title(props: any) {
    return (
        <>

            <div className="flex sm:flex-row flex-col justify-center sm:gap-5 text-center m-2">
                <span className={`capitalize sm:text-4xl text-2xl font-semibold text-slate-900 ${titleFont.className}`}>
                    {props?.name}
                </span>

                <span className="capitalize text-3xl font-semibold my-auto text-slate-900">
                    •
                </span>

                <span className={`capitalize sm:text-4xl text-2xl font-semibold text-slate-900 ${titleFont.className}`}>
                    {props?.originalName}
                </span>
            </div>

            <span className={`capitalize text-xs md:text-base xl:text-xl font-semibold text-center m-2 text-slate-900 ${titleFont.className}`}>
                {props?.description}
            </span>

        </>
    )
}