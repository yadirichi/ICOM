"use client";

import { motion } from "framer-motion";
import { BBH_Bartle, Pinyon_Script, Rethink_Sans} from "next/font/google";
import Image from "next/image";

// Initialize the Google Fonts
const bartle = BBH_Bartle({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

const pinyonScript = Pinyon_Script({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

const rethinkSans = Rethink_Sans({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden font-sans text-white">
      
      {/* 1. HERO SECTION: Logo */}
      <section className="min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center pt-8 md:pt-10 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video 
            src="/mantle-logo-animated.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-40 sm:w-48 md:w-64 object-contain"
          />
        </motion.div>
      </section>

      {/* 2. PRESENTS & STACKED GOLD TITLE SECTION */}
      <section className="min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 py-12 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-full max-w-full"
        >
          {/* PRESENTS SUBTITLE */}
          <p className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37] mb-4 md:mb-6 font-light">
            Presents
          </p>

          {/* STACKED TITLE - Scaled down for mobile to prevent overflow, identical on desktop */}
          <div className={`${bartle.className} uppercase tracking-wide w-full`}>
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-8xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_30px_rgba(252,246,186,0.3)]">
              International <br />
              Conference <br />
              Of Mantles <br />
              <span className="text-xl sm:text-3xl md:text-6xl tracking-widest opacity-90">(ICOM)</span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* 3. FREE-FLOWING FULL-COLOR PASTORS SECTION */}
      <section className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 px-2 sm:px-4 overflow-hidden">
        
        {/* Radiant Gold Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[280px] h-[280px] md:w-[650px] md:h-[650px] bg-gradient-to-tr from-[#BF953F]/25 via-[#D4AF37]/35 to-transparent rounded-full blur-[90px] md:blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37] mb-4 md:mb-8 font-light">
            Hosted By
          </p>

          {/* MOBILE IMAGE: Displayed only on mobile screens (Slightly larger display) */}
          <div className="block md:hidden relative w-[95vw] sm:w-[85vw] mb-6">
            <Image 
              src="/pstmantle-mobile.png" 
              alt="Pastor and Pastor Mrs Michael and Justina Ajogba" 
              width={800}
              height={800}
              sizes="100vw"
              className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(212,175,55,0.2)]"
              priority
            />
          </div>

          {/* DESKTOP IMAGE: Displayed only on medium and larger screens */}
          <div className="hidden md:block relative w-full max-w-4xl md:max-w-5xl mb-8">
            <Image 
              src="/pstmantle.png" 
              alt="Pastor and Pastor Mrs Michael and Justina Ajogba" 
              width={1000}
              height={1000}
              sizes="(max-width: 1200px) 100vw, 1400px"
              priority
              loading="eager"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.15)]"
            />
          </div>

          {/* Cursive Signature Names */}
          <h3 className={`${pinyonScript.className} font-serif italic text-xl sm:text-2xl md:text-4xl text-[#FCF6BA] drop-shadow-[0_0_25px_rgba(252,246,186,0.35)] px-2`}>
            Pst & Pst Mrs. <br/>
            Michael & Justina 
            Ajogba
          </h3>
        </motion.div>
      </section>

      {/* 4. SECONDARY INFORMATION & DATES */}
      <section className="min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-start bg-[#0A0A0A] pb-20 md:pb-32 pt-8 md:pt-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className={`${bartle.className} text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_30px_rgba(252,246,186,0.3)] font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6`}>
            10th Edition/ Anniversary
          </h2>
          
          <p className="text-lg sm:text-xl md:text-3xl text-[#FAFAFA] font-light tracking-[0.15em] md:tracking-[0.2em] uppercase">
            Abuja • Oct 12-18, 2026
          </p>
        </motion.div>
      
      {/* button */}
        <button className={`${rethinkSans.className} text-2xl my-10 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-[#FAFAFA] font-bold py-3 px-7 tracking-[0.1em] font-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}>
              Register to Attend
        </button>
      </section>


      
        <section className= "flex items-center justify-center">
              
        </section>
        


    </main>
  );
}