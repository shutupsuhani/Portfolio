import HeroSection from "@/components/HeroSection";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>

     
        <div className="min-h-screen  relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />

          <main className="min-h-screen  antialiased bg-grid-white/[0.02]"><HeroSection />
           
          </main>
         
          

        </div>

     
    </>
  );
}
