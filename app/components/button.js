import Image from "next/image";

export default function Button({text}) {
    return (
        <a href="https://wa.me/5554992005646" target="_blank" className="w-full sm:w-fit">
            <button className="w-full sm:w-fit bg-primary text-white font-semibold py-3 px-6 rounded-2xl text-sm md:text-base flex items-center justify-center gap-4">
                <span>{text}</span>
                <Image src="/icons/seta.png" alt="Seta branca" width={12} height={16} className="w-3 h-4"/>
            </button>
        </a>
    )
}