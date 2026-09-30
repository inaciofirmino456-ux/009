import React from 'react';
import { RESTAURANT_INFO, buildPhoneCallLink, buildSmsLink, buildEmailLink } from '../data/restaurantData.ts';
import { Phone, MessageSquare, Mail, Compass } from 'lucide-react';

interface FooterProps {
  onOpenMessageModal: () => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMessageModal, onOpenDeployModal }) => {
  return (
    <footer className="bg-[#1C1613] text-[#FAF7F2] border-t border-[#332A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#332A24]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-bold font-display text-white">
              Tasquinha Dom Ferreira
            </span>
            <p className="text-xs sm:text-sm text-[#A89D91] leading-relaxed max-w-sm">
              Mais de 70 anos a servir o autêntico sabor minhoto em Braga. Pratos confecionados com tempo, respeito pelos ingredientes e dedicação à tradição.
            </p>
            <div className="text-xs text-[#8C7E72]">
              Rua de São Vicente, 33-35 · 4710-312 Braga, Portugal
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#FBBF24] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#C7BDB1]">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Pratos Emblemáticos
                </a>
              </li>
              <li>
                <a href="#ementa" className="hover:text-white transition-colors">
                  Ementa Completa
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  A Nossa História desde 1951
                </a>
              </li>
              <li>
                <a href="#contactos" className="hover:text-white transition-colors">
                  Contactos & Horários
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenDeployModal}
                  className="hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1 cursor-pointer text-left"
                >
                  <Compass className="w-3.5 h-3.5" />
                  Publicar no Netlify ou Render
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts Action */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#FBBF24] font-semibold">
              Contacte-nos Diretamente
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={buildPhoneCallLink('landline')}
                className="flex items-center gap-2 text-[#C7BDB1] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span className="tabular-nums">Fixo: {RESTAURANT_INFO.contacts.landline}</span>
              </a>
              <a
                href={buildSmsLink()}
                className="flex items-center gap-2 text-[#C7BDB1] hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span className="tabular-nums">SMS / Móvel: {RESTAURANT_INFO.contacts.mobile}</span>
              </a>
              <a
                href={buildEmailLink()}
                className="flex items-center gap-2 text-[#C7BDB1] hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{RESTAURANT_INFO.contacts.email}</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenMessageModal}
                className="w-full py-2 px-3 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Abrir Central de Mensagens
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean & Quiet */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7E72]">
          <p>© {new Date().getFullYear()} Tasquinha Dom Ferreira. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a 
              href={RESTAURANT_INFO.contacts.facebook}
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook Oficial
            </a>
            <span>·</span>
            <button 
              onClick={onOpenDeployModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Hospedagem & Deploy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
