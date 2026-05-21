interface Props { onNext: () => void; }

export default function Etapa2({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a1208] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#c4962a]/20 border border-[#c4962a]/40 text-[#c4962a] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            🔥 PASSO 2 DE 3
          </span>
          <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-6">
            Uma profissional organizada cobra mais —{' '}
            <span className="text-[#c4962a]">e a cliente percebe isso na hora.</span>
          </h1>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden border border-[#c4962a]/30 shadow-[0_0_30px_rgba(196,150,42,0.15)]">
          <img
            src="https://i.postimg.cc/NFZ5rxvy/lever.png"
            alt="Kit Profissional Micropigmentação"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-[#1a1208] border border-[#c4962a]/20 rounded-2xl p-6 mb-8 text-[#d0c8b8] text-sm sm:text-base leading-relaxed space-y-4">
          <p>Você faz um procedimento bonito, a cliente fica satisfeita…</p>
          <p>Mas na hora de registrar as informações, <strong className="text-white">tudo fica anotado de qualquer jeito — ou nem anotado.</strong></p>
          <p>Sem ficha, sem anamnese, sem termo assinado. Só na memória.</p>
          <p>E se a cliente voltar com uma dúvida? Ou reclamar de algo? <strong className="text-white">Você não tem como provar nada.</strong></p>
          <div className="border-t border-[#c4962a]/20 pt-4">
            <p className="text-white font-bold text-lg">Não basta ter técnica — é preciso ter estrutura.</p>
            <p className="mt-2">E estrutura começa com <span className="text-[#c4962a] font-bold">documentos certos.</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: '🛡️', text: 'Atendimento documentado e protegido' },
            { icon: '💰', text: 'Autoridade para cobrar o que merece' },
            { icon: '📋', text: 'Dados organizados de cada cliente' },
          ].map((item, i) => (
            <div key={i} className="bg-[#c4962a]/10 border border-[#c4962a]/30 rounded-xl p-4 text-center">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-white text-sm font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1208] border-2 border-[#c4962a]/40 rounded-2xl p-6 mb-8 text-center">
          <p className="text-[#d0c8b8] text-base leading-snug">
            O kit já está pronto. Tudo o que você precisa fazer é{' '}
            <span className="text-white font-bold">baixar e começar a usar.</span>
          </p>
          <p className="text-[#c4962a] font-black text-2xl mt-3">A partir de R$3,99 — acesso imediato.</p>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-[#c4962a] to-[#e8b84b] text-black font-black py-5 px-8 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(196,150,42,0.4)]"
          >
            🔥 Ver as opções e garantir o meu →
          </button>
        </div>

      </div>
    </div>
  );
}
