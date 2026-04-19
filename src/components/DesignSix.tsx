"use client";
import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: "Classic Tee", category: "Tops", price: 38, badge: "New", badgeClass: "bg-zinc-900", colors: ["#1a1a1a", "#e8e0d4", "#7a8a7c"], svg: <path d="M20 30 L0 60 L25 65 L25 145 L95 145 L95 65 L120 60 L100 30 L80 20 L70 35 L50 35 L40 20 Z" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1.5"/> },
  { id: 2, name: "Utility Jacket", category: "Outerwear", price: 148, badge: "Popular", badgeClass: "bg-slate-700", colors: ["#c4b89a", "#4a5568"], svg: <><path d="M10 30 L0 70 L30 75 L30 150 L55 150 L55 80 L65 80 L65 150 L90 150 L90 75 L120 70 L110 30 L85 15 L75 32 L60 38 L45 32 L35 15 Z" fill="#d4c8b8" stroke="#b0a090" strokeWidth="1.5"/><line x1="55" y1="38" x2="55" y2="150" stroke="#b0a090" strokeWidth="1"/><line x1="65" y1="38" x2="65" y2="150" stroke="#b0a090" strokeWidth="1"/><rect x="20" y="90" width="15" height="10" rx="1" fill="#b0a090"/></> },
  { id: 3, name: "Pullover Hoodie", category: "Tops", price: 88, colors: ["#c8d4e0", "#2d3748", "#f5e6d3"], svg: <><path d="M15 40 L0 75 L28 80 L28 150 L92 150 L92 80 L120 75 L105 40 L85 20 Q60 10 35 20 Z" fill="#c8d4e0" stroke="#a0b4c4" strokeWidth="1.5"/><path d="M35 20 Q60 0 85 20 Q70 42 60 44 Q50 42 35 20 Z" fill="#b8c8d8" stroke="#a0b4c4" strokeWidth="1"/></> },
  { id: 4, name: "Zip-Up Hoodie", category: "Tops", price: 96, badge: "New", badgeClass: "bg-zinc-900", colors: ["#e8d8c4", "#1a1a1a"], svg: <><path d="M15 40 L0 75 L28 80 L28 150 L92 150 L92 80 L120 75 L105 40 L85 20 Q60 10 35 20 Z" fill="#e8d8c4" stroke="#c8b098" strokeWidth="1.5"/><path d="M35 20 Q60 0 85 20 Q70 42 60 44 Q50 42 35 20 Z" fill="#d8c8b0" stroke="#c8b098" strokeWidth="1"/><line x1="60" y1="44" x2="60" y2="150" stroke="#c8b098" strokeWidth="1.5"/><circle cx="60" cy="100" r="3" fill="#c8b098"/><circle cx="60" cy="115" r="3" fill="#c8b098"/><circle cx="60" cy="130" r="3" fill="#c8b098"/></> },
  { id: 5, name: "Double Zip Hoodie", category: "Tops", price: 108, colors: ["#d8cce8", "#2d3748"], svg: <><path d="M15 40 L0 75 L28 80 L28 150 L92 150 L92 80 L120 75 L105 40 L85 20 Q60 10 35 20 Z" fill="#d8cce8" stroke="#b8a8d0" strokeWidth="1.5"/><path d="M35 20 Q60 0 85 20 Q70 42 60 44 Q50 42 35 20 Z" fill="#c8bcd8" stroke="#b8a8d0" strokeWidth="1"/><line x1="57" y1="44" x2="57" y2="150" stroke="#b8a8d0" strokeWidth="1.5"/><line x1="63" y1="44" x2="63" y2="150" stroke="#b8a8d0" strokeWidth="1.5"/></> },
  { id: 6, name: "Crewneck Sweatshirt", category: "Tops", price: 78, colors: ["#d4d8d0", "#c4a882"], svg: <><path d="M20 35 L0 65 L26 70 L26 148 L94 148 L94 70 L120 65 L100 35 L82 22 L68 36 L52 36 L38 22 Z" fill="#d4d8d0" stroke="#b0b8a8" strokeWidth="1.5"/><rect x="26" y="136" width="68" height="12" rx="0" fill="#c4c8c0" stroke="#b0b8a8" strokeWidth="0.5"/></> },
  { id: 7, name: "Style Trousers", category: "Bottoms", price: 89, oldPrice: 128, badge: "Sale", badgeClass: "bg-red-700", colors: ["#c8baa8", "#1a1a1a"], svg: <><path d="M15 10 L105 10 L105 20 L95 20 L90 100 L110 160 L75 160 L65 100 L55 100 L45 160 L10 160 L30 100 L25 20 L15 20 Z" fill="#c8baa8" stroke="#a89880" strokeWidth="1.5"/><line x1="15" y1="18" x2="105" y2="18" stroke="#a89880" strokeWidth="1"/></> },
  { id: 8, name: "Relaxed Sweatpants", category: "Bottoms", price: 72, colors: ["#c4ccd4", "#2d3748"], svg: <><path d="M18 15 L102 15 L102 22 L95 22 L90 110 L105 160 L72 160 L65 110 L55 110 L48 160 L15 160 L30 110 L25 22 L18 22 Z" fill="#c4ccd4" stroke="#a0acb8" strokeWidth="1.5"/><path d="M18 15 Q60 8 102 15" stroke="#a0acb8" strokeWidth="1" fill="none"/></> },
];

export default function DesignSix() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Tops', 'Outerwear', 'Bottoms'];

  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white pb-20 overflow-x-hidden">
      {/* HEADER */}
      <div className="text-center pt-20 pb-12">
        <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-zinc-400 mb-2">New Season Collection</p>
        <h1 className="text-5xl font-light italic font-serif">The Essentials</h1>
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 justify-center mb-10 flex-wrap px-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[11px] uppercase tracking-widest px-5 py-2 rounded-full border transition-all ${
              filter === cat ? 'bg-zinc-900 text-white border-zinc-900' : 'text-zinc-500 border-zinc-200 hover:border-zinc-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border-y border-zinc-100">
        {filtered.map(product => (
          <div key={product.id} className="bg-white group cursor-pointer relative overflow-hidden">
            {/* Image Area */}
            <div className="aspect-3/4 bg-zinc-50 relative flex items-center justify-center overflow-hidden">
              <svg className="w-[70%] h-[70%] transition-transform duration-700 group-hover:scale-105" viewBox="0 0 120 160" fill="none">
                {product.svg}
              </svg>
              
              {product.badge && (
                <span className={`absolute top-4 left-4 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${product.badgeClass}`}>
                  {product.badge}
                </span>
              )}

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <button className="bg-white text-zinc-900 text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>

            {/* Info Area */}
            <div className="p-5 border-t border-zinc-100">
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-400 mb-1">{product.category}</p>
              <h3 className="text-lg font-serif font-medium mb-3">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {product.oldPrice && <span className="text-zinc-400 line-through mr-2 text-xs">${product.oldPrice}</span>}
                  ${product.price}
                </span>
                <div className="flex gap-1.5">
                  {product.colors.map(color => (
                    <div key={color} className="w-2 h-2 rounded-full border border-zinc-200" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BANNER */}
      <div className="max-w-7xl mx-auto mt-px bg-white p-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-zinc-100">
        <div>
          <p className="text-xl font-serif italic text-zinc-800">Free shipping on orders over $150</p>
          <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-1">Express delivery available · Easy returns</p>
        </div>
        <button className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-zinc-800 transition-colors">
          View All Items
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Outfit:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        body { font-family: 'Outfit', sans-serif; }
      `}} />
    </div>
  );
}