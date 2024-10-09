import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[url('/images/fundo_rodape.png')] bg-cover bg-center p-4">
            <div className="max-w-7xl m-auto">
                <div className="relative w-[264px] h-[99px]">
                    <Image 
                        src="/images/logo/logo_branca.png"
                        alt="Logo marca Trees Construtora branca"
                        fill 
                    />
                </div>
            </div>
        </footer>
    )
}