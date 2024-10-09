import Image from "next/image"

export default function Box({img, title, desc}){
    return (
        <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl items-center justify-start">
            <div className="max-w-28 max-h-28 relative">
                <Image 
                    src={img}
                    alt={desc}
                    width={90}
                    height={90}
                />
            </div>
            <h3 className="text-center text-pretty font-bold">{title}</h3>
            <p className="text-center text-pretty">{desc}</p>
        </div>
    )
}