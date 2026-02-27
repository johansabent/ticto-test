import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative z-10 w-full max-w-lg lg:max-w-none mx-auto mb-10 lg:mb-0 lg:pr-10">

      {/* Header */}
      <header className="flex items-center gap-4 lg:gap-8 mb-[54px] lg:mb-20">
        <Image src="/images/logo-ticto.png" alt="Ticto" width={118} height={25} className="hidden lg:block w-[118px] lg:w-[155px]" />
        <Image src="/images/hero-ticto-m1.svg" alt="Ticto" width={71} height={16} className="lg:hidden" />
        <div className="w-[1px] h-3 bg-white/10"></div>
        <Image src="/images/logo-ebulicao.png" alt="Ebulição" width={78} height={26} className="w-[78px] lg:w-[119px]" />
      </header>

      {/* Hero Content */}
      <div className="flex flex-col gap-5 lg:gap-6 mb-10 lg:mb-12">
        {/* Badge */}
        <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 backdrop-blur-sm">
          <span className="text-brand-cyan text-[10px] lg:text-[14px] font-normal uppercase tracking-[0.06em] font-inter whitespace-nowrap">
            TRANSFORME SEU NEGÓCIO EM UMA MÁQUINA DE VENDAS
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[28px] lg:text-[32px] font-normal text-white leading-[120%] font-inter">
          A ebulição instantânea para produtos digitais e físicos começa com a maior e mais poderosa plataforma do Brasil
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] lg:text-[16px] text-white leading-[140%] font-space max-w-[624px]">
          Milhares de empresários <strong className="font-bold">como você</strong> alavancaram seus negócios e alcançaram 6 e 7 dígitos no digital com as estratégias que compartilhamos.
        </p>
      </div>

      {/* Promo Card */}
      <div 
        className="flex items-center bg-transparent border border-brand-cyan rounded-[8px] h-auto lg:h-[193px] mb-8 overflow-hidden" 
        style={{ backgroundImage: "linear-gradient(244.131deg, rgba(255, 255, 255, 0.1) 16.297%, rgba(255, 255, 255, 0) 113.33%)" }}
      >
        <div className="flex-1 px-4 py-6 lg:pl-[53px] lg:py-[39px]">
          <p className="text-[16px] lg:text-[24px] text-white font-tomato font-normal leading-[1.2] max-w-[350px]">
            Criando sua conta na plataforma, você pode concorrer a um{' '}
            <span className="text-brand-cyan block font-bold font-tomato">iPhone 16 Pro</span>
          </p>
        </div>
        <div className="relative w-1/2 lg:w-[158px] h-[172px] lg:ml-auto flex-shrink-0 self-end">
          <Image
            src="/images/iphone-16-pro.png"
            alt="iPhone 16 Pro"
            fill
            className="object-cover object-left-top scale-[1.3] lg:scale-[1.35] origin-top-left"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 50vw, 158px"
          />
        </div>
      </div>

      {/* Subtitle 2 */}
      <p className="text-[16px] text-white font-space leading-[140%] mb-2 max-w-[624px]">
        A Ticto tem o orgulho de ser uma das patrocinadoras do evento Ebulição por Rafa Prado e trouxe esta oportunidade especial para você.
      </p>
    </section>
  );
}
