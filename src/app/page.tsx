import Image from "next/image";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Rules = dynamic(() => import("@/components/Rules"));
const SignupForm = dynamic(() => import("@/components/SignupForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background glow effects — overflow-hidden here only, not on sticky ancestor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Image 
          src="/images/bg-blur-right.svg" 
          alt="" 
          width={800} 
          height={800} 
          className="absolute top-0 right-0 max-w-[60vw] lg:max-w-none opacity-40 mix-blend-screen"
          priority
        />
        <Image 
          src="/images/bg-blur-left.svg" 
          alt="" 
          width={800} 
          height={800} 
          className="absolute bottom-1/4 lg:top-1/4 left-0 max-w-[70vw] lg:max-w-none opacity-30 mix-blend-screen"
          priority
        />
      </div>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-[24px] lg:px-[112px] pt-[40px] lg:pt-[55px] pb-[80px] lg:pb-[140px] relative z-10 flex flex-col lg:flex-row lg:justify-between items-start">
        {/* Left Column (Hero & Rules) */}
        <div className="w-full lg:w-[540px] xl:w-[600px] flex flex-col order-1">
          <Hero />
          <Rules />
        </div>

        {/* Right Column (Sticky Form) */}
        <div className="w-full lg:w-[488px] flex flex-col order-2 lg:sticky lg:top-24 lg:h-fit relative z-20 mt-12 lg:mt-0">
          <SignupForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
