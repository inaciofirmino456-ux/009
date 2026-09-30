import React, { useState } from 'react';
import { X, MessageSquare, Phone, Mail, Send, CheckCircle2, Calendar, Users, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, buildSmsLink, buildWhatsAppLink, buildEmailLink, buildPhoneCallLink } from '../data/restaurantData.ts';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'sms' | 'whatsapp' | 'email' | 'call' | 'general';
  selectedDish?: string | null;
}

export const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  initialType = 'sms',
  selectedDish
}) => {
  const [activeTab, setActiveTab] = useState<'quick' | 'form'>(initialType === 'general' ? 'form' : 'quick');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '12:30',
    notes: selectedDish ? `Gostaria de saber o preço e disponibilidade de ${selectedDish}.` : ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  // Formatted message body with dish inquiry support
  const customMessage = selectedDish
    ? `Olá Tasquinha Dom Ferreira! Gostaria de consultar o preço e disponibilidade para o prato: ${selectedDish}.${formData.name ? ' Meu nome: ' + formData.name + '.' : ''}${formData.date ? ' Data pretendida: ' + formData.date + '.' : ''}`
    : formData.name
    ? `Olá Tasquinha Dom Ferreira! Meu nome é ${formData.name}. Gostaria de solicitar informações de preços e disponibilidade de mesa para ${formData.guests} pessoas no dia ${formData.date || 'a combinar'} às ${formData.time}.${formData.notes ? ' Observações: ' + formData.notes : ''} Contacto: ${formData.phone || 'este número'}.`
    : `Olá Tasquinha Dom Ferreira! Gostaria de consultar informações sobre os preços da ementa e disponibilidade para reserva.`;

  const smsUrl = buildSmsLink(customMessage);
  const whatsAppUrl = buildWhatsAppLink(customMessage);
  const emailUrl = buildEmailLink(
    `Reserva de Mesa - ${formData.name || 'Cliente'}`,
    `Olá Tasquinha Dom Ferreira,\n\n${customMessage}\n\nObrigado!`
  );

  const handleSubmitInApp = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      // Auto close or keep confirmation visible
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-[#2C241E] text-[#F5EFE6] px-6 py-5 flex items-start justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#D97706] font-semibold">
              Contactar Diretamente
            </span>
            <h3 id="modal-title" className="text-xl font-bold font-display text-white mt-1">
              Falar com a Tasquinha Dom Ferreira
            </h3>
            <p className="text-xs text-[#C7BDB1] mt-0.5">
              Escolha abrir diretamente na sua aplicação de Mensagens, WhatsApp ou chamada
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#C7BDB1] hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#E7DFD5] bg-[#F3ECE0]/50 p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('quick')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'quick'
                ? 'bg-white text-[#2C241E] shadow-xs'
                : 'text-[#6B5E52] hover:text-[#2C241E]'
            }`}
          >
            Abertura Rápida nos Contactos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'form'
                ? 'bg-white text-[#2C241E] shadow-xs'
                : 'text-[#6B5E52] hover:text-[#2C241E]'
            }`}
          >
            Personalizar Dados da Reserva
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {sentSuccess ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-[#16A34A] mx-auto mb-3" />
              <h4 className="text-lg font-bold text-[#2C241E] font-display">Mensagem Preparada com Sucesso!</h4>
              <p className="text-sm text-[#6B5E52] mt-2 mb-6 max-w-sm mx-auto">
                Pode também abrir diretamente no seu telemóvel para envio imediato:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={smsUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563EB] text-white text-xs font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Abrir nas Mensagens (SMS)
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#16A34A] text-white text-xs font-semibold rounded-xl hover:bg-[#15803D] transition-colors"
                >
                  Abrir no WhatsApp
                </a>
              </div>
              <button
                onClick={() => {
                  setSentSuccess(false);
                  onClose();
                }}
                className="mt-6 text-xs text-[#8C7E72] hover:underline"
              >
                Fechar janela
              </button>
            </div>
          ) : activeTab === 'quick' ? (
            <div className="space-y-4">
              <p className="text-xs text-[#6B5E52] leading-relaxed">
                Ao clicar nas opções abaixo, o seu telemóvel ou computador abrirá diretamente a respetiva aplicação com a mensagem ou chamada pré-preenchida para a <strong>Tasquinha Dom Ferreira</strong>:
              </p>

              {/* Action 1: SMS / Messages app */}
              <a
                href={smsUrl}
                className="group flex items-center justify-between p-4 bg-white border border-[#E7DFD5] rounded-xl hover:border-[#2563EB] hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2C241E]">
                      Abrir nas Mensagens (SMS)
                    </div>
                    <div className="text-xs text-[#6B5E52]">
                      Abre a app de SMS/Mensagens para {RESTAURANT_INFO.contacts.mobile}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Abrir App
                </span>
              </a>

              {/* Action 2: WhatsApp */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 bg-white border border-[#E7DFD5] rounded-xl hover:border-emerald-600 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2C241E]">
                      Conversar no WhatsApp
                    </div>
                    <div className="text-xs text-[#6B5E52]">
                      Conversa direta via {RESTAURANT_INFO.contacts.mobile}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  WhatsApp
                </span>
              </a>

              {/* Action 3: Phone Call */}
              <a
                href={buildPhoneCallLink('landline')}
                className="group flex items-center justify-between p-4 bg-white border border-[#E7DFD5] rounded-xl hover:border-amber-600 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2C241E]">
                      Chamada Telefónica Direta
                    </div>
                    <div className="text-xs text-[#6B5E52]">
                      Fixo: {RESTAURANT_INFO.contacts.landline} (ou telemóvel {RESTAURANT_INFO.contacts.mobile})
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  Ligar
                </span>
              </a>

              {/* Action 4: Email */}
              <a
                href={emailUrl}
                className="group flex items-center justify-between p-4 bg-white border border-[#E7DFD5] rounded-xl hover:border-slate-800 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2C241E]">
                      Abrir no Email
                    </div>
                    <div className="text-xs text-[#6B5E52]">
                      {RESTAURANT_INFO.contacts.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                  Escrever
                </span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmitInApp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#4A3F35] mb-1">
                  O seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Ferreira"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5C9BD] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#4A3F35] mb-1">
                    Número de Contacto
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: 912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5C9BD] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4A3F35] mb-1">
                    Nº de Pessoas
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5C9BD] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, '15+'].map((num) => (
                      <option key={num} value={num}>
                        {num} {Number(num) === 1 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#4A3F35] mb-1">
                    Data Pretendida
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5C9BD] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4A3F35] mb-1">
                    Hora Aproximada
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5C9BD] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                  >
                    <option value="12:00">12:00 (Abertura)</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4A3F35] mb-1">
                  Notas ou Prato de Interesse (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Gostaria de reservar Cozido à Portuguesa ou Bacalhau à Braga..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5C9BD] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                />
              </div>

              {/* Action Buttons to send with pre-filled content */}
              <div className="pt-2 border-t border-[#E7DFD5] space-y-2">
                <span className="block text-xs text-[#6B5E52]">
                  Clique para abrir com a sua mensagem pronta:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={smsUrl}
                    className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#2563EB] text-white text-xs font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Abrir nas Mensagens (SMS)
                  </a>
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#16A34A] text-white text-xs font-semibold rounded-xl hover:bg-[#15803D] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Abrir no WhatsApp
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={emailUrl}
                    className="flex items-center justify-center gap-2 px-3.5 py-2 bg-stone-100 text-stone-800 text-xs font-semibold rounded-xl hover:bg-stone-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Abrir no Email
                  </a>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-3.5 py-2 bg-[#2C241E] text-white text-xs font-semibold rounded-xl hover:bg-[#1F1915] transition-colors"
                  >
                    <Sparkles className="w-4 h-4" />
                    Registar Pedido no Site
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
