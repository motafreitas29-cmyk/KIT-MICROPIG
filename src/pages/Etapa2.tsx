interface Props { onNext: () => void; }

export default function Etapa2({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a1208] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#c4962a]/20 border border-[#c4962a]/40 text-[#c4962a] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            🔥 ETAPA 2 DE 3
          </span>
          <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-6">
            A verdade é uma só: não é só fazer um bom procedimento —{' '}
            <span className="text-[#c4962a]">você precisa estar protegida e parecer profissional em cada detalhe.</span>
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
          <p>Você atende sua cliente, faz um procedimento bonito…</p>
          <p>Mas na hora de registrar informações, <strong className="text-white">tudo fica bagunçado ou incompleto.</strong></p>
          <p>No fundo, você sabe que isso pode dar problema… E pior: <strong className="text-white">passa insegurança.</strong></p>
          <div className="border-t border-[#c4962a]/20 pt-4">
            <p>Foi aí que muitas profissionais perceberam:</p>
            <p className="text-white font-bold text-lg mt-2">não basta ter técnica — é preciso ter estrutura profissional.</p>
          </div>
          <p>E essa estrutura começa com <span className="text-[#c4962a] font-bold">documentos certos.</span></p>
          <p>Esse kit foi criado exatamente pra isso: te dar organização, segurança e autoridade no atendimento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: '⚙️', text: 'Atendimento com respaldo e segurança' },
            { icon: '⚙️', text: 'Mais confiança da cliente em você' },
            { icon: '⚙️', text: 'Organização total das informações' },
          ].map((item, i) => (
            <div key={i} className="bg-[#c4962a]/10 border border-[#c4962a]/30 rounded-xl p-4 text-center">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-white text-sm font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1208] border-2 border-[#c4962a]/40 rounded-2xl p-6 mb-8 text-center">
          <p className="text-white text-lg sm:text-xl font-bold leading-snug">
            Agora me responde… Se você pudesse usar fichas, anamnese e termos prontos já no seu próximo atendimento por um valor simbólico, você usaria?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onNext}
            className="flex-1 bg-[#1a1208] border-2 border-[#c4962a]/40 text-[#d0c8b8] font-semibold py-4 px-6 rounded-xl hover:border-[#c4962a] transition-all text-sm"
          >
            🤔 Quero entender melhor
          </button>
          <button
            onClick={onNext}
            className="flex-1 bg-gradient-to-r from-[#c4962a] to-[#e8b84b] text-black font-black py-4 px-6 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(196,150,42,0.4)]"
          >
            🔥 Quero usar hoje mesmo →
          </button>
        </div>

      </div>
    </div>
  );
}
