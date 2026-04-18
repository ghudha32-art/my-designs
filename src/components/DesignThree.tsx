"use client";
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Plus, ArrowDownRight, Globe, Play } from 'lucide-react';

export default function DesignThree() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    { id: 1, name: "OVERSIZED GRAFFITI HOODIE", price: "$120", category: "DROP 01", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "CARGO UTILITY PANTS", price: "$155", category: "DROP 01", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "CYBERPUNK GRAPHIC TEE", price: "$65", category: "LIMITED", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800" },
    {
  id: 4,
  name: "REFLECTIVE BUCKET HAT",
  price: "$45",
  category: "ACCESSORIES",
  image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800"
}
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-mono selection:bg-lime-400 selection:text-black overflow-x-hidden">
      
      {/* --- SIDEBAR NAV (Desktop) --- */}
      <nav className="fixed left-0 top-0 h-dvh w-20 border-r border-white/10 hidden lg:flex flex-col items-center py-10 z-50 bg-[#0A0A0A]">
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
          <div className="whitespace-nowrap tracking-[0.5em] text-[10px] font-black text-lime-400 -rotate-90 uppercase origin-center">
            URBAN_COLLECTIVE
          </div>
        </div>
        <div className="flex flex-col gap-8 pb-4">
          <Globe size={20} className="hover:text-lime-400 cursor-pointer transition-colors" />
          <Play size={20} className="hover:text-lime-400 cursor-pointer transition-colors" />
        </div>
      </nav>

      {/* --- TOP NAV --- */}
      <header className="fixed top-0 right-0 left-0 lg:left-20 h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-12 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <h1 className="text-xl md:text-3xl font-black italic tracking-tighter">NX_LEVEL</h1>
        <div className="flex items-center space-x-4">
          <button className="relative p-2" onClick={() => setCartCount(c => c + 1)}>
            <ShoppingCart size={22} />
            <span className="absolute top-0 right-0 bg-lime-400 text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center italic">{cartCount}</span>
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="p-2 border border-white/20 hover:border-lime-400 transition-colors">
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* --- MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-100 bg-lime-400 text-black p-8 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="font-black italic text-xl underline decoration-4 uppercase">NX_LEVEL</span>
            <button onClick={() => setIsMenuOpen(false)} className="border-2 border-black p-2 hover:bg-black hover:text-lime-400 transition-all"><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-4">
            {['COLLECTIONS', 'STREET_LOG', 'LOCATIONS', 'ABOUT_US'].map((item) => (
              <a key={item} href="#" className="text-4xl md:text-8xl font-black italic hover:tracking-widest transition-all duration-500 border-b-4 border-black leading-tight">{item}</a>
            ))}
          </div>
        </div>
      )}

      {/* --- MAIN CONTENT --- */}
      <main className="pt-20 lg:ml-20 max-w-full">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)] border-b border-white/10">
          <div className="lg:col-span-7 border-r border-white/10 p-6 md:p-12 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="inline-block bg-lime-400 text-black px-2 py-1 text-[10px] font-black uppercase mb-4 italic">Live Now: Season 04</div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] italic tracking-tighter uppercase mb-8">
               Break<br/><span className="text-transparent stroke-text">The_Static</span>
              </h2>
            </div>
            <button className="flex items-center space-x-3 bg-white text-black px-6 py-4 font-black text-xs uppercase hover:bg-lime-400 transition-colors w-fit mb-10 lg:mb-0">
              <span>Shop Drop 01</span>
              <ArrowDownRight size={18} />
            </button>
          </div>
          <div className="lg:col-span-5 bg-zinc-900 min-h-100">
             <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" alt="Hero" />
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="p-6 md:p-12">
          <h3 className="text-xl font-black italic mb-12 uppercase tracking-tight text-lime-400">Latest_Artifacts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.id} className="group bg-zinc-900/30 border border-white/5 p-4 hover:border-lime-400 transition-all">
                <div className="relative aspect-square overflow-hidden mb-6">
                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={p.name} />
                  <div className="absolute top-0 right-0 p-2"><div className="bg-black/80 p-2 hover:text-lime-400"><Plus size={20} /></div></div>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-[10px] md:text-xs font-black tracking-tighter uppercase leading-tight">
                    {p.name}
                  </h4>
                  <span className="text-xs font-bold text-lime-400 shrink-0">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- JOIN SECTION --- */}
<section className="bg-lime-400 text-black py-20 px-4 text-center overflow-hidden border-y-4 border-black">
    <h4 className="text-[8vw] sm:text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 leading-none wrap-break-word">
        Join_The_<br className="sm:hidden" />Underground
    </h4>
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
        Exclusive access to limited drops.
    </p>
</section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 1px white; }
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@900&display=swap');
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-black { font-family: 'Inter', sans-serif; font-weight: 900; }
      `}} />
    </div>
  );
}