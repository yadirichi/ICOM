"use client";

import { motion } from "framer-motion";
import { BBH_Bartle, Pinyon_Script, Rethink_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";

import Image from "next/image";

// Initialize the Google Fonts
const bartle = BBH_Bartle({ 
  subsets: ["latin"], 
  weight: ["400"] 
});


const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  style: ["normal", "italic"]
});

const pinyonScript = Pinyon_Script({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

const rethinkSans = Rethink_Sans({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

// Reusable CTA Button Component
const RegisterButton = () => (
  <button className={`${rethinkSans.className} text-lg sm:text-xl md:text-2xl mt-8 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-[#FAFAFA] font-bold py-4 px-8 sm:px-10 tracking-[0.1em] rounded-full shadow-[0_10px_30px_rgba(191,149,63,0.4)] hover:shadow-[0_15px_40px_rgba(191,149,63,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto`}>
    Register to Attend
  </button>
);

export default function Home() {
  const guestMinisters = [
    { name: "Reverend Sam Oye", church: "Transforming Church", image: "/sam.jpg" },
    { name: "Pastor Peter Amenkhinen", church: "Regional Overseer East Africa RCCG", image: "/peter.jpg" },
    { name: "Pastor Bolaji Idowu", church: "Harvesters International Church", image: "/bolaji.jpg" },
    { name: "Pastor Tunde Benjamin", church: "Throne Room, RCCG", image: "/tunde.jpg" },
  ];

  const musicArtists = [
    { name: "Kaestrings", title: "Minister" , image: "/kae.jpg" },
    { name: "Chris Morgan", title: "Pastor" , image: "/chris.jpg" },
    { name: "Emma Onyx", title: "Minister" , image: "/emma.jpg" },
  ];

  const trendImages = [
    "/mantle1.jpg",
    "/mantle2.jpg",
    "/mantle3.jpg",
    "/mantle4.jpg",
    "/mantle5.jpg",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden font-sans text-white bg-black">
      
      {/* 1 & 2. COMBINED HERO SECTION: Logo & Title (Same Viewport) */}
      <section className="min-h-[100svh] flex flex-col items-center justify-between pt-12 pb-16 px-4 text-center">
        
        {/* Logo positioned near the top/middle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-4 sm:mt-10"
        >
          <img 
            src="/mantle-animated2.gif" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-32 sm:w-48 md:w-64 object-contain"
          />
        </motion.div>

        {/* Title positioned near the bottom of the initial screen */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center w-full max-w-screen-xl mx-auto mb-4"
        >
          <p className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37] mb-3 md:mb-6 font-light">
            Presents
          </p>

          <div className={`${bartle.className} uppercase tracking-wide w-full px-2`}>
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-7xl font-black leading-[1.2] sm:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_30px_rgba(252,246,186,0.3)] break-words">
              International <br />
              Conference <br />
              Of Mantles <br />
              <span className="text-2xl sm:text-4xl md:text-6xl tracking-[0.2em] opacity-90 inline-block mt-2 sm:mt-4">(ICOM)</span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* 3. PREMIUM GLOWING THEME SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-black z-0">
        
        {/* Massive Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-[#BF953F] via-[#ffc600] to-transparent rounded-full blur-[100px] sm:blur-[150px] opacity-40 pointer-events-none -z-10" />

        {/* Transition gradient at the bottom connecting to the Host section */}

        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-b from-black/0 via-[#BF953F] via-65% to-white pointer-events-none -z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center w-full max-w-5xl"
        >
          {/* Premium Theme Badge */}
          <div className="mb-8 px-6 py-2 rounded-full border border-[#D4AF37]/50 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <p className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-[#D4AF37]">
              Theme
            </p>
          </div>
          
          {/* The Glow Effect Container */}
          <div className="relative mb-6 sm:mb-8 w-full flex justify-center">
            {/* Layer 1: The wide, dispersed glow */}
            <h2 className={`${bartle.className} absolute text-[5vw] lg:text-[12rem] font-black tracking-tighter text-[#ffc600] blur-2xl sm:blur-3xl opacity-70 leading-none select-none`}>
              JESUS
            </h2>

            {/* Layer 2: The crisp, metallic gradient text on top */}
            <h2 className={`${bartle.className} relative text-[15vw] lg:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#fff0b3] to-[#d4af37] leading-none drop-shadow-xl`}>
              JESUS
            </h2>
          </div>
          
          <h3 className="font-light text-md md:text-3xl lg:text-4xl font-black text-white/70 tracking-widest uppercase drop-shadow-lg px-2 text-center leading-snug mb-10">
            Grace, Glory <br className="block sm:hidden" /> <span className="text-[#ffc600]/90">and More Glory</span>
          </h3>
          
          {/* Glassmorphism Date Pill */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 sm:px-12 py-4 rounded-full text-md sm:text-xl md:text-2xl font-light tracking-[0.2em] shadow-[0_10px_40px_rgba(0,0,0,0.5)] mb-10">
            OCT 12TH - 18TH, 2026
          </div>
          
        </motion.div>
      </section>

      {/* 4. STRUCTURED HOST SECTION */}
      <section className="bg-white text-black py-20 sm:py-32 px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Header pushed up significantly on mobile to make room for the 1.7x scaled image */}
          {/* Added relative z-20 so it always stays above the image */}
          <p className="relative z-20 text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#b51c1c] mb-60 md:mb-120 lg:mb-60 font-bold">
            Hosted By
          </p>
          
          {/* 3D Card Wrapper */}
          <div className="relative w-full max-w-5xl md:max-w-6xl px-0 mb-10">

            {/* The Card Background 
                Added 'hidden lg:block' so it only shows on desktop, removed on mobile/tablet 
            */}
            <div className="hidden lg:block absolute inset-x-0 bottom-0 top-[20%] bg-gradient-to-b from-[#f4b41a] to-[#fff3cc] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] -z-10" />
            
            {/* The Image (Breaking out of the top using negative margin) */}
            <div className="relative z-10 w-full flex justify-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] lg:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              <Image 
                src="/pstmantle.png" 
                alt="Pastor Michael and Justina Ajogba" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain -mt-[12%] sm:-mt-[15%] scale-[1.7] lg:scale-[1.2] origin-bottom block" 
              />
              
              {/* Canva-style Scribble / Brush Edge (Visible only on mobile/tablet) */}
              {/* Changed text-color to white so it blends the image into the section's white background */}
              {   /* Added transform-gpu and z-20 to stop the sub-pixel blinking */}
              <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 lg:hidden text-white translate-y-[2px] z-20 transform-gpu backface-visibility-hidden">                <svg 
                  viewBox="0 0 1200 40" 
                  preserveAspectRatio="none" 
                  className="w-full h-full"
                >
                  <path 
                    d="M0,40 C150,20 300,50 450,15 C600,45 750,10 900,35 C1050,15 1150,35 1200,25 L1200,40 L0,40 Z" 
                    fill="currentColor" 
                  />
                  {/* Subtle gold strokes for the brush effect */}
                  <path 
                    d="M-10,25 Q 150,5 300,35 T 600,15 T 900,40 T 1210,20" 
                    fill="none" 
                    stroke="#f4b41a" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M-5,15 Q 200,-5 400,25 T 800,-5 T 1205,30" 
                    fill="none" 
                    stroke="#D4AF37" 
                    strokeWidth="1.5" 
                    strokeDasharray="4, 6" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>
            
          </div>
          
          {/* Increased margin-top slightly to give breathing room after the image on mobile */}
          <h3 className={`${playfair.className} font-serif italic font-semibold text-2xl lg:text-5xl md:text-4xl text-[#9b1313] px-2 leading-tight lg:mt-3`}>
            Pst. & Pst. Mrs. Michael Ajogba
          </h3>
        </div>
      </section>




      {/* 5. GUEST MINISTERS & ARTISTS (Structured Grid) */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24 px-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-[#BF953F]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`${bartle.className} text-3xl sm:text-5xl md:text-6xl text-center text-[#FCF6BA] mb-12 sm:mb-16`}>Guest Ministers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-24">
            {guestMinisters.map((minister, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                /* REMOVED transition-all to stop the conflict. Added backface-visibility-hidden */
                className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 group hover:border-[#BF953F] transform-gpu backface-visibility-hidden"
              >
                {/* REMOVED bg-zinc-800 so there is no black box to flash */}
                <div className="aspect-square relative overflow-hidden bg-transparent z-10">
                   <Image 
                     src={minister.image}
                     alt={minister.name}
                     fill
                     priority={true}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     /* Scoped the transition specifically to transform, not 'all' */
                     className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out transform-gpu backface-visibility-hidden"
                   />
                </div>
                <div className="p-5 sm:p-6 relative z-20 bg-zinc-900">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{minister.name}</h4>
                  <p className="text-xs sm:text-sm text-[#D4AF37] leading-relaxed">{minister.church}</p>
                </div>
              </motion.div>
            
            ))}
          </div>

          <h2 className={`${bartle.className} text-3xl sm:text-5xl md:text-6xl text-center text-[#FCF6BA] mb-12 sm:mb-16`}>Music Ministers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {musicArtists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                /* REMOVED transition-all to stop the conflict */
                className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 group hover:border-[#BF953F] transform-gpu backface-visibility-hidden"
              >
                {/* REMOVED bg-zinc-800 */}
                <div className="aspect-[4/5] relative overflow-hidden bg-transparent z-10">
                  <Image 
                     src={artist.image}
                     alt={artist.name}
                     fill
                     priority={true}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                     className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out transform-gpu backface-visibility-hidden"
                   />
                </div>
                <div className="p-5 sm:p-6 text-center relative z-20 bg-zinc-900">
                  <p className="text-[10px] sm:text-xs uppercase text-[#D4AF37] tracking-widest mb-1">{artist.title}</p>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">{artist.name}</h4>
                </div>
              </motion.div>
            
              
            ))}
          </div>
        </div>

      </section>


              <div className="flex justify-center items-center mb-10">
                <RegisterButton  />
              </div>  


      {/* 6. 10TH ANNIVERSARY & DOCUMENTARY SECTION */}
      <section className="py-20 sm:py-24 px-4 bg-gradient-to-b from-[#000] via-[#BF953F] to-[#000]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className={`${bartle.className} text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] mb-4 sm:mb-6`}>
              A Decade of 
              <br /> <span className="tracking-tight text-5xl lg:text-7xl">Glory</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 mb-8 font-light leading-relaxed px-2 lg:px-0">
              Join us as we celebrate 10 years of God's faithfulness, power, and undeniable grace at The Mantle Church. Watch our exclusive documentary tracing the journey from the beginning.
            </p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-video bg-zinc-900 rounded-[2rem] border border-zinc-800 shadow-2xl relative overflow-hidden group cursor-pointer"
          >
            {/* Documentary Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#BF953F]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#BF953F] rounded-full flex items-center justify-center pl-1 sm:pl-2">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-zinc-400 font-medium tracking-wide uppercase text-xs sm:text-sm">Watch Trailer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. JOIN THE TREND SECTION */}
      <section className="relative py-24 sm:py-32 overflow-hidden flex flex-col items-center justify-center bg-[#191818]">

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 px-4">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.4em] text-[#D4AF37] mb-6 font-bold">
            Join the Prophetic Trend
          </p>
          <h3 className={`${bartle.className} text-4xl sm:text-6xl md:text-7xl text-white mb-8 drop-shadow-lg`}>
            Carry the Mantle
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-8 px-2 sm:px-10">
            As we celebrate a decade of God's undeniable glory, we invite you to be part of the prophetic wave. Take your favorite photo, use any AI editing tool to place a prophetic mantle upon your shoulders, and share your declaration of faith with the world!
          </p>
          
          <div className="inline-block border border-[#D4AF37]/30 bg-black/50 backdrop-blur-md px-6 py-4 rounded-2xl">
            <p className="text-lg md:text-xl font-light text-[#FAFAFA]">
              Post your picture using <br className="block sm:hidden" />
              <span className="text-[#FCF6BA]/70 font-bold tracking-wider text-lg md:text-xl ml-2">#10YearsOfMantles</span>
            </p>
          </div>
        </div>

        {/* Infinite Fast Picture Carousel */}
        <div className="w-full relative z-10 overflow-hidden flex mt-8">
           
           {/* Fade masks for smooth entry/exit at the edges of the screen */}
           <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
           
           <motion.div 
             className="flex space-x-4 sm:space-x-6 w-max pl-4 sm:pl-6"
             /* Animates from 0 to -50% of its width. Since we duplicated the array, -50% is the exact middle, creating a perfect infinite loop */
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 15, ease: "linear", repeat: Infinity }} // Change duration to make it faster/slower
           >
             {/* We spread the array twice [...trendImages, ...trendImages] so it never runs out of pictures while scrolling */}
             {[...trendImages, ...trendImages].map((img, index) => (
               <div key={index} className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex-shrink-0 group">
                 <Image 
                   src={img}
                   alt="10 Years of Mantles Trend"
                   fill
                   sizes="90vw"
                   className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                 />
               </div>
             ))}
           </motion.div>

           
        </div>

      </section>





     {/* 7. RUACH HAKADOSH */}
      <section className="relative pt-16 md:pt-24 px-4 border-t border-zinc-900 overflow-hidden bg-black min-h-[60vh] md:min-h-[70vh] flex items-center">
        
        {/* Background Picture (ruach.jpg) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/ruach.jpg" 
            alt="Ruach Hakadosh Background" 
            fill 
            className="object-cover opacity-80" 
          />
          {/* Subtle dark gradient overlay to ensure the text on the left stays readable against the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Pastor's Picture (ruach-pastor-aj.png) */}
        {/* Absolutely positioned to bottom-0 right-0 so it ALWAYS sits flush at the bottom right corner */}
        <div className="absolute bottom-0 right-0 w-[85%] sm:w-[60%] md:w-[70%] lg:w-[45%] flex justify-end pointer-events-none z-10">
          <Image 
            src="/ruach-pastor-aj.png" 
            alt="Pastor Ministering" 
            width={800} 
            height={800} 
            className="object-contain object-bottom w-full h-auto drop-shadow-2xl" 
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col pb-60 lg:pb-0">
          
          {/* Restrict text to the left side (md:w-[55%]) so it doesn't overlap the pastor on desktop */}
          <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
            
            <div className="mb-8">
              <span className={`${pinyonScript.className} text-4xl lg:text-6xl text-white block mb-[-10px] md:mb-[6px] drop-shadow-lg`}>
                Encounter
              </span>
              
              {/* Note: I changed your starting gradient color from #000 (black) to #fff (white) so it doesn't disappear into the black background */}
              <h2 className={`${bartle.className} text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_20px_rgba(252,246,186,0.2)] mb-4 uppercase`}>
                RUACH <br className="hidden sm:block md:hidden"/> HAKADOSH
              </h2>
              
              <span className="text-lg sm:text-xl md:text-2xl block text-zinc-300 drop-shadow-lg font-light tracking-wide uppercase">
                (100% move of the Holy Ghost)
              </span>
            </div>

            {/* Date and Time in a premium frosted glass pill */}
            <div className="bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 px-6 sm:px-8 py-3 rounded-full mb-10 shadow-xl">
              <p className="text-[#FCF6BA] text-sm lg:text-xl font-medium tracking-[0.2em] uppercase">
                Sat, 17th October 2026 • 6:30am
              </p>
            </div>
            
          </div>
        </div>
      </section>




     {/* 9. FINAL FOOTER / ICOM 2026 */}
      <section className="relative py-8 sm:py-46 px-4 overflow-hidden flex flex-col items-center justify-center bg-black border-t border-zinc-900"> 
        
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 opacity-80">
          <h2 className={`${bartle.className} text-[15vw] leading-[0.8] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#BF953F]`}>
            #ICOM
            <br/>#ICOM
            <br/>#ICOM
          </h2>
          <h2 className={`${bartle.className} text-[17vw] leading-[0.8] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#BF953F] `}>
            2026
          </h2>
        </div>

        {/* Foreground Content - The Button */}
        <div className="relative z-10 w-full flex justify-center mt-60 md:mt-120 lg:mt-0">
          <RegisterButton />
        </div>
        
      </section>


    </main>
  );
}