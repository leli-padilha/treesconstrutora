import Box from "./box"

export default function Sobre(){
    return (
        <section className="bg-[url('/images/fundo_sobre.png')] bg-cover bg-center p-4 md:p-10">
            <div className="max-w-7xl m-auto flex flex-col items-center gap-4 md:gap-10">
                <h2 className="w-fit text-center text-primary font-bold border-b-8 pb-2 border-primary text-xl md:text-3xl xl:text-4xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">QUEM SOMOS</h2>
                <div className="bg-primary p-4 rounded-2xl md:p-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <p className="text-white text-base md:text-xl xl:text-2xl">
                        A Treês é uma construtora de alto padrão que está chegando para transformar o mercado imobiliário de Marau e região. 
                        Com uma equipe experiente e focada na excelência, criamos projetos que aliam design, conforto e exclusividade, 
                        para quem busca mais do que uma casa, busca um estilo de vida.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:gap-10">
                    <Box img="/icons/equipe.png" title="EQUIPE ESPECIALIZADA" desc="Experiência em arquitetura e construção de alto padrão." duration="200"/>
                    <Box img="/icons/visao.png" title="VISÃO INOVADORA" desc="Projetos que unem sofisticação e funcionalidade." duration="300" />
                    <Box img="/icons/foco.png" title="FOCO NO CLIENTE E NO INVESTIDOR" desc="Personalização para atender os sonhos e objetivos de lucro do investidor." duration="400"/>
                </div>
            </div>
        </section>
    )
}