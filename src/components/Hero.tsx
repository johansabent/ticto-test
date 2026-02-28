import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative z-10 w-full max-w-lg lg:max-w-none mx-auto mb-10 lg:mb-0 lg:pr-10">

      {/* Header */}
      <header className="flex items-center gap-4 lg:gap-6 mb-[54px] lg:mb-[95px]">
        <Image src="/images/logo-ticto.png" alt="Ticto" width={153} height={44} className="hidden lg:block w-[153px] h-[44px]" />
        <Image src="/images/hero-ticto-m1.svg" alt="Ticto" width={71} height={16} className="lg:hidden" />
        <div className="w-[1px] h-[16px] lg:h-[32px] bg-white/20"></div>
        <Image src="/images/logo-ebulicao.png" alt="Ebulição" width={197} height={52} className="w-[78px] lg:w-[197px] lg:h-[52px]" />
      </header>

      {/* Hero Content */}
      <div className="flex flex-col gap-5 lg:gap-[14px] mb-10 lg:mb-8">
        {/* Badge + H1 */}
        <div className="flex flex-col gap-4 lg:gap-[32px]">
          <div className="inline-flex w-fit items-center gap-2 px-[20px] py-[8px] rounded-[250px] border border-[rgba(91,190,217,0.28)] bg-[rgba(91,190,217,0.08)] backdrop-blur-sm">
            <span className="text-brand-cyan text-[10px] lg:text-[14px] font-normal uppercase tracking-[0.7px] font-inter whitespace-nowrap">
              TRANSFORME SEU NEGÓCIO EM UMA MÁQUINA DE VENDAS
            </span>
          </div>

          <h1 className="text-[28px] lg:text-[32px] font-normal text-white leading-[1.2] font-inter tracking-normal max-w-[624px]">
            A ebulição instantânea para produtos digitais e físicos começa com a maior e mais poderosa plataforma do Brasil
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[15px] lg:text-[16px] text-white leading-[140%] font-space max-w-[624px]">
          Milhares de empresários <strong className="font-bold">como você</strong> alavancaram seus negócios e alcançaram 6 e 7 dígitos no digital com as estratégias que compartilhamos.
        </p>
      </div>

      {/* Promo Card */}
      <div
        className="flex items-center w-[624px] max-w-full bg-transparent border border-[#5bbed9] rounded-[8px] h-auto lg:h-[193px] mt-[18px] lg:mt-[32px] mb-[32px] overflow-hidden relative"
        style={{ backgroundImage: "linear-gradient(244.131deg, rgba(255, 255, 255, 0.1) 16.297%, rgba(255, 255, 255, 0) 113.33%)" }}
      >
        <div className="flex-1 px-4 py-6 lg:absolute lg:left-[53px] lg:top-[39px] lg:p-0">
          <p className="text-[16px] lg:text-[24px] text-white font-tomato font-normal leading-[1.2] lg:w-[350px]">
            Criando sua conta na plataforma, você pode concorrer a um{' '}
            <span className="text-brand-cyan block font-bold font-tomato">iPhone 16 Pro</span>
          </p>
        </div>
        <div className="relative w-1/2 lg:absolute lg:left-[399px] lg:top-[21px] lg:w-[158px] lg:h-[172px] flex-shrink-0 self-end pointer-events-none overflow-hidden">
          {/* Mobile: fill+cover */}
          <Image
            src="/images/iphone-16-pro.png"
            alt="iPhone 16 Pro"
            fill
            className="object-cover object-top scale-[1.3] origin-top-left lg:hidden"
            priority
            fetchPriority="high"
            sizes="50vw"
          />
          {/* Desktop: exact Figma positioning */}
          <img
            src="/images/iphone-16-pro.png"
            alt="iPhone 16 Pro"
            className="hidden lg:block absolute max-w-none"
            style={{ width: '135.6%', height: '187.23%', left: '-12.39%', top: '-40.09%' }}
          />
          <div className="absolute w-[44px] h-[13px] left-[82px] top-[118px] opacity-90 hidden lg:block">
            <Image src="/images/hero-ticto-m1.svg" alt="Ticto" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Subtitle 2 */}
      <p className="text-[16px] text-white font-space leading-[1.4] mb-[32px] max-w-[624px]">
        A Ticto tem o orgulho de ser uma das patrocinadoras do evento Ebulição por Rafa Prado e trouxe esta oportunidade especial para você.
      </p>
    </section>
  );
}
