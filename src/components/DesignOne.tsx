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

const Twitter = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Facebook = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const PRODUCTS =[
  { id: 1, name: 'Essential Tee', price: '$55', category: 'Basics', tag: 'New Season', image: 'https://images.pexels.com/photos/1656681/pexels-photo-1656681.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Technical Jacket', price: '$210', category: 'Outerwear', tag: 'Waterproof', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Luxury Hoodie', price: '$140', category: 'Sweats', tag: 'Heavyweight', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Zip Up Hoodie', price: '$155', category: 'Sweats', tag: 'Standard Fit', image: 'https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Double Zip Hoodie', price: '$175', category: 'Sweats', tag: 'Premium', image: 'https://images.pexels.com/photos/15535546/pexels-photo-15535546/free-photo-of-stylish-man-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Signature Sweatshirt', price: '$120', category: 'Sweats', tag: 'Relaxed', image: 'https://images.pexels.com/photos/1154611/pexels-photo-1154611.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Style Pants', price: '$130', category: 'Bottoms', tag: 'Tailored', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'Heavy Sweatpants', price: '$110', category: 'Bottoms', tag: 'Soft-touch', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function DesignFour() {
  const[filter, setFilter] = useState<string>('All');
  const categories =['All', 'Basics', 'Sweats', 'Outerwear', 'Bottoms'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white pb-12">
      
      {/* FLOATING NAVBAR */}
      <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-white rounded-full px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-10">
            <h1 className="text-lg md:text-xl font-bold tracking-tighter uppercase cursor-pointer">Studio.Next</h1>
            <div className="hidden md:flex gap-6 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              <a href="#" className="hover:text-black transition-colors">Shop All</a>
              <a href="#" className="hover:text-black transition-colors">Collections</a>
              <a href="#" className="hover:text-black transition-colors">Journal</a>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Search className="w-5 h-5 cursor-pointer text-zinc-700 hover:text-black transition-colors" strokeWidth={1.5} />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 text-zinc-700 group-hover:text-black transition-colors" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </div>
            <Menu className="w-6 h-6 md:hidden text-zinc-700 cursor-pointer" strokeWidth={1.5} />
          </div>
        </nav>
      </div>

      {/* CINEMATIC HERO */}
      <section className="relative pt-24 md:pt-28 px-4 md:px-6 max-w-[100rem] mx-auto">
        <div className="relative h-[70vh] md:h-[85vh] w-full rounded-[2rem] overflow-hidden flex items-end pb-12 md:pb-20 px-6 md:px-16 bg-zinc-900 shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
              alt="Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 border border-white/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md">
                Autumn / Winter 2024
              </span>
              <h2 className="text-white text-4xl sm:text-5xl md:text-[6rem] font-light tracking-tighter mb-4 leading-[0.9]">
                Elevated <br /> <span className="italic font-serif text-zinc-300">Simplicity.</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-base leading-relaxed max-w-sm md:mt-6 hidden md:block">
                Discover essential garments focused on uncompromising quality, modern fits, and timeless silhouettes.
              </p>
            </div>
            
            <button className="group bg-white text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 md:gap-3">
              Explore Collection 
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight text-black">New Arrivals</h2>
          
          {/* Scrollable filters on mobile */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar gap-2 w-[100vw] md:w-auto md:flex-wrap">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={`whitespace-nowrap text-[10px] md:text-xs uppercase tracking-widest px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 
          PRODUCT GRID
          - grid-cols-2: Two columns on mobile! 
          - gap-x-3 gap-y-10: Tighter gaps on mobile so images are larger
          - md:grid-cols-4 md:gap-x-6 md:gap-y-16: Returns to standard size on desktop
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-5 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Minimal Product Tag */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-md text-black text-[8px] md:text-[9px] font-bold px-2 py-1 md:px-3 md:py-1.5 uppercase tracking-widest rounded-full">
                  {product.tag}
                </div>
                
                {/* Floating Quick Add (Hidden on touch devices, visible on hover for desktop) */}
                <div className="hidden lg:block absolute bottom-4 left-4 right-4 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <button className="w-full bg-black/90 backdrop-blur-md text-white text-[10px] font-bold py-3.5 uppercase tracking-widest rounded-xl hover:bg-black transition-colors shadow-xl">
                    Quick Add +
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-1 flex flex-col gap-1 md:gap-1.5">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-0.5 xl:gap-0">
                  <h3 className="text-[11px] md:text-sm font-bold text-black uppercase leading-tight md:leading-normal">{product.name}</h3>
                  <p className="text-[11px] md:text-sm font-semibold text-zinc-500">{product.price}</p>
                </div>
                <p className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-black text-white rounded-[2rem] p-8 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <h2 className="text-xl md:text-2xl font-bold tracking-tighter mb-4 md:mb-6 uppercase">Studio.Next</h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm mb-6 md:mb-8">
                Defining the modern uniform. Essential garments focused on uncompromising quality and everyday utility.
              </p>
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:gap-0 md:col-span-2">
              <div>
                <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 md:mb-6">Shop</h3>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-zinc-300">
                  <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Clothing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 md:mb-6">Newsletter</h3>
              <p className="text-xs md:text-sm text-zinc-400 mb-4 md:mb-6">Join our private list for early access to new collections and events.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-zinc-900 border border-zinc-800 text-white text-xs md:text-sm px-5 md:px-6 py-3.5 md:py-4 w-full rounded-full focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
                />
                <button className="bg-white text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-zinc-600 text-[10px] md:text-xs">© 2024 Studio.Next. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6 text-[10px] md:text-xs text-zinc-600">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Fonts and custom styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Inter:wght@300;400;600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        body { font-family: 'Inter', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}