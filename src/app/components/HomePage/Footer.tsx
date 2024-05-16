import { IoDocumentTextOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiVercel } from "react-icons/si";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-[#1c243f] py-2">
                <div className="grid grid-cols-3 py-5 text-slate-100 font-semibold text-xl text-center">
                    <div className="col-span-1 mx-1 flex justify-center items-center">
                        &copy; 2024 RAGE
                    </div>
                    <div className="col-span-1 flex flex-row justify-center items-center">
                        <span>
                            Created with
                        </span>
                        <div className="w-8 mx-2">
                            <img src="homepage/passion-bg-removed.gif" alt="" />
                        </div>
                        <span className="uppercase">
                            By Rajyavardhan Bithale
                        </span>
                    </div>
                    <div className="col-span-1 mx-1 flex justify-center items-center">
                        RAGE InnerBalance
                    </div>
                </div>

                <div className="grid grid-cols-3 py-2  text-slate-100 font-semibold  text-center">
                    <div className="col-span-1 mx-1 flex justify-center items-center gap-5 text-2xl">
                        <a href="https://www.linkedin.com/in/rajyavardhan-bithale-999482258/" target="_blank" rel="noopener noreferrer">

                            <IoLogoLinkedin />
                        </a>

                        <a href="https://github.com/rajyavardhanbithale" target="_blank" rel="noopener noreferrer">

                            <IoLogoGithub />

                        </a>

                    </div>
                    <div className="col-span-1">
                        <a href="https://lordicon.com/">Icons by Lordicon.com</a>

                    </div>
                    <div className="col-span-1">
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                            Deployed on 
                            <SiVercel className="inline-flex mb-1 mx-2" />
                            Vercel
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}