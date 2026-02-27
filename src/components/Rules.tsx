export default function Rules() {
  const steps = [
    {
      num: 1,
      text: (
        <>
          Crie sua conta no <span className="font-bold text-white">formulário abaixo</span>
        </>
      ),
      textDesktop: (
        <>
          Crie sua conta no <span className="font-bold text-white">formulário ao lado</span>
        </>
      ),
    },
    {
      num: 2,
      text: (
        <>
          Deposite seu nome na <span className="font-bold text-white">urna no stand da Ticto</span>
        </>
      ),
    },
    {
      num: 3,
      text: (
        <>
          <span className="font-bold text-white">Aguarde o sorteio</span> presencialmente no stand da Ticto
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 lg:gap-8 mb-16 relative z-10 scrollbar-hide">
      <h3 className="text-[13px] lg:text-sm font-normal text-text-muted font-space opacity-60 tracking-wide">
        Confira as regras para participar
      </h3>

      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-tomato font-bold text-sm shadow-[0_0_15px_rgba(91,190,217,0.15)]">
              {step.num}
            </div>
            <p className="text-[15px] lg:text-base text-[#BFBFBF] font-space leading-relaxed mt-1 opacity-90">
              <span className="lg:hidden">{step.text}</span>
              <span className="hidden lg:inline">{step.textDesktop || step.text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
