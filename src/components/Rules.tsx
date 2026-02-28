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
      <h2 className="text-[14px] font-normal text-white opacity-50 font-space leading-[1.6]">
        Confira as regras para participar
      </h2>

      <div className="flex flex-col gap-3.5">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-[14px] animate-fade-in w-full text-[16px]" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="text-brand-cyan font-bold font-space leading-[1.6] flex-shrink-0">
              {step.num}
            </div>
            
            <div className="w-[4px] h-[4px] bg-[#5bbed9] flex-shrink-0"></div>
            
            <p className="flex-1 text-white/80 font-space font-normal leading-[1.3] whitespace-pre-wrap">
              <span className="lg:hidden">{step.text}</span>
              <span className="hidden lg:inline">{step.textDesktop || step.text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
