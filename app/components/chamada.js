import Button from "./button"
import Image from "next/image"

export default function Chamada(){
    return (
        <section className="bg-fundo p-4 md:p-10">
            <div className="max-w-7xl m-auto bg-gradient rounded-2xl flex flex-col items-center sm:flex-row sm:justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="flex flex-col gap-4 p-4 sm:p-10">
                    <h2 className="font-bold text-xl text-white md:text-2xl lg:text-3xl xl:text-5xl">
                        Pronto para investir em <br/>
                        algo grande? Ou construir <br/>
                        a casa dos seus sonhos?
                    </h2>

                    <Button text="Fale conosco agora mesmo" className="text-sm"/>
                </div>
                <div>
                    <Image src="/images/engenheiro.png" alt="Engenheiro de braçõs cruzados" width={280} height={280} className="md:w-[320px] md:h-[320px] xl:w-[420px] xl:h-[420px]"/>
                </div>
            </div>
        </section>
    )
}