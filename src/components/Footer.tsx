import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-bg-black border-t border-white/5 relative z-10">
      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

        {/* Col 1: Logo + tagline + socials */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[4.5px] w-fit">
            <Image src="/images/footer-ticto-1.svg" alt="Ticto" width={116} height={26} className="w-[116px] lg:w-[155px] h-auto" />
          </div>
          <p className="text-[16px] text-white font-tomato leading-[1.5] max-w-[384px] tracking-[-0.176px]">
            A Ticto é a única plataforma focada em vendas e conversão de produtos físicos e digitais 💡
          </p>
          <div className="flex gap-4 w-full">
            <Link href="#" aria-label="Instagram" className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-ig.svg" alt="Instagram" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" aria-label="YouTube" className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-yt.svg" alt="YouTube" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" aria-label="Spotify" className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-sp.svg" alt="Spotify" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-in.svg" alt="LinkedIn" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" aria-label="Facebook" className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-fb.svg" alt="Facebook" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" aria-label="TikTok" className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-tk.svg" alt="TikTok" width={20} height={20} loading="lazy" />
            </Link>
          </div>
        </div>

        {/* Col 2: Páginas nav */}
        <div className="flex flex-col gap-8 lg:items-start">
          <h2 className="text-[16px] font-bold text-white tracking-[-0.176px] font-tomato">Páginas</h2>
          <nav className="flex flex-col text-[16px] text-white font-tomato w-full">
            <Link href="#" className="py-4 border-b border-white/10 hover:text-brand-cyan transition-colors">Entrar</Link>
            <Link href="#" className="py-4 border-b border-white/10 flex items-center gap-2 hover:text-brand-cyan transition-colors">
              Suporte <Image src="/images/icon-arrow.svg" alt="Arrow" width={14} height={14} className="opacity-50" />
            </Link>
            <Link href="#" className="py-4 border-b border-white/10 hover:text-brand-cyan transition-colors">Blog</Link>
          </nav>
        </div>

        {/* Col 3: App download + CTA */}
        <div className="flex flex-col gap-8 lg:items-start w-full lg:max-w-[384px]">
          <h2 className="text-[16px] font-bold text-white tracking-[-0.176px] font-tomato hidden lg:block">Baixe o nosso aplicativo</h2>
          <div className="flex gap-4 w-full">
            <Link href="#" className="flex-1 h-[56px] border border-white/20 rounded-[100px] flex items-center justify-center px-5 hover:bg-white/5 transition-colors">
              <Image src="/images/store-play.svg" alt="Google Play" width={121} height={29} className="w-auto h-[29px]" loading="lazy" />
            </Link>
            <Link href="#" className="flex-1 h-[56px] border border-white/20 rounded-[100px] flex items-center justify-center px-5 hover:bg-white/5 transition-colors">
              <Image src="/images/store-apple.svg" alt="App Store" width={105} height={28} className="w-auto h-[28px]" loading="lazy" />
            </Link>
          </div>
          <div className="relative w-full rounded-full p-[2px] bg-gradient-to-r from-[#ff9c2b] to-[#ff5b2b] overflow-hidden group">
            <Link href="#" className="flex w-full items-center justify-between px-[22px] py-[14px] rounded-full bg-bg-black font-bold text-[16px] font-tomato tracking-[-0.176px] text-white group-hover:bg-bg-black/80 transition-colors">
              Crie sua conta
              <Image src="/images/icon-arrow-sm.svg" alt="Arrow" width={16} height={16} loading="lazy" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-6 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-text-muted font-space text-center lg:text-left">
          © 2025 - Ticto Tecnologia - Todos os direitos reservados. CNPJ sob nº 28.618.386/0001-19
        </p>
        <div className="flex items-center gap-6">
          <Image src="/images/badge-r2024.png" alt="Reclame Aqui 2024" width={38} height={46} loading="lazy" />
          <Image src="/images/badge-pci.png" alt="PCI DSS" width={82} height={25} loading="lazy" />
          <Link href="#" className="text-[12px] text-text-muted font-space underline decoration-solid hover:text-white transition-colors">
            Políticas e Termos
          </Link>
        </div>
      </div>
    </footer>
  );
}
