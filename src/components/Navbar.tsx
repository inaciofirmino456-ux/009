import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Compass } from 'lucide-react';
import { RESTAURANT_INFO, buildPhoneCallLink } from '../data/restaurantData.ts';

interface NavbarProps {
  onOpenMessageModal: () => void;
  onOpenDeployModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMessageModal,
  onOpenDeployModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a 
          href="#" 
          className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#2C241E] hover:text-[#9A3412] transition-colors"
        >
          Tasquinha Dom Ferreira
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57493D]">
          <a href="#especialidades" className="hover:text-[#9A3412] transition-colors">
            Especialidades
          </a>
          <a href="#ementa" className="hover:text-[#9A3412] transition-colors">
            Ementa
          </a>
          <a href="#historia" className="hover:text-[#9A3412] transition-colors">
            Tradição desde 1951
          </a>
          <a href="#contactos" className="hover:text-[#9A3412] transition-colors">
            Contactos & Localização
          </a>
          <button
            onClick={onOpenDeployModal}
            className="text-xs text-[#8C7E72] hover:text-[#2C241E] transition-colors inline-flex items-center gap-1 cursor-pointer"
            title="Informações de Publicação no Netlify / Render"
          >
            <Compass className="w-3.5 h-3.5" />
            Publicação
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={buildPhoneCallLink('landline')}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#4A3F35] bg-[#EFE7DC] hover:bg-[#E4D8C8] rounded-xl transition-colors whitespace-nowrap"
            title="Ligar para a Tasquinha Dom Ferreira"
          >
            <Phone className="w-3.5 h-3.5 text-[#9A3412]" />
            <span className="tabular-nums">253 262 870</span>
          </a>

          <button
            onClick={onOpenMessageModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#9A3412] hover:bg-[#7C2D12] active:bg-[#63240F] rounded-xl shadow-xs transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mensagens & Reservas</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#57493D] hover:text-[#2C241E] rounded-lg"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7DFD5] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#57493D]">
            <a 
              href="#especialidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A3412]"
            >
              Especialidades
            </a>
            <a 
              href="#ementa" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A3412]"
            >
              Ementa Completa
            </a>
            <a 
              href="#historia" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A3412]"
            >
              Tradição desde 1951
            </a>
            <a 
              href="#contactos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A3412]"
            >
              Contactos & Horário
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployModal();
              }}
              className="text-left py-1 text-xs text-[#8C7E72] hover:text-[#2C241E] flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4" />
              Guia de Publicação (Netlify / Render)
            </button>
          </nav>
          
          <div className="pt-3 border-t border-[#E7DFD5] flex flex-col gap-2">
            <a
              href={buildPhoneCallLink('landline')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#EFE7DC] text-[#4A3F35] font-semibold text-xs rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#9A3412]" />
              Ligar Fixo: 253 262 870
            </a>
            <a
              href={buildPhoneCallLink('mobile')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#E7DFD5] text-[#4A3F35] font-semibold text-xs rounded-xl"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Ligar Telemóvel: 964 238 128
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
