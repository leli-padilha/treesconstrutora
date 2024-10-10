"use client";

import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Quais são os benefícios de investir em uma casa de alto padrão?',
    answer: 'Casas de alto padrão oferecem maior valorização no longo prazo, pois estão localizadas em áreas nobres e com demanda constante. Além disso, apresentam melhor qualidade de construção, design sofisticado e mais atrativos como segurança, conforto e privacidade.',
  },
  {
    question: 'Quais são os principais custos envolvidos na compra de uma casa de alto padrão?',
    answer: 'Além do valor de aquisição, é preciso considerar despesas como ITBI (Imposto de Transmissão de Bens Imóveis), escritura e registro, além dos custos com decoração e possíveis adaptações. O valor do condomínio também pode ser maior, devido à infraestrutura diferenciada.',
  },
  {
    question: 'Quanto uma casa de alto padrão valoriza ao longo do tempo?',
    answer: 'A valorização varia de acordo com a localização, condições econômicas e demanda, mas imóveis de alto padrão tendem a valorizar de 10% a 20% ao ano, principalmente em áreas de alto interesse e crescimento urbano.',
  },
  {
    question: 'É fácil revender uma casa de alto padrão?',
    answer: 'Embora o público-alvo seja mais seleto, casas de alto padrão tendem a atrair compradores que buscam qualidade de vida e investimentos seguros, o que pode facilitar a revenda, especialmente em mercados imobiliários aquecidos. Além disso, a exclusividade e diferenciais do imóvel aumentam sua atratividade.',
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto bg-fundo">
        <div className="max-w-7xl m-auto p-4 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h2 className="text-xl font-bold text-center">Perguntas Frequentes</h2>
            <div className="space-y-4 flex flex-col ga-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="rounded-2xl bg-white">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)} 
                        >
                            <span className="text-base font-medium">{faq.question}</span>
                            <FaChevronDown
                                className={`text-gray-600 transition-transform duration-500 ${
                                activeIndex === index ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {/* Wrapper for the animated height */}
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className={`overflow-hidden transition-all duration-500 ease-in-out`}
                            style={{
                                maxHeight: activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
                            }}
                        >
                            <div className="p-4 text-gray-700">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
