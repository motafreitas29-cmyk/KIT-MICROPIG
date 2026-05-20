interface Props { onNext: () => void; }

export default function Etapa1({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a1208] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#c4962a]/20 border border-[#c4962a]/40 text-[#c4962a] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            âš¡ ETAPA 1 DE 3
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4">
            Nunca mais atenda no improviso: tenha fichas, anamnese e documentaÃ§Ã£o profissional que{' '}
            <span className="text-[#c4962a]">protegem vocÃª e valorizam seu atendimento.</span>
          </h1>
          <p className="text-[#d0c8b8] text-base sm:text-lg leading-relaxed">
            Sem precisar criar nada do zero, sem gastar horas tentando montar documentos e sem correr riscos no atendimento.<br /><br />
            Com um valor simbÃ³lico, vocÃª acessa um kit completo com fichas, anamnese e termos profissionais â€” mesmo que ainda esteja comeÃ§ando na micropigmentaÃ§Ã£o.
          </p>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden border border-[#c4962a]/30 shadow-[0_0_30px_rgba(196,150,42,0.15)]">
          <img
            src="TROCAR_PELA_URL_DA_IMAGEM"
            alt="Kit Profissional Fichas Anamnese Documentos MicropigmentaÃ§Ã£o"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-[#1a1208] border border-[#c4962a]/20 rounded-2xl p-6 mb-8 space-y-3">
          {[
            'Chega de atender sem respaldo',
            'Chega de esquecer informaÃ§Ãµes importantes da cliente',
            'Chega de parecer amadora ou insegura',
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-red-500 text-lg font-bold">âŒ</span>
              <p className="text-[#d0c8b8] text-sm sm:text-base">{t}</p>
            </div>
          ))}
          <div className="border-t border-[#c4962a]/20 pt-4 mt-2">
            <p className="text-white font-semibold text-center text-sm sm:text-base">
              Agora Ã© sobre atender com <span className="text-[#c4962a]">seguranÃ§a, organizaÃ§Ã£o</span> e postura de profissional valorizada.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#d0c8b8] text-base mb-5 font-medium">Acordo feito? EntÃ£o prossiga ðŸ‘‡</p>
          <button
            onClick={onNext}
            className="w-full sm:w-auto bg-gradient-to-r from-[#c4962a] to-[#e8b84b] text-black font-black py-5 px-12 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(196,150,42,0.4)]"
          >
            Quero meu kit profissional agora â†’
          </button>
        </div>

      </div>
    </div>
  );
}
