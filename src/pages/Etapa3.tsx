import { useState, useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lite-vsl': { id?: string; base?: string; aspect?: string; className?: string };
    }
  }
}
import { Shield, ChevronDown, ChevronUp, CheckCircle2, Clock } from 'lucide-react';

const PAYMENT_LINK = "https://";

function playDing() {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const gain = ctx.createGain();
  gain.connect(ctx.destination);

  const freqs = [523, 659, 784, 1046];
  freqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.connect(gain);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
    gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.3);
    osc.start(ctx.currentTime + i * 0.08);
    osc.stop(ctx.currentTime + i * 0.08 + 0.3);
  });
}

const FAQ = [
  { q: 'Preciso saber montar fichas ou documentos?', a: 'Não. Está tudo pronto — você só preenche durante o atendimento.' },
  { q: 'Esse material realmente me protege como profissional?', a: 'Sim. Ele organiza informações e cria um registro formal do atendimento, te protegendo de qualquer questionamento futuro.' },
  { q: 'Posso usar mesmo sendo iniciante?', a: 'Sim. Inclusive, é o ideal para começar já com postura profissional desde o primeiro atendimento.' },
  { q: 'Em quanto tempo posso aplicar?', a: 'No mesmo dia. Você já pode usar no próximo atendimento — é só baixar e imprimir ou usar no digital.' },
  { q: 'Isso vai deixar meu atendimento mais profissional mesmo?', a: 'Sim. Clientes percebem organização e confiança imediatamente — e isso justifica cobrar mais.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor sem perguntas.' },
];

const KIT_ITEMS = [
  { icon: '📋', label: 'Kit Completo de Fichas de Atendimento', value: 'R$47' },
  { icon: '📝', label: 'Anamnese Profissional Completa', value: 'R$37' },
  { icon: '🛡️', label: 'Termo de Consentimento Profissional', value: 'R$27' },
  { icon: '✅', label: 'Checklist de Atendimento Seguro', value: 'R$17' },
  { icon: '📖', label: 'Guia de Organização para Micropigmentadoras', value: 'R$27' },
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

function Countdown() {
  const [time, setTime] = useState({ m: 14, s: 59 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { m: prev.m - 1, s: 59 };
        return { m: 14, s: 59 };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 bg-red-900/30 border border-red-500/40 rounded-xl px-4 py-3 mb-6">
      <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
      <span className="text-red-300 text-sm font-bold">
        Oferta expira em: <span className="text-white font-black tabular-nums">{String(time.m).padStart(2,'0')}:{String(time.s).padStart(2,'0')}</span>
      </span>
    </div>
  );
}

export default function Etapa3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a1208] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest animate-pulse">
            🔥 ÚLTIMA ETAPA — OFERTA ESPECIAL
          </span>
          <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
            Você está a <span className="text-[#c4962a]">um clique</span> de atender com{' '}
            <span className="text-[#c4962a]">segurança, respaldo e autoridade</span> —{' '}
            sem improvisar nunca mais.
          </h1>
          <p className="text-[#d0c8b8] text-sm">Veja o que você recebe agora 👇</p>
        </div>

        {/* Video */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <lite-vsl id="cmpedxgoc00013o6rbf6rhp93" base="https://hostplayvideos.vercel.app" aspect="9/16"></lite-vsl>
        </div>

        {/* Value Stack */}
        <div className="bg-[#1a1208] border-2 border-[#c4962a]/50 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-black text-center text-lg mb-1">O que você leva hoje:</h2>
          <p className="text-[#d0c8b8] text-xs text-center mb-5">Valor real de cada item separado</p>
          <div className="space-y-3 mb-5">
            {KIT_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-[#c4962a] font-black text-sm flex-shrink-0 line-through opacity-60">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[#c4962a]/30 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-[#d0c8b8] text-sm">Valor total separado:</span>
              <span className="text-[#d0c8b8] text-sm line-through">R$155,00</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white font-black text-lg">Você paga hoje:</span>
              <span className="text-[#c4962a] font-black text-2xl">R$17,00</span>
            </div>
            <p className="text-center text-xs text-green-400 mt-2 font-semibold">✅ Você economiza R$138,00</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h3 className="text-white font-black text-center text-base mb-4">Ainda tem dúvidas? Respondemos tudo:</h3>
          <div className="space-y-2">
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={`${i + 1}️⃣ ${item.q}`} a={item.a} />
            ))}
          </div>
        </div>

        {/* Offer Box */}
        <div className="bg-[#1a1208] border-2 border-[#c4962a] rounded-2xl p-8 text-center mb-6 shadow-[0_0_40px_rgba(196,150,42,0.2)]">
          <Countdown />

          <p className="text-[#d0c8b8] text-xs mb-1 uppercase tracking-widest">Acesso imediato · Pagamento único</p>
          <div className="mb-1">
            <p className="text-[#888] text-sm line-through">De R$155,00</p>
            <p className="text-6xl font-black text-white leading-none">
              <span className="text-2xl text-[#d0c8b8]">R$</span>17<span className="text-3xl">,00</span>
            </p>
          </div>
          <p className="text-green-400 text-xs mb-6 font-bold">⚡ 89% de desconto — só nesta página</p>

          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playDing}
            className="block w-full bg-gradient-to-r from-[#c4962a] to-[#e8b84b] text-black font-black py-5 rounded-full text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(196,150,42,0.6)] mb-3"
          >
            🔥 QUERO MEU KIT AGORA POR R$17,00
          </a>

          <div className="flex items-center justify-center gap-4 text-xs text-[#888] flex-wrap">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Pagamento seguro</span>
            </div>
          </div>
        </div>

        {/* Social proof note */}
        <p className="text-center text-[#888] text-xs">
          Profissionais que usam fichas organizadas cobram <span className="text-[#c4962a] font-semibold">até 40% mais</span> pelo mesmo procedimento.
        </p>

      </div>
    </div>
  );
}
