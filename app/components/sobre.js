import Box from "./box"

export default function Sobre(){
    return (
        <section className="bg-[url('/images/fundo_sobre.png')] bg-cover bg-center p-4">
            <div className="max-w-7xl m-auto flex flex-col gap-4">
                <h2 className="text-center text-primary font-bold" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">QUEM SOMOS</h2>
                <div className="bg-primary p-4 rounded-2xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <p className="text-white text-jus">
                        A Treês é uma construtora de alto padrão que está chegando para transformar o mercado imobiliário de Marau e região. 
                        Com uma equipe experiente e focada na excelência, criamos projetos que aliam design, conforto e exclusividade, 
                        para quem busca mais do que uma casa, busca um estilo de vida.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Box img="/icons/equipe.png" title="EQUIPE ESPECIALIZADA" desc="Experiência em arquitetura e construção de alto padrão." duration="200"/>
                    <Box img="/icons/visao.png" title="VISÃO INOVADORA" desc="Projetos que unem sofisticação e funcionalidade." duration="300" />
                    <Box img="/icons/foco.png" title="FOCO NO CLIENTE E NO INVESTIDOR" desc="Personalização para atender os sonhos e objetivos de lucro do investidor." duration="400"/>
                </div>
            </div>
        </section>
    )
}