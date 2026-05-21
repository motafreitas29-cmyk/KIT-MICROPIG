interface Props { onNext: () => void; }

export default function Etapa1({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a1208] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#c4962a]/20 border border-[#c4962a]/40 text-[#c4962a] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            ⚡ PASSO 1 DE 3
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4">
            Fichas, anamnese e documentos profissionais para micropigmentação —{' '}
            <span className="text-[#c4962a]">por apenas R$3,99.</span>
          </h1>
          <p className="text-[#d0c8b8] text-base sm:text-lg leading-relaxed">
            Tudo pronto para usar ainda hoje. Sem criar nada do zero, sem gastar horas formatando.<br /><br />
            Por um valor menor que um café, você para de improvisar e começa a atender com postura de profissional valorizada.
          </p>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden border border-[#c4962a]/30 shadow-[0_0_30px_rgba(196,150,42,0.15)]">
          <img
            src="https://i.postimg.cc/zDHDyK3H/4ee06d40-6be6-44c1-a8b7-0a7d050a74c3.png"
            alt="Kit Profissional Fichas Anamnese Documentos Micropigmentação"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-[#1a1208] border border-[#c4962a]/20 rounded-2xl p-6 mb-8 space-y-3">
          {[
            'Chega de anotar informações em papel avulso',
            'Chega de esquecer dados importantes da cliente',
            'Chega de parecer despreparada na hora do atendimento',
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-red-500 text-lg">❌</span>
              <p className="text-[#d0c8b8] text-sm sm:text-base">{t}</p>
            </div>
          ))}
          <div className="border-t border-[#c4962a]/20 pt-4 mt-2">
            <p className="text-white font-semibold text-center text-sm sm:text-base">
              A partir de hoje: atendimento <span className="text-[#c4962a]">organizado, documentado e protegido.</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#d0c8b8] text-base mb-5 font-medium">Quer ver o que está incluído? 👇</p>
          <button
            onClick={onNext}
            className="w-full sm:w-auto bg-gradient-to-r from-[#c4962a] to-[#e8b84b] text-black font-black py-5 px-12 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(196,150,42,0.4)]"
          >
            Ver o que está incluído →
          </button>
        </div>

      </div>
    </div>
  );
}
