import salaAzulejo from '../assets/images/sala_azulejo_1951_1790773624240.jpg';
import React from 'react';
import { TESTIMONIALS, RESTAURANT_INFO } from '../data/restaurantData.ts';
import { Heart, Award, Users, Star, Quote } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="historia" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heritage Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B45309] font-bold">
              História & Tradição Minhota
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#2C241E] tracking-tight leading-tight">
              Mais de 70 anos de hospitalidade e sabor autêntico em Braga.
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E52] leading-relaxed">
              Fundada em <strong className="text-[#2C241E]">1951</strong>, a <strong>Tasquinha Dom Ferreira</strong> nasceu da profunda paixão pelas raízes gastronómicas do Minho. Localizada na histórica Rua de São Vicente, mantém intacta a sua identidade original: um espaço acolhedor, onde o aroma das panelas a ferver e o som dos pratos na mesa convidam a saborear a vida devagar.
            </p>
            <p className="text-sm sm:text-base text-[#6B5E52] leading-relaxed">
              Aqui não há artifícios: há bacalhau de cura tradicional, vitela tenra assada com carinho, o aromático vinho verde servido na malga de barro e o respeito absoluto pelas receitas transmitidas de geração em geração.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E7DFD5]">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-[#B45309] tabular-nums">
                  1951
                </span>
                <span className="text-xs text-[#8C7E72]">Ano de Fundação</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-[#B45309] tabular-nums">
                  4.6★
                </span>
                <span className="text-xs text-[#8C7E72]">Classificação Média</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-[#B45309] tabular-nums">
                  100%
                </span>
                <span className="text-xs text-[#8C7E72]">Cozinha Caseira</span>
              </div>
            </div>
          </div>

          {/* Side Visual Card with 1951 Azulejo Tile Sign */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7DFD5] shadow-xl">
              <img
                src={salaAzulejo}
                alt="Interior autêntico da Tasquinha com azulejo A Tasca D. Ferreira 1951 e toalhas aos quadrados"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#FBBF24] font-semibold">
                  A Nossa Promessa
                </span>
                <p className="text-sm font-medium italic mt-1 text-slate-100">
                  "Entrar como cliente, sentar-se como amigo e sair com o coração cheio e a barriga consolada."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials with Claim-to-Proof Adjacency */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B45309] font-bold">
              Testemunhos Reais
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2C241E] mt-1">
              O que dizem os nossos clientes.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E7DFD5] rounded-xl flex flex-col justify-between hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed italic mb-4">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                  <div>
                    <strong className="block text-[#2C241E] font-semibold">{t.author}</strong>
                    <span className="text-[#8C7E72]">{t.origin}</span>
                  </div>
                  <span className="text-[#8C7E72] text-[11px]">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
