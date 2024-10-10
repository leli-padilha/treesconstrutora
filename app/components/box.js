import Image from "next/image"

export default function Box({img, title, desc, duration}){
    return (
        <div className="flex flex-col gap-2 bg-white p-4 md:p-5 rounded-2xl items-center justify-start" data-aos="fade-up" data-aos-delay="{duration}" data-aos-duration="1000">
            <div className="max-w-28 max-h-28 relative">
                <Image 
                    src={img}
                    alt={desc}
                    width={90}
                    height={90}
                />
            </div>
            <h3 className="text-center text-base text-pretty font-bold md:text-xl">{title}</h3>
            <p className="text-center text-sm md:text-base text-pretty">{desc}</p>
        </div>
    )
}