import Image from "next/image"

export default function Header() {
    return (
        <header className=" p-4 w-full bg-fundo items-center md:px-10">
            <div className="max-w-7xl m-auto flex justify-between">
                <div className="relative w-[105px] h-[41px] md:w-[150px] md:h-[58px] lg:w-[200px] lg:h-[78px]">
                    <Image 
                        src="/images/logo/logo.webp"
                        alt="Logomarca Trees Construtora" 
                        fill
                        sizes="100vh"       
                    />
                </div>
                
                <a href="https://wa.me/5554992005646" target="_blank" className="flex items-center gap-1 xl:gap-4 transition-transform transform duration-300 ease-in-out hover:scale-110">
                    <Image
                        src="/icons/whatsapp.webp"
                        alt="Icone do whatsapp"
                        width={40}
                        height={40}
                        className="xl:h-10 xl:w-10"
                    />
                    <span className="text-primary font-bold xl:text-2xl">
                        (54) 99200-5646
                    </span>
                </a>
            </div>   
        </header>
    )
}