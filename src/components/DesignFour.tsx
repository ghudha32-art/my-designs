"use client";
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, ArrowRight, Globe, Share2 } from 'lucide-react';

const PRODUCTS = [
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
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Basics', 'Sweats', 'Outerwear', 'Bottoms'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold tracking-tighter uppercase">Studio.Next</h1>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-black transition-colors">Shop All</a>
              <a href="#" className="hover:text-black transition-colors">Collections</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <Menu className="w-6 h-6 md:hidden" />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-20 h-[80vh] flex items-center justify-center bg-[#f4f4f4] overflow-hidden">
  {/* --- နောက်ခံပုံ (Background Image) --- */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      className="w-full h-full object-cover grayscale opacity-30" // grayscale နဲ့ opacity ကို လိုသလို လျှော့နိုင်ပါတယ်
      alt="Hero Background"
    />
  </div>

  {/* --- စာသားနဲ့ ခလုတ် (Content) --- */}
  <div className="text-center px-6 relative z-10">
    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-4 block">Collection 01 / 2024</span>
    <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 leading-none text-black">
      Elevated <br /> <span className="italic font-serif">Simplicity</span>
    </h2>
    <button className="bg-black text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:scale-105 transition-all flex items-center gap-2 mx-auto">
      SHOP NOW <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-3xl font-light tracking-tight uppercase">The Essentials</h2>
          <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`text-[10px] uppercase tracking-[0.2em] px-2 py-1 ${filter === cat ? 'text-black font-bold' : 'text-gray-400'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
  {/* IMAGE CONTAINER */}
  <div className="relative aspect-3/4 bg-[#f9f9f9] overflow-hidden rounded-sm mb-4">
    {/* Product Image */}
    <img 
      src={product.image} 
      alt={product.name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    
    {/* Quick Add Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 text-black text-[10px] font-bold py-3 uppercase tracking-widest text-center">
      Quick Add +
    </div>
  </div>

  {/* TEXT INFO */}
  <div className="flex justify-between items-start">
    <div>
      <h3 className="text-xs font-bold text-gray-900 uppercase">{product.name}</h3>
      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{product.category}</p>
    </div>
    <p className="text-xs font-medium text-gray-600">{product.price}</p>
  </div>
</div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h2 className="text-xl font-bold tracking-tighter mb-6">STUDIO.NEXT</h2>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">Essential garments focused on quality and timeless silhouettes.</p>
          </div>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer" />
            <Share2 className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Inter:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        body { font-family: 'Inter', sans-serif; }
      `}} />
    </div>
  );
}