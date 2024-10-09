import Button from "./button"
import Image from "next/image"

export default function Invista(){
    return (
        <section className="bg-[url('/images/fundo_invista.png')] bg-cover bg-center p-4">
            <div className="max-w-7xl m-auto">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col gap-4">
                        <div className="text-white flex flex-col gap-2">
                            <h2 className="font-bold border-b-2 border-primary text-xl text-center">Invista no Futuro</h2>
                            <h3 className="font-bold text-pretty text-center text-base">Oportunidades Exclusivas de Alta Rentabilidade</h3>
                            <p className="text-justify text-pretty">
                                A construção de imóveis de alto padrão em
                                Marau está em ascensão, e agora você pode
                                ser parte disso desde o início. Invista com a
                                TREÊS e tenha acesso a projetos exclusivos,
                                com potencial de valorização e lucros de até
                                35%, dependendo da valorização do terreno
                                e da execução do projeto.
                            </p>
                        </div>
                        <Button text="Saiba mais"/>
                    </div>
                    <div className="relative h-72 w-72">
                        <Image 
                            src="/images/moedas.png"
                            alt="Imagem de moedas"
                            fill
                        />
                    </div>
                </div>
            </div>  
        </section>
    )
}