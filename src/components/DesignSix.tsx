"use client";
import React from 'react';
import { ShoppingBag, Search, Plus, ArrowRight, Globe, Share2, Menu } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Essential Tee', price: '$55', category: 'Basics', description: 'Heavyweight organic cotton', image: 'https://images.pexels.com/photos/1656681/pexels-photo-1656681.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Technical Jacket', price: '$210', category: 'Outerwear', description: 'Water-repellent nylon shell', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Luxury Hoodie', price: '$140', category: 'Sweats', description: '450gsm French terry', image: 'https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Zip Up Hoodie', price: '$155', category: 'Sweats', description: 'Dual-directional Riri zippers', image: 'https://images.pexels.com/photos/15535546/pexels-photo-15535546/free-photo-of-stylish-man-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Double Zip Hoodie', price: '$175', category: 'Sweats', description: 'Signature boxy silhouette', image: 'https://images.pexels.com/photos/1617000/pexels-photo-1617000.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Signature Sweatshirt', price: '$120', category: 'Sweats', description: 'Drop shoulder classic', image: 'https://images.pexels.com/photos/1154611/pexels-photo-1154611.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Style Pants', price: '$130', category: 'Bottoms', description: 'Relaxed tailored fit', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'Heavy Sweatpants', price: '$110', category: 'Bottoms', description: 'Elasticized cuffed hem', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function DesignSix() {
  return (
    <div className="bg-[#0f0f0f] text-[#f0f0f0] font-sans selection:bg-white selection:text-black overflow-x-hidden w-full">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex gap-8 items-center">
          <Menu className="w-5 h-5 cursor-pointer" />
          <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.3em] font-medium">
            <a href="#" className="hover:opacity-50 transition-opacity">Collection</a>
            <a href="#" className="hover:opacity-50 transition-opacity">About</a>
          </div>
        </div>
        <h1 className="text-xl md:text-2xl font-serif italic tracking-tighter absolute left-1/2 -translate-x-1/2">Studio Next</h1>
        <div className="flex gap-6 items-center">
          <Search className="w-4 h-4 cursor-pointer" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-[10px] uppercase tracking-widest font-bold">Bag</span>
            <div className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">0</div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(40,40,40,1)_0%,rgba(0,0,0,1)_70%)] opacity-50" />
        <div className="relative z-10 text-center text-white space-y-6 px-6">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em]">ESTABLISHED 2024</p>
          <h2 className="text-5xl md:text-8xl lg:text-[120px] font-serif italic leading-none tracking-tight">
            The Art of <br /> 
            <span className="not-italic font-sans font-black uppercase tracking-tighter">Essentialism</span>
          </h2>
          <div className="pt-12">
            <div className="flex flex-col items-center gap-4 mx-auto">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">Explore Drops</span>
              <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-64">
        <div className="mb-40 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500">Curated Objects</span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase">Selected <br/><span className="italic font-serif">Silhouettes</span></h2>
        </div>

        {/* Cinematic List Layout */}
        <div className="space-y-40 md:space-y-64">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={product.id} className={`relative flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} group`}>
                <div className="relative w-full md:w-7/12 aspect-4/5 bg-[#1a1a1a] overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={product.name} />
                  <div className={`absolute top-8 ${isEven ? 'right-8' : 'left-8'} text-white mix-blend-difference`}>
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">0{index + 1} //</span>
                  </div>
                </div>

                <div className={`mt-8 md:absolute md:top-1/2 md:-translate-y-1/2 ${isEven ? 'md:left-[60%]' : 'md:right-[60%]'} z-20 max-w-sm bg-[#0f0f0f]/80 md:bg-transparent p-6 md:p-0 backdrop-blur-md md:backdrop-blur-none`}>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 block mb-2">{product.category}</span>
                  <h3 className="text-3xl md:text-5xl font-serif italic mb-4 leading-tight">{product.name}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6 uppercase tracking-tighter">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-8">
                    <span className="text-lg font-medium">{product.price}</span>
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-white pb-1">
                      Purchase <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Break */}
        <section className="mt-64 relative py-40 border-y border-white/10 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none">
                <span className="text-[30vw] font-black italic whitespace-nowrap -translate-x-1/4">NEXT LEVEL</span>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-12 max-w-lg leading-loose font-light px-6">
                We believe in garments that speak for themselves. No logos, no noise. Just the finest materials and perfect cuts.
            </p>
            <button className="px-12 py-4 border border-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
                The Philosophy
            </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-white py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl font-serif italic tracking-tighter">Studio Next.</h2>
            <div className="flex flex-wrap gap-8 text-[9px] uppercase tracking-widest font-bold text-gray-500">
              <span>Privacy</span><span>Shipping</span><span>Terms</span>
            </div>
          </div>
          <div className="max-w-md w-full">
            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-8">Newsletter</p>
            <div className="flex border-b border-white/20 pb-4">
              <input type="text" placeholder="EMAIL@ADDRESS.COM" className="bg-transparent w-full text-[10px] font-bold focus:outline-none" />
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-40 flex justify-between items-end opacity-20">
            <p className="text-[9px] font-bold tracking-[0.5em]">©2024 STUDIO NEXT INDUSTRIES</p>
            <div className="flex gap-4">
                <Globe className="w-4 h-4" />
                <Share2 className="w-4 h-4" />
            </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@300;400;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        body { font-family: 'Inter', sans-serif; }
      `}} />
    </div>
  );
}