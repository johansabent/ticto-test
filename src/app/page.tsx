import Image from "next/image";
import Hero from "@/components/Hero";
import Rules from "@/components/Rules";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

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

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-10 lg:pt-16 pb-20 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column (Hero & Rules) */}
        <div className="w-full lg:w-[45%] flex flex-col order-1">
          <Hero />
          <Rules />
        </div>

        {/* Right Column (Sticky Form) */}
        <div className="w-full lg:w-[50%] flex flex-col order-2 lg:sticky lg:top-16 lg:h-fit relative z-20">
          {/* Ticto Logo Desktop Header Place (handled in relative doc flow by having an invisible spacer if needed, but the layout in figma has form right under header line) */}
          <div className="hidden lg:block h-[134px]"> {/* Spacer to push form down alignment with subtitle */}</div>
          <SignupForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
