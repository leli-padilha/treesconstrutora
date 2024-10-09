"use client";

import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'O que é o Next.js?',
    answer: 'Next.js é um framework React para produção, criado pela Vercel.',
  },
  {
    question: 'Como instalar o Tailwind no Next.js?',
    answer: 'Você pode instalar o Tailwind via npm e configurar no arquivo de configuração do Next.js.',
  },
  {
    question: 'O que são os hooks do React?',
    answer: 'Hooks são funções especiais do React que permitem o uso de estado e outros recursos no React sem escrever uma classe.',
  },
  {
    question: 'Qual a diferença entre Next.js e React?',
    answer: 'Next.js é um framework baseado no React que facilita a criação de sites com renderização do lado do servidor e otimizações.',
  },
  {
    question: 'O que é Tailwind CSS?',
    answer: 'Tailwind CSS é um framework CSS que fornece utilitários prontos para uso para construir layouts rapidamente.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto bg-fundo">
        <div className="max-w-7xl m-auto p-4 flex flex-col gap-5">
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
