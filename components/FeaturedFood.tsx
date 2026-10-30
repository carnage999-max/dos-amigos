"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, UtensilsCrossed } from "lucide-react";
import { streetFries, friesSizes, smashDaddy, dollars } from "@/lib/featured-menu";

type Props = { preview?: boolean };
const reveal={initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:true,amount:0.12},transition:{duration:0.45}};

export function MexicanStreetFries({preview=false}:Props){
 const dishes=preview?streetFries.slice(0,3):streetFries;
 return <section id="mexican-street-fries" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fef9f3]">
  <div className="max-w-7xl mx-auto">
   <motion.div {...reveal} className="text-center max-w-3xl mx-auto mb-9 sm:mb-12">
    <span className="inline-flex gap-2 items-center text-sm font-extrabold tracking-widest uppercase text-[#dc2626]"><Flame size={18}/> New loaded favorites</span>
    <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl text-[#1a8754] leading-tight mt-3">MEXICAN STREET FRIES</h2>
    <p className="text-[#78350f]/75 text-base sm:text-lg mt-4">Crispy fries, piled high with bold Mexican-inspired flavors. Personal portion, loaded meal or a tray made to share.</p>
   </motion.div>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
    {friesSizes.map((s,i)=><div key={s.key} className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e8ddcd] text-center shadow-sm">
     <div className="text-[#1a8754] font-black text-sm tracking-wider">{s.label} <span className="text-[#78350f]">— {s.description}</span></div>
     <p className="text-[#78350f]/60 text-sm mt-1">{s.ounces} finished portion</p>
    </div>)}
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {dishes.map((dish,i)=><motion.article {...reveal} transition={{duration:.4,delay:(i%3)*.06}} key={dish.id} className="bg-white rounded-3xl overflow-hidden border border-[#e8ddcd] shadow-md hover:shadow-xl transition-shadow">
      <div className="h-56 sm:h-60 bg-gradient-to-br from-[#f5f0e8] to-[#ebdfce] flex items-center justify-center p-3 sm:p-4"><div className="relative h-full aspect-[4/5] max-w-full overflow-hidden rounded-xl shadow-md"><Image src={dish.image} alt={dish.name+" at Dos Amigos"} fill sizes="(max-width: 640px) 200px, 230px" className="object-contain" /></div></div>
      <div className="p-6">
       <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#1a8754]">{dish.name}</h3>
       <p className="text-[#78350f]/70 text-sm leading-relaxed mt-2 min-h-[44px]">{dish.description}</p>
       <div className="mt-5 border-t border-[#e9e0d4] pt-4 grid grid-cols-3 gap-2">
        {friesSizes.map((size,j)=><div key={size.key} className="text-center">
         <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wide text-[#78350f]/65">{size.label}</p>
         <p className="text-lg sm:text-xl font-extrabold text-[#dc2626]">{dollars(dish.prices[j])}</p>
        </div>)}
       </div>
      </div>
    </motion.article>)}
   </div>
   {preview&&<div className="text-center mt-10"><Link href="/menu#mexican-street-fries" className="inline-flex items-center gap-2 rounded-full bg-[#1a8754] hover:bg-[#0f5c38] text-white font-bold px-7 py-3 transition-colors">Explore all seven flavors <ArrowUpRight size={18}/></Link></div>}
   {!preview&&<p className="text-center text-[#78350f]/65 text-sm mt-8">Prices shown in USD. Portions are approximate; availability and pricing may change.</p>}
  </div>
 </section>
}

export function SmashDaddyFeature({preview=false}:Props){
 return <section id="smash-daddy-burrito" className="bg-[#f5f0e8] px-4 sm:px-6 py-16 sm:py-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-14 items-center">
   <motion.div {...reveal} className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#e8ddcd]">
    <Image src={smashDaddy.image} width={1000} height={800} alt="Smash Daddy Burrito with smashburger beef, queso and Mexican street fries" sizes="(max-width: 1024px) 100vw, 50vw" className="block w-full h-auto object-contain"/>
   </motion.div>
   <motion.div {...reveal}>
    <span className="inline-flex items-center gap-2 text-[#dc2626] uppercase text-sm font-black tracking-widest"><UtensilsCrossed size={18}/> Featured burrito</span>
    <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-[#1a8754] leading-tight mt-3">SMASH DADDY BURRITO™</h2>
    <p className="font-extrabold text-[#dc2626] text-4xl mt-4">{dollars(smashDaddy.price)}</p>
    <p className="text-[#78350f]/80 leading-relaxed text-base sm:text-lg mt-5">{smashDaddy.description}</p>
    <div className="bg-white border border-[#e8ddcd] rounded-2xl p-5 sm:p-6 mt-6">
     <h3 className="font-bold text-[#78350f] text-lg mb-3">Make it yours</h3>
     {smashDaddy.extras.map(extra=><div className="flex justify-between gap-4 border-b border-[#ede5d9] py-2 text-[#78350f] text-sm sm:text-base" key={extra.name}><span>{extra.name}</span><strong className="whitespace-nowrap">+{dollars(extra.price)}</strong></div>)}
     <div className="flex justify-between gap-4 mt-4 text-[#1a8754] text-sm sm:text-base font-bold"><span>Meal with drink + side</span><span className="whitespace-nowrap">{dollars(smashDaddy.mealPriceFrom)}–{dollars(smashDaddy.mealPriceTo)}</span></div>
    </div>
    <p className="text-[#78350f]/65 text-xs mt-4">Regular menu price shown. Meal price depends on the selected side and drink.</p>
    {preview&&<Link href="/menu#smash-daddy-burrito" className="inline-flex items-center gap-2 bg-[#1a8754] text-white rounded-full font-bold px-6 py-3 mt-6 hover:bg-[#0f5c38] transition-colors">See menu details <ArrowUpRight size={18}/></Link>}
   </motion.div>
  </div>
 </section>
}
