import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Send, 
  Navigation,
  AlertCircle
} from 'lucide-react';
import { RESTAURANT_INFO, buildSmsLink, buildWhatsAppLink, buildEmailLink, buildPhoneCallLink } from '../data/restaurantData.ts';

interface ContactSectionProps {
  onOpenMessageModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenMessageModal }) => {
  return (
    <section id="contactos" className="py-20 sm:py-28 bg-[#F4EFE6] border-t border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B45309] font-bold">
            Contactos Diretos & Informações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#2C241E] mt-2 mb-4 tracking-tight">
            Reserve a sua mesa ou consulte a ementa do dia.
          </h2>
          <p className="text-base text-[#6B5E52] leading-relaxed">
            Abra diretamente as <strong>Mensagens (SMS)</strong>, WhatsApp, chamada telefónica ou email para falar com a equipa da Tasquinha Dom Ferreira.
          </p>
        </div>

        {/* Notice about prices */}
        <div className="mb-12 p-4 bg-[#FAF7F2] border-l-4 border-[#B45309] rounded-r-xl shadow-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#4A3F35] font-medium leading-relaxed">
            {RESTAURANT_INFO.priceNotice}
          </p>
        </div>

        {/* 4 Interactive Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Channel 1: SMS / Mensagens Diretas */}
          <div className="p-6 bg-white border border-[#E7DFD5] rounded-2xl flex flex-col justify-between hover:border-blue-500/50 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#2C241E] mb-1">
                Mensagens (SMS)
              </h3>
              <p className="text-xs text-[#6B5E52] leading-relaxed mb-4">
                Abre a aplicação de SMS no seu telemóvel para envio imediato de dúvidas e reservas.
              </p>
              <div className="text-sm font-semibold font-mono text-[#2C241E] mb-4 tabular-nums">
                {RESTAURANT_INFO.contacts.mobile}
              </div>
            </div>

            <a
              href={buildSmsLink()}
              className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Abrir nas Mensagens</span>
            </a>
          </div>

          {/* Channel 2: WhatsApp */}
          <div className="p-6 bg-white border border-[#E7DFD5] rounded-2xl flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#2C241E] mb-1">
                WhatsApp
              </h3>
              <p className="text-xs text-[#6B5E52] leading-relaxed mb-4">
                Conversa instantânea e consulta sobre pratos do dia e disponibilidade.
              </p>
              <div className="text-sm font-semibold font-mono text-[#2C241E] mb-4 tabular-nums">
                {RESTAURANT_INFO.contacts.mobile}
              </div>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir no WhatsApp</span>
            </a>
          </div>

          {/* Channel 3: Chamada Telefónica */}
          <div className="p-6 bg-white border border-[#E7DFD5] rounded-2xl flex flex-col justify-between hover:border-amber-500/50 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#2C241E] mb-1">
                Telefone / Chamada
              </h3>
              <p className="text-xs text-[#6B5E52] leading-relaxed mb-4">
                Ligue diretamente para a nossa equipa para reservas no próprio dia.
              </p>
              <div className="space-y-1 mb-4 text-xs font-mono tabular-nums">
                <div className="text-[#2C241E] font-semibold">Fixo: {RESTAURANT_INFO.contacts.landline}</div>
                <div className="text-[#6B5E52]">Móvel: {RESTAURANT_INFO.contacts.mobile}</div>
              </div>
            </div>

            <a
              href={buildPhoneCallLink('landline')}
              className="w-full py-2.5 px-3 bg-[#B45309] hover:bg-[#92400E] active:bg-[#78350F] text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ligar Agora</span>
            </a>
          </div>

          {/* Channel 4: Email */}
          <div className="p-6 bg-white border border-[#E7DFD5] rounded-2xl flex flex-col justify-between hover:border-stone-500/50 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#2C241E] mb-1">
                Email Direto
              </h3>
              <p className="text-xs text-[#6B5E52] leading-relaxed mb-4">
                Ideal para grupos maiores, informações detalhadas de preços ou eventos.
              </p>
              <div className="text-xs font-semibold text-[#2C241E] mb-4 truncate" title={RESTAURANT_INFO.contacts.email}>
                {RESTAURANT_INFO.contacts.email}
              </div>
            </div>

            <a
              href={buildEmailLink()}
              className="w-full py-2.5 px-3 bg-[#2C241E] hover:bg-black text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Abrir no Email</span>
            </a>
          </div>

        </div>

        {/* Two-Column Detail: Horários & Localização */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Horários Table */}
          <div className="lg:col-span-6 bg-white border border-[#E7DFD5] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#B45309] flex items-center justify-center border border-[#E7DFD5]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#2C241E]">
                  Horário de Funcionamento
                </h3>
                <p className="text-xs text-[#8C7E72]">
                  Aberto para almoços tradicionais e grupos sob reserva
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#F2ECE3] text-xs sm:text-sm">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#2C241E]">{h.day}</span>
                    {h.day === 'Quinta-feira' && (
                      <span className="text-[11px] text-[#B45309] font-medium hidden sm:inline">
                        (Dia do Cozido)
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`font-mono tabular-nums ${h.hours === 'Encerrado' ? 'text-red-700 font-medium' : 'text-[#2C241E] font-medium'}`}>
                      {h.hours}
                    </span>
                    <span className="block text-[11px] text-[#8C7E72]">{h.note}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl text-xs text-[#6B5E52] leading-relaxed">
              <strong className="text-[#2C241E] block mb-1">Jantares e Almoços de Grupo:</strong>
              Para marcações especiais ou grupos fora do horário habitual, por favor contacte a equipa com antecedência.
            </div>
          </div>

          {/* Localização e Morada */}
          <div className="lg:col-span-6 bg-white border border-[#E7DFD5] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#B45309] flex items-center justify-center border border-[#E7DFD5]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#2C241E]">
                  Localização em Braga
                </h3>
                <p className="text-xs text-[#8C7E72]">
                  No centro tradicional de Braga, perto da Rua de São Vicente
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl">
                <span className="text-xs text-[#8C7E72] uppercase font-bold tracking-wider block mb-1">
                  Morada Principal
                </span>
                <p className="text-sm font-semibold text-[#2C241E]">
                  {RESTAURANT_INFO.address.street}
                </p>
                <p className="text-xs text-[#6B5E52]">
                  {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.country}
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-[#8C7E72] uppercase font-bold tracking-wider block mb-1">
                  Outra Referência Conhecida
                </span>
                <p className="text-xs text-[#4A3F35]">
                  {RESTAURANT_INFO.address.secondaryStreet}
                </p>
              </div>
            </div>

            {/* Google Maps Direct Link */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#2C241E] hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FBBF24]" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <button
                onClick={onOpenMessageModal}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF7F2] hover:bg-[#EFE7DC] border border-[#E7DFD5] text-[#2C241E] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#B45309]" />
                <span>Reservar por Mensagem</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
