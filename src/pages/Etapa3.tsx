import { useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lite-vsl': { id?: string; base?: string; aspect?: string; className?: string };
    }
  }
}
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';

const PAYMENT_LINK = "https://";

const FAQ = [
  { q: 'Preciso saber montar fichas ou documentos?', a: 'Não. Está tudo pronto — você só preenche durante o atendimento.' },
  { q: 'Esse material realmente me protege como profissional?', a: 'Sim. Ele organiza informações e cria um registro formal do atendimento.' },
  { q: 'Posso usar mesmo sendo iniciante?', a: 'Sim. Inclusive, é o ideal para começar já com postura profissional.' },
  { q: 'Em quanto tempo posso aplicar?', a: 'No mesmo dia. Você já pode usar no próximo atendimento.' },
  { q: 'Isso vai deixar meu atendimento mais profissional mesmo?', a: 'Sim. Clientes percebem organização e confiança imediatamente.' },
  { q: 'E se eu não me adaptar ao material?', a: 'Você pode simplesmente não usar. O investimento é baixo e o risco mínimo.' },
];

const KIT = [
  '📘 Kit Completo de Fichas + Anamnese + Termos Profissionais',
  '🎁 Modelo de Termo de Consentimento Profissional',
  '🎁 Checklist de Atendimento Seguro',
  '🎁 Guia de Organização para Micropigmentadoras',
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#c4962a]/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[#c4962a]/5 transition-colors"
      >
        <span className="text-white font-semibold text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="text-[#c4962a] w-5 h-5 flex-shrink-0" /> : <ChevronDown className="text-[#c4962a] w-5 h-5 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-4 text-[#d0c8b8] text-sm leading-relaxed border-t border-[#c4962a]/10 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Etapa3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a1208] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#c4962a]/20 border border-[#c4962a]/40 text-[#c4962a] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            💰 ETAPA 3 DE 3 — OFERTA
          </span>
          <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-4">
            Atenda com <span className="text-[#c4962a]">segurança, respaldo e profissionalismo</span> usando fichas e documentos prontos — e evite erros que podem custar sua reputação.
          </h1>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden">
          <lite-vsl id="cmpedxgoc00013o6rbf6rhp93" base="https://hostplayvideos.vercel.app" aspect="9/16"></lite-vsl>
        </div>

        <div className="space-y-2 mb-8">
          {FAQ.map((item, i) => (
            <FAQItem key={i} q={`${i + 1}️⃣ ${item.q}`} a={item.a} />
          ))}
        </div>

        <div className="bg-[#1a1208] border-2 border-[#c4962a]/50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#c4962a] text-xl">🔒</span>
            <h2 className="text-white font-black text-lg">SEGREDO OCULTO REVELADO</h2>
          </div>
          <p className="text-[#d0c8b8] text-sm mb-4 leading-relaxed">
            Sei que esse kit já vai te ajudar muito… Mas se você quer se posicionar como profissional de verdade, tem algo a mais.
          </p>
          <div className="space-y-2 mb-4">
            {KIT.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-white">
                <span className="flex-shrink-0">{item.split(' ')[0]}</span>
                <span>{item.substring(item.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
          <p className="text-[#d0c8b8] text-sm">
            Funciona para qualquer profissional que quer parar de improvisar e começar a ser levada a sério.
          </p>
        </div>

        <div className="bg-[#1a1208] border border-[#c4962a]/30 rounded-2xl p-8 text-center mb-6">
          <p className="text-[#d0c8b8] text-sm mb-1">Acesso imediato — Ticket Único</p>
          <p className="text-6xl font-black text-white mb-1">
            <span className="text-2xl text-[#d0c8b8]">R$</span>17,00
          </p>
          <p className="text-[#c4962a] text-xs mb-6 font-semibold">⚡ Oferta exclusiva disponível apenas nesta página</p>

          <div className="flex flex-col gap-3">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#c4962a] to-[#e8b84b] text-black font-black py-5 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(196,150,42,0.5)]"
            >
              🔥 Quero o acesso completo por R$17,00
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#888]">
            <Shield className="w-4 h-4" />
            <span>7 Dias de Garantia Incondicional</span>
          </div>
        </div>

      </div>
    </div>
  );
}
