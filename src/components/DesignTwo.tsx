"use client";
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, ArrowRight, ArrowUpRight } from 'lucide-react';

// Explicitly type the custom icon props
interface IconProps {
  className?: string;
  strokeWidth?: number;
}

const Instagram = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Updated Products with 'isNew' flag and matching your categories
const PRODUCTS =[
  { id: 1, name: 'Oversized Graphic Tee', price: '$45', category: 'Shirts', isNew: true, image: 'https://images.pexels.com/photos/1656681/pexels-photo-1656681.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Vintage Wash Denim', price: '$85', category: 'Pants', isNew: true, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Retro Low Sneakers', price: '$120', category: 'Shoes', isNew: true, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Essential Ribbed Socks', price: '$15', category: 'Socks', isNew: false, image: 'https://images.pexels.com/photos/4505504/pexels-photo-4505504.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Heavyweight Hoodie', price: '$75', category: 'Shirts', isNew: false, image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Cargo Parachute Pants', price: '$95', category: 'Pants', isNew: true, image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Chunky Running Shoes', price: '$140', category: 'Shoes', isNew: false, image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'Sport Crew Socks (3-Pack)', price: '$25', category: 'Socks', isNew: false, image: 'https://images.pexels.com/photos/7780005/pexels-photo-7780005.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function ResellStore() {
  const[filter, setFilter] = useState<string>('All');
  const categories =['All', 'Shirts', 'Pants', 'Shoes', 'Socks'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const newArrivals = PRODUCTS.filter(p => p.isNew);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white pb-12 overflow-x-hidden">
      
      {/* 1. ANNOUNCEMENT MARQUEE (စာတန်းရွေ့) */}
      <div className="bg-black text-white py-2 overflow-hidden flex items-center relative z-50">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          <span>🔥 FREE SHIPPING ON ALL ORDERS OVER $100</span>
          <span>•</span>
          <span>NEW DROPS EVERY FRIDAY AT 8PM</span>
          <span>•</span>
          <span>LIMITED STOCK AVAILABLE</span>
          <span>•</span>
          <span>🔥 FREE SHIPPING ON ALL ORDERS OVER $100</span>
          <span>•</span>
          <span>NEW DROPS EVERY FRIDAY AT 8PM</span>
          <span>•</span>
          <span>LIMITED STOCK AVAILABLE</span>
        </div>
      </div>

      {/* FLOATING NAVBAR */}
      <nav className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Menu className="w-5 h-5 md:hidden text-zinc-700 cursor-pointer" strokeWidth={1.5} />
            <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase cursor-pointer">Vault.</h1>
            <div className="hidden md:flex gap-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
              <a href="#" className="hover:text-black transition-colors">Shop</a>
              <a href="#" className="hover:text-black transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-black transition-colors">Brands</a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Search className="w-5 h-5 cursor-pointer text-zinc-700 hover:text-black transition-colors" strokeWidth={1.5} />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 text-zinc-700 group-hover:text-black transition-colors" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. COMPACT CINEMATIC HERO */}
      <section className="relative w-full h-[60vh] md:h-[75vh] bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-end items-center text-center pb-16 md:pb-24 px-4">
          <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 border border-white/30 px-4 py-1.5 rounded-full backdrop-blur-md">
            Curated Resell Collection
          </span>
          <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
            The New <br /> Standard.
          </h2>
          <button className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            Shop The Drop <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. CATEGORIES BENTO BOX (ခလုတ်တွေအစား ပုံတွေနဲ့ Category ရွေးတဲ့နေရာ) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          
          <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer">
            <img src="https://images.pexels.com/photos/1656681/pexels-photo-1656681.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Shirts" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-2xl uppercase tracking-tight">Shirts</h3>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer">
            <img src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Pants" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-2xl uppercase tracking-tight">Pants</h3>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer">
            <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Shoes" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-2xl uppercase tracking-tight">Shoes</h3>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer">
            <img src="https://images.pexels.com/photos/4505504/pexels-photo-4505504.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Socks" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-2xl uppercase tracking-tight">Socks</h3>
          </div>

        </div>
      </section>

      {/* 4. NEW ARRIVALS (Horizontal Scroll - အသစ်ရောက်တဲ့ ပစ္စည်းများကို သီးသန့်ပြခြင်း) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Just Dropped</h2>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></a>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-6 pb-8 hide-scrollbar">
          {newArrivals.map(product => (
            <div key={`new-${product.id}`} className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[25vw] lg:min-w-[20vw] snap-start group cursor-pointer">
              <div className="relative aspect-[3/4] bg-zinc-100 rounded-xl overflow-hidden mb-3">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {/* 🔥 NEW BADGE */}
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-black px-2.5 py-1 uppercase tracking-widest rounded-sm">
                  NEW
                </div>
              </div>
              <h3 className="text-sm font-bold text-black uppercase truncate">{product.name}</h3>
              <p className="text-sm font-semibold text-zinc-500">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROMO / LOOKBOOK BANNER (Design မရိုးသွားအောင် Banner တစ်ခုညှပ်ထည့်ခြင်း) */}
      <section className="w-full h-[50vh] md:h-[60vh] relative my-12">
        <img src="https://images.pexels.com/photos/15535546/pexels-photo-15535546/free-photo-of-stylish-man-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover object-top grayscale" alt="Lookbook" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Style The Look</h2>
          <p className="text-zinc-300 text-xs md:text-sm max-w-md mb-6 leading-relaxed">
            Pair our vintage denim with heavy hoodies and retro low sneakers for the ultimate everyday fit.
          </p>
          <button className="border border-white text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Shop The Outfit
          </button>
        </div>
      </section>

      {/* 6. ALL PRODUCTS GRID (ဖုန်းမှာ 2-Grid နဲ့ ပစ္စည်းအားလုံးချပြတဲ့အပိုင်း) */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">All Inventory</h2>
          
          {/* Scrollable filters */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar gap-2 w-[100vw] md:w-auto md:flex-wrap">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={`whitespace-nowrap text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-black text-white border-black' 
                    : 'bg-transparent text-zinc-500 border-zinc-200 hover:border-black hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Grid on Mobile, 4-Grid on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-xl mb-3 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-black text-white text-[8px] md:text-[9px] font-bold px-2 py-1 md:px-2.5 md:py-1 uppercase tracking-widest rounded-sm">
                    NEW
                  </div>
                )}
                {/* Quick Add overlay */}
                <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
                  <button className="w-full bg-white text-black text-[10px] font-bold py-3 uppercase tracking-widest rounded-sm hover:bg-zinc-200 transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-[9px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{product.category}</p>
                <h3 className="text-[11px] md:text-sm font-black text-black uppercase leading-tight mt-1">{product.name}</h3>
                <p className="text-[11px] md:text-sm font-semibold text-zinc-600 mt-0.5">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-black tracking-tighter mb-4 uppercase">Vault.</h2>
          <p className="text-zinc-500 text-xs max-w-sm mb-8 uppercase tracking-widest leading-relaxed">
            Curated pieces. Handpicked for quality and style.
          </p>
          <div className="flex gap-4 mb-12">
            <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </div>
          </div>
          <p className="text-zinc-700 text-[10px] uppercase tracking-widest">© 2024 VAULT. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS Animations & Utilities */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          padding-left: 100%;
        }
      `}} />
    </div>
  );
}