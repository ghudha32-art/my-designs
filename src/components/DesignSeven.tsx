"use client";
import React from 'react';
import { Search, ShoppingBag, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Classic Tee", cat: "Tops", price: "$38", tag: "New", color: "#f0ece6", svgColor: "#ddd8d0", dots: ["#1a1a1a", "#e8ddd0"] },
  { id: 2, name: "Utility Jacket", cat: "Outerwear", price: "$148", tag: "Popular", color: "#1a1a1a", svgColor: "#2a2a2a", dots: ["#555", "#c8b898"], isDark: true },
  { id: 3, name: "Pullover Hoodie", cat: "Tops", price: "$88", color: "#eaecf0", svgColor: "#d8dce8", dots: ["#c0c8d8", "#1a1a1a"] },
  { id: 4, name: "Zip-Up Hoodie", cat: "Tops", price: "$96", tag: "New", color: "#f0ece6", svgColor: "#ddd8ce", dots: ["#d8d0c4", "#2d3a48"] },
  { id: 5, name: "Double Zip Hoodie", cat: "Tops", price: "$108", color: "#ede8f4", svgColor: "#dcd4ec", dots: ["#dcd4ec", "#1a1a1a"] },
  { id: 6, name: "Crewneck Sweatshirt", cat: "Tops", price: "$78", color: "#eaebe8", svgColor: "#d4d8cc", dots: ["#d4d8cc", "#8a7060"] },
  { id: 7, name: "Style Trousers", cat: "Bottoms", price: "$89", oldPrice: "$128", tag: "Sale", color: "#f0ebe4", svgColor: "#ddd4c4", dots: ["#c8b8a0", "#1a1a1a"] },
  { id: 8, name: "Relaxed Sweatpants", cat: "Bottoms", price: "$72", color: "#1a1a1a", svgColor: "#282828", dots: ["#444", "#c8c0b4"], isDark: true },
];

export default function DesignSeven() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-10 font-sans selection:bg-zinc-900 selection:text-white">
      {/* NAV */}
      <nav className="flex justify-between items-center pb-8 border-b border-zinc-100 mb-10">
        <h1 className="text-2xl font-serif tracking-tighter italic">ESSNT.</h1>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium text-zinc-400">
          <span>New</span><span>Men</span><span>Women</span><span>Sale</span>
        </div>
        <div className="flex gap-4">
          <div className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer"><Search size={14} /></div>
          <div className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer"><ShoppingBag size={14} /></div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16 rounded-3xl overflow-hidden min-h-100">
        <div className="bg-[#f7f5f2] p-12 flex flex-col justify-between">
          <div><p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-4">SS25</p><h2 className="text-5xl md:text-6xl font-serif leading-none tracking-tighter mb-6">The<br/><span className="italic text-zinc-400">Essential</span><br/>Tee</h2></div>
          <button className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-full w-fit flex items-center gap-3">Shop Now <ArrowRight size={14} /></button>
        </div>
        <div className="bg-zinc-900 p-12 flex flex-col justify-between text-white">
          <div><p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">Featured</p><h2 className="text-5xl md:text-6xl font-serif leading-none tracking-tighter mb-6">Utility<br/><span className="italic text-zinc-500">Jacket</span><br/>25</h2></div>
          <button className="bg-white text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-full w-fit flex items-center gap-3">Explore <ArrowRight size={14} /></button>
        </div>
      </div>

      {/* PRODUCT GRID (Mapped 8 items) */}
      <div className="flex justify-between items-baseline mb-8"><h3 className="text-2xl font-serif italic">All Products</h3><span className="text-[10px] text-zinc-400 uppercase tracking-widest">8 pieces</span></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <div className={`aspect-4/5 rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 hover:-translate-y-1`} style={{backgroundColor: p.color}}>
              {p.tag && <span className={`absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.isDark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'}`}>{p.tag}</span>}
              <svg width="80" height="80" viewBox="0 0 60 70" fill="none">
                <path d="M10 16 L0 32 L12 35 L12 62 L48 62 L48 35 L60 32 L50 16 L40 10 L35 20 L25 20 L20 10Z" fill={p.svgColor} strokeOpacity="0.2" stroke="black" strokeWidth="1.2"/>
              </svg>
            </div>
            <div className="pt-4 px-1">
              <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-1">{p.cat}</p>
              <h4 className={`text-sm font-medium mb-3 ${p.isDark ? 'text-zinc-900' : 'text-zinc-900'}`}>{p.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">{p.oldPrice && <span className="text-zinc-300 line-through mr-2 font-normal">{p.oldPrice}</span>}{p.price}</span>
                <div className="flex gap-1">
                  {p.dots.map(dot => <div key={dot} className="w-2 h-2 rounded-full border border-zinc-100" style={{backgroundColor: dot}}></div>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STRIP */}
      <div className="bg-[#f7f5f2] rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left"><h4 className="text-2xl font-serif italic mb-2">Made to move. Built to last.</h4><p className="text-[10px] text-zinc-400 uppercase tracking-widest">Free express shipping · Sustainable materials</p></div>
        <div className="flex gap-12 text-center">
          <div><p className="text-2xl font-serif">8</p><p className="text-[9px] text-zinc-400 uppercase tracking-widest">Products</p></div>
          <div><p className="text-2xl font-serif">24</p><p className="text-[9px] text-zinc-400 uppercase tracking-widest">Colors</p></div>
          <div><p className="text-2xl font-serif">SS25</p><p className="text-[9px] text-zinc-400 uppercase tracking-widest">Season</p></div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display:ital@0;1&display=swap'); .font-serif { font-family: 'DM Serif Display', serif; } body { font-family: 'DM Sans', sans-serif; }`}} />
    </div>
  );
}