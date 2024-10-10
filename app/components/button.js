import Image from "next/image";

export default function Button({text}) {
    return (
        <a href="https://google.com" target="_blank" className="w-full sm:w-fit">
            <button className="w-full sm:w-80 bg-primary text-white font-semibold p-2 rounded-2xl text-sm md:text-xl flex items-center justify-center gap-4">
                <span>{text}</span>
                <Image src="/icons/seta.png" alt="Seta branca" width={12} height={16} className="w-3 h-4"/>
            </button>
        </a>
    )
}