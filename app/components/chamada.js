import Button from "./button"
import Image from "next/image"

export default function Chamada(){
    return (
        <section className="bg-fundo p-4">
            <div className="max-w-7xl m-auto bg-gradient rounded-2xl flex flex-col items-center">
                <div className="flex flex-col gap-4 p-4">
                    <h2 className="font-bold text-xl text-white">
                        Pronto para investir em <br/>
                        algo grande? Ou construir <br/>
                        a casa dos seus sonhos?
                    </h2>

                    <Button text="Fale conosco agora mesmo" className="text-sm"/>
                </div>
                <div>
                    <Image src="/images/engenheiro.png" alt="Engenheiro de braçõs cruzados" width={288} height={269}/>
                </div>
            </div>
        </section>
    )
}