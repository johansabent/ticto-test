import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-bg-black border-t border-white/5 relative z-10">
            {/* Main grid */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-[112px] py-16 lg:py-[80px] flex flex-col lg:flex-row lg:justify-between gap-[32px]">
                {/* Col 1: Logo + tagline + socials */}
                <div className="flex flex-col gap-[32px] lg:w-[384px]">
                    <div className="flex items-center gap-[6px] w-fit">
                        <Image
                            src="/images/footer-ticto-2.svg"
                            alt=""
                            width={56}
                            height={56}
                            className="w-[56px] h-[56px]"
                        />
                        <Image
                            src="/images/footer-ticto-1.svg"
                            alt="Ticto"
                            width={116}
                            height={26}
                            className="w-[114px] h-[36px] object-contain ml-3"
                        />
                    </div>
                    <p className="text-[16px] text-[#d9d9d9] font-tomato leading-[1.5] max-w-[340px] tracking-[-0.176px]">
                        A Ticto é a única plataforma focada em vendas e
                        conversão de produtos físicos e digitais{" "}
                        <Image
                            src="/images/hero-ticto-m2.svg"
                            alt=""
                            width={15}
                            height={15}
                            className="inline-block relative -top-[1px] ml-[2px]"
                        />
                    </p>
                    <div className="flex gap-[16px] w-fit">
                        <Link
                            href="#"
                            aria-label="Instagram"
                            className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <Image
                                src="/images/social-ig.svg"
                                alt="Instagram"
                                width={17}
                                height={17}
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="YouTube"
                            className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <Image
                                src="/images/social-yt.svg"
                                alt="YouTube"
                                width={22}
                                height={22}
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Spotify"
                            className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <Image
                                src="/images/social-sp.svg"
                                alt="Spotify"
                                width={22}
                                height={22}
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="LinkedIn"
                            className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <Image
                                src="/images/social-in.svg"
                                alt="LinkedIn"
                                width={22}
                                height={22}
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <Image
                                src="/images/social-fb.svg"
                                alt="Facebook"
                                width={22}
                                height={22}
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="TikTok"
                            className="w-[44px] h-[44px] shrink-0 rounded-[8px] border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <Image
                                src="/images/social-tk.svg"
                                alt="TikTok"
                                width={15}
                                height={17}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                </div>

                {/* Col 2: Páginas nav */}
                <div className="flex flex-col gap-[32px] lg:items-start flex-1 lg:max-w-none">
                    <h2 className="text-[16px] font-bold text-white tracking-[-0.176px] font-tomato leading-[1.5]">
                        Páginas
                    </h2>
                    <nav className="flex flex-col text-[16px] text-white font-tomato w-full">
                        <Link
                            href="#"
                            className="py-[16px] border-b border-white/10 hover:text-brand-cyan transition-colors tracking-[-0.176px]"
                        >
                            Entrar
                        </Link>
                        <Link
                            href="#"
                            className="py-[16px] border-b border-white/10 flex items-center gap-[8px] hover:text-brand-cyan transition-colors tracking-[-0.176px]"
                        >
                            Suporte{" "}
                            <Image
                                src="/images/icon-arrow.svg"
                                alt="Arrow"
                                width={14}
                                height={14}
                                className="opacity-50"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="py-[16px] border-b border-white/10 hover:text-brand-cyan transition-colors tracking-[-0.176px]"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>

                {/* Col 3: App download + CTA */}
                <div className="flex flex-col gap-[32px] lg:items-start w-full lg:max-w-[400px]">
                    <h2 className="text-[16px] font-bold text-white tracking-[-0.176px] font-tomato leading-[1.5]">
                        Baixe o nosso aplicativo
                    </h2>
                    <div className="flex gap-[16px] w-full">
                        <Link
                            href="#"
                            className="flex-1 h-[56px] border border-white/20 rounded-[100px] flex items-center justify-center px-[22px] hover:bg-white/5 transition-colors"
                        >
                            <Image
                                src="/images/store-play.svg"
                                alt="Google Play"
                                width={121}
                                height={29}
                                className="w-auto h-[29.47px]"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="flex-1 h-[56px] border border-white/20 rounded-[100px] flex items-center justify-center px-[30px] hover:bg-white/5 transition-colors"
                        >
                            <Image
                                src="/images/store-apple.svg"
                                alt="App Store"
                                width={105}
                                height={28}
                                className="w-auto h-[28.386px]"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className="relative w-full rounded-[32px] p-[2px]" style={{ background: 'linear-gradient(90deg, #FF9C2B, #FF2969, #9747FF)' }}>
                        <Link
                            href="#"
                            className="flex w-full items-center justify-between px-[24px] py-[16px] rounded-[30px] bg-bg-black font-bold text-[16px] font-tomato tracking-[-0.176px] text-white hover:bg-white/5 transition-colors"
                        >
                            Crie sua conta
                            <Image
                                src="/images/icon-arrow-sm.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-[112px] py-0 pb-[32px] flex flex-col lg:flex-row justify-between items-center gap-4 border-none">
                <p className="text-[14px] text-[#d9d9d9] tracking-[-0.154px] font-space text-center lg:text-left">
                    © 2025 - Ticto Tecnologia - Todos os direitos reservados.
                    CNPJ sob nº 28.618.386/0001-19
                </p>
                <div className="flex items-center gap-[24px]">
                    <Image
                        src="/images/badge-r2024.png"
                        alt="Reclame Aqui 2024"
                        width={94}
                        height={44}
                        className="h-[44px] w-auto"
                        loading="lazy"
                    />
                    <Image
                        src="/images/badge-pci.png"
                        alt="PCI DSS"
                        width={145}
                        height={44}
                        className="h-[44px] w-auto"
                        loading="lazy"
                    />
                    <Link
                        href="#"
                        className="text-[14px] text-[#d9d9d9] tracking-[-0.154px] font-space underline decoration-solid hover:text-white transition-colors ml-4"
                    >
                        Políticas e Termos
                    </Link>
                </div>
            </div>
        </footer>
    );
}
