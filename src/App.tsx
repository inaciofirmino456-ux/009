/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SpecialtiesSection } from './components/SpecialtiesSection.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MessageModal } from './components/MessageModal.tsx';
import { DeployGuideModal } from './components/DeployGuideModal.tsx';
import { RESTAURANT_INFO, buildPhoneCallLink, buildSmsLink } from './data/restaurantData.ts';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [deployModalOpen, setDeployModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const handleSelectDishToReserve = (dishName: string) => {
    setSelectedDish(dishName);
    setMessageModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241F1C]">
      {/* Top Bar Navigation */}
      <Navbar 
        onOpenMessageModal={() => {
          setSelectedDish(null);
          setMessageModalOpen(true);
        }}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenMessageModal={() => {
            setSelectedDish(null);
            setMessageModalOpen(true);
          }}
        />

        {/* Featured Specialties & Photos */}
        <SpecialtiesSection 
          onSelectDishToReserve={handleSelectDishToReserve}
        />

        {/* Full Traditional Menu */}
        <MenuSection 
          onSelectDishToReserve={handleSelectDishToReserve}
        />

        {/* Heritage Story & Proof */}
        <AboutSection />

        {/* Direct Contacts & Maps */}
        <ContactSection 
          onOpenMessageModal={() => {
            setSelectedDish(null);
            setMessageModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenMessageModal={() => {
          setSelectedDish(null);
          setMessageModalOpen(true);
        }}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Modals */}
      <MessageModal
        isOpen={messageModalOpen}
        onClose={() => {
          setMessageModalOpen(false);
          setSelectedDish(null);
        }}
        initialType="sms"
        selectedDish={selectedDish}
      />

      <DeployGuideModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% viewport height) */}
      <aside aria-label="Ações Rápidas de Reserva" className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E7DFD5] shadow-lg flex items-center gap-2">
        <a
          href={buildPhoneCallLink('landline')}
          className="flex-1 py-2.5 px-3 bg-[#EFE7DC] active:bg-[#E4D8C8] text-[#2C241E] text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-[#B45309]" />
          <span>Ligar Fixo</span>
        </a>

        <a
          href={buildSmsLink()}
          className="flex-1 py-2.5 px-3 bg-[#2563EB] active:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Abrir Mensagens</span>
        </a>
      </aside>
    </div>
  );
}
