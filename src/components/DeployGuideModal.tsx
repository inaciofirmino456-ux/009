import React, { useState } from 'react';
import { X, Globe, Cloud, Check, Copy, ExternalLink, Terminal } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="deploy-modal-title"
      >
        {/* Header */}
        <div className="bg-[#1E293B] text-white px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              <Globe className="w-3.5 h-3.5" />
              Guia de Publicação & Hospedagem
            </div>
            <h3 id="deploy-modal-title" className="text-lg font-bold font-display text-white mt-1">
              Publicar no Netlify, Render ou Partilhar o Link Atual
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              O seu site já está ativo e configurado com ficheiros de build automáticos.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-sm text-[#3E342B]">
          {/* Status 1: Live Now */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  1. O Site Já Está Online e a Funcionar!
                </h4>
                <p className="text-xs text-emerald-800 mt-1">
                  Pode usar e partilhar imediatamente o link desta aplicação fornecido pelo AI Studio. Todos os botões de ligação direta, SMS, WhatsApp e email funcionam no telemóvel e computador.
                </p>
              </div>
            </div>
          </div>

          {/* Option A: Netlify */}
          <div className="p-4 bg-white border border-[#E7DFD5] rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#00C7B7]/20 text-[#00897B] font-bold text-xs flex items-center justify-center">
                  N
                </span>
                <h4 className="font-semibold text-[#2C241E]">Opção A: Publicar no Netlify (Grátis & Rápido)</h4>
              </div>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                netlify.toml incluído ✓
              </span>
            </div>
            <p className="text-xs text-[#6B5E52]">
              Já criámos o ficheiro <code>netlify.toml</code> na raiz do projeto com as regras de build do Vite.
            </p>
            <ol className="text-xs text-[#4A3F35] space-y-1.5 list-decimal pl-4">
              <li>Aceda a <a href="https://app.netlify.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">app.netlify.com</a> e crie uma conta gratuita.</li>
              <li>Conecte o seu repositório GitHub ou arraste a pasta <code>dist</code> gerada pelo comando <code>npm run build</code>.</li>
              <li>O Netlify deteta automaticamente as definições: <code>Publish directory: dist</code>.</li>
            </ol>
          </div>

          {/* Option B: Render */}
          <div className="p-4 bg-white border border-[#E7DFD5] rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                  R
                </span>
                <h4 className="font-semibold text-[#2C241E]">Opção B: Publicar no Render</h4>
              </div>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                render.yaml incluído ✓
              </span>
            </div>
            <p className="text-xs text-[#6B5E52]">
              Já criámos o ficheiro de infraestrutura como código <code>render.yaml</code> no projeto.
            </p>
            <ol className="text-xs text-[#4A3F35] space-y-1.5 list-decimal pl-4">
              <li>Aceda a <a href="https://dashboard.render.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">dashboard.render.com</a>.</li>
              <li>Clique em <strong>New +</strong> &rarr; <strong>Static Site</strong>.</li>
              <li>Conecte o seu repositório Git.</li>
              <li>O comando de build é <code>npm run build</code> e o diretório de publicação é <code>dist</code>.</li>
            </ol>
          </div>

          {/* Terminal Command for export */}
          <div className="p-3 bg-[#1E1E1E] text-slate-200 rounded-xl font-mono text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>npm run build</span>
            </div>
            <button
              onClick={() => copyText('npm run build', 'build_cmd')}
              className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-[11px] text-white flex items-center gap-1 transition-colors"
            >
              {copiedKey === 'build_cmd' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copiedKey === 'build_cmd' ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F3ECE0] border-t border-[#E7DFD5] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2C241E] text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors"
          >
            Entendido, Continuar no Site
          </button>
        </div>
      </div>
    </div>
  );
};
