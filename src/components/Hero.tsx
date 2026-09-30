import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO, buildSmsLink, buildPhoneCallLink, buildEmailLink } from '../data/restaurantData.ts';

interface HeroProps {
  onOpenMessageModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMessageModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#221B17] text-white">
      {/* Background Hero Image with authentic facade photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/fachada_tasquinha_1790773601323.jpg"
          alt="Fachada histórica com portas vermelhas da Tasquinha Dom Ferreira em Braga"
          className="w-full h-full object-cover object-center opacity-45 scale-102 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411] via-[#1A1411]/70 to-[#1A1411]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          
          {/* Zero-Pill Unboxed Trust Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#E4D5C5] mb-6">
            <span className="text-[#FBBF24] flex items-center gap-1 font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" />
              {RESTAURANT_INFO.rating} de avaliação
            </span>
            <span aria-hidden="true" className="text-[#8C7E72]">·</span>
            <span>Mais de {RESTAURANT_INFO.reviewsCount} clientes satisfeitos</span>
            <span aria-hidden="true" className="text-[#8C7E72]">·</span>
            <span>Desde {RESTAURANT_INFO.foundingYear} em Braga</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF7F2] leading-[1.1] mb-6 text-balance">
            A alma e a mesa farta da cozinha minhota tradicional.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#D5C9BD] leading-relaxed mb-10 max-w-2xl">
            Bem-vindo à <strong className="text-white font-semibold">Tasquinha Dom Ferreira</strong>, refúgio de sabores autênticos na Rua de São Vicente. Do inconfundível Bacalhau à Braga ao fumegante Arroz de Pato e ao tradicional Cozido de quinta-feira.
          </p>

          {/* Direct CTA Buttons with immediate Mensagens / Chamada / Email */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={onOpenMessageModal}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#B45309] hover:bg-[#92400E] active:bg-[#78350F] text-white font-semibold text-sm rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Abrir nas Mensagens / Reservar</span>
            </button>

            <a
              href={buildPhoneCallLink('landline')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF7F2] backdrop-blur-xs font-semibold text-sm rounded-xl border border-white/15 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span className="tabular-nums">Ligar 253 262 870</span>
            </a>

            <a
              href="#ementa"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-[#E4D5C5] hover:text-white transition-colors"
            >
              <span>Ver Ementa</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick info badges below CTAs */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#C7BDB1]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium">Localização</strong>
                Rua de São Vicente 33-35, Braga
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium">Quinta-feira Especial</strong>
                Famoso Cozido à Portuguesa
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium">Contacto Email</strong>
                tasquinhadomferreira@gmail.com
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
