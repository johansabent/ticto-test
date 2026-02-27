import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-bg-black border-t border-white/5 relative z-10">
      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

        {/* Col 1: Logo + tagline + socials */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[3px]">
            <Image src="/images/footer-ticto-1.svg" alt="Ticto" width={77} height={17} />
            <Image src="/images/footer-ticto-2.svg" alt="Tecnologia" width={76} height={6} />
          </div>
          <p className="text-[13px] text-text-muted/60 font-space leading-relaxed max-w-[280px]">
            A Ticto é a única plataforma focada em vendas e conversão de produtos físicos e digitais 💡
          </p>
          <div className="flex gap-3">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-ig.svg" alt="Instagram" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-yt.svg" alt="YouTube" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-sp.svg" alt="Spotify" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-in.svg" alt="LinkedIn" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-fb.svg" alt="Facebook" width={20} height={20} loading="lazy" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src="/images/social-tk.svg" alt="TikTok" width={20} height={20} loading="lazy" />
            </Link>
          </div>
        </div>

        {/* Col 2: Páginas nav */}
        <div className="flex flex-col gap-6 lg:items-center">
          <h4 className="text-[13px] font-bold text-white uppercase tracking-widest font-tomato">Páginas</h4>
          <nav className="flex flex-col gap-4 text-[14px] text-text-muted/70 font-space">
            <Link href="#" className="hover:text-white transition-colors">Entrar</Link>
            <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">Suporte <span>→</span></Link>
            <Link href="#" className="hover:text-white transition-colors">Blog</Link>
          </nav>
        </div>

        {/* Col 3: App download + CTA */}
        <div className="flex flex-col gap-6 lg:items-end">
          <h4 className="text-[13px] font-bold text-white uppercase tracking-widest font-tomato">Baixe o nosso aplicativo</h4>
          <div className="flex gap-3 flex-wrap">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/store-play.svg" alt="Google Play" width={135} height={40} loading="lazy" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/store-apple.svg" alt="App Store" width={135} height={40} loading="lazy" />
            </Link>
          </div>
          <Link href="#" className="flex w-full lg:w-fit items-center justify-center gap-[10px] px-8 py-3 rounded-full border border-accent-orange text-accent-orange font-bold text-[13px] font-tomato uppercase tracking-wide hover:bg-accent-orange/10 transition-colors">
            Crie sua conta
            <Image src="/images/icon-arrow-sm.svg" alt="Arrow" width={16} height={16} loading="lazy" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-6 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-text-muted/40 font-space text-center lg:text-left">
          © 2025 - Ticto Tecnologia - Todos os direitos reservados. CNPJ sob nº 28.618.386/0001-19
        </p>
        <div className="flex items-center gap-6">
          <Image src="/images/badge-r2024.png" alt="Reclame Aqui 2024" width={38} height={46} className="opacity-70" loading="lazy" />
          <Image src="/images/badge-pci.png" alt="PCI DSS" width={82} height={25} className="opacity-70" loading="lazy" />
          <Link href="#" className="text-[12px] text-text-muted/50 font-space hover:text-white transition-colors">
            Políticas e Termos
          </Link>
        </div>
      </div>
    </footer>
  );
}
