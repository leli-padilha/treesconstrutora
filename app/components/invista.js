import Button from "./button"
import Image from "next/image"

export default function Invista(){
    return (
        <section className="bg-[url('/images/fundo_invista.png')] bg-cover bg-center p-4 md:p-10">
            <div className="max-w-7xl m-auto">
                <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div className="flex flex-col items-center gap-4 md:items-start  xl:gap-10">
                        <div className="text-white flex flex-col gap-2 max-w-lg md:gap-5  md:w-full">
                            <div className="flex flex-col gap-3">
                                <h2 className="font-bold border-b-8 border-primary text-xl text-center md:text-start md:text-3xl">Invista no Futuro</h2>
                                <h3 className="font-bold text-pretty text-center text-base md:text-start md:text-2xl">Oportunidades Exclusivas <br/> de Alta Rentabilidade</h3>
                            </div>
                            <p className="text-justify text-pretty md:text-xl">
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
                    
                    <Image 
                        src="/images/moedas.png"
                        alt="Imagem de moedas"
                        width={242}
                        height={214}
                        className="md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
                    />
                    
                </div>
            </div>  
        </section>
    )
}