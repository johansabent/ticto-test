import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative z-10 lg:sticky lg:top-0 lg:-ml-6 lg:-mt-10 lg:pt-10 lg:h-screen lg:overflow-y-auto w-full max-w-lg lg:max-w-none mx-auto mb-10 lg:mb-0 lg:pr-10 scrollbar-hide">

      {/* Header */}
      <header className="flex items-center gap-4 lg:gap-8 mb-[54px] lg:mb-20">
        <Image src="/images/logo-ticto.png" alt="Ticto" width={118} height={25} className="hidden lg:block w-[118px] lg:w-[155px]" />
        <Image src="/images/hero-ticto-m1.svg" alt="Ticto" width={71} height={16} className="lg:hidden" />
        <div className="text-white opacity-20 hidden lg:block">×</div>
        <div className="w-[1px] h-3 bg-white/20 lg:hidden"></div>
        <Image src="/images/logo-ebulicao.png" alt="Ebulição" width={78} height={26} className="w-[78px] lg:w-[119px]" />
      </header>

      {/* Hero Content */}
      <div className="flex flex-col gap-5 lg:gap-6 mb-10 lg:mb-12">
        {/* Badge */}
        <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-white/20">
          <span className="text-white text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.06em] font-tomato">
            TRANSFORME SEU NEGÓCIO EM UMA MÁQUINA DE VENDAS
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[28px] lg:text-[40px] font-normal text-white leading-[120%] font-tomato">
          A ebulição instantânea para produtos digitais e físicos começa com a maior e mais poderosa plataforma do Brasil
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] lg:text-base text-text-muted leading-[140%] font-space opacity-80 max-w-[460px]">
          Milhares de empresários <strong className="text-white font-bold">como você</strong> alavancaram seus negócios e alcançaram 6 e 7 dígitos no digital com as estratégias que compartilhamos.
        </p>
      </div>

      {/* Promo Card */}
      <div className="relative isolate flex items-center bg-[#0D0B1A] border border-white/5 rounded-[20px] p-[2px] pr-5 lg:pr-8 mb-8">
        {/* Glow behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-transparent opacity-20 blur-xl -z-10 rounded-[20px]"></div>

        <Image
          src="/images/iphone-16-pro.png"
          alt="iPhone 16 Pro"
          width={180}
          height={210}
          className="-ml-4 -mr-2 lg:-mr-4 mt-2 object-contain scale-[1.1] lg:scale-[1.2] origin-bottom drop-shadow-2xl"
          priority
        />
        <div className="flex flex-col gap-1 py-6 z-10">
          <p className="text-[14px] lg:text-base text-text-muted font-space leading-[140%]">
            Criando sua conta na plataforma, você pode concorrer a um{' '}
            <span className="text-brand-cyan font-bold font-space">iPhone 16 Pro</span>
          </p>
        </div>
      </div>

      {/* Subtitle 2 */}
      <p className="text-[13px] lg:text-[15px] text-text-muted font-space leading-relaxed opacity-70 mb-8">
        A Ticto tem o orgulho de ser uma das patrocinadoras do evento Ebulição por Rafa Prado e trouxe esta oportunidade especial para você.
      </p>
    </section>
  );
}
