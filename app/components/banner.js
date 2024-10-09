import Button from "./button"

export default function Banner(){
    return (
        <section className="h-72 bg-[url('/images/banners/banner_1.webp')] bg-cover bg-center p-4 md:p-10 md:h-[500px] lg:h-[550px] 2xl:h-[750px]" >
            <div className="max-w-7xl m-auto">
                <div className="h-full flex flex-col justify-center gap-4 md:gap-6">
                    <div className="flex flex-col gap-2 md:gap-2">
                        <h1 className="font-bold text-2xl text-white leading-7 md:text-4xl lg:text-5xl lg:leading-tight">
                            Projetos de <br/>
                            Alto Padrão com<br/>
                            Oportunidades <br/>
                            Exclusivas para <br/>
                            Investidores
                        </h1>
                        <p className="font-medium text-base text-white md:text-2xl lg:text-3xl">
                            Transforme terrenos em sonhos <br/>
                            e investimentos em lucros.
                        </p>
                    </div>
                    <Button text="Entre em contato"/>
                </div>
            </div>
        </section>
    )
}