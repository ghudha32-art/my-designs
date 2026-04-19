"use client";
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, Leaf, ArrowRight, Heart, Globe, Wind } from 'lucide-react';

export default function DesignOne() {
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('All');

  const products = [
    {
      id: 1,
    name: "Raw Organic Cotton Robe",
    price: "$185",
    material: "100% Organic Cotton",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
  },
    {
      id: 2,
      name: "Hemp Blend Lounge Set",
      price: "$210",
      material: "Hemp & Silk",
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Recycled Wool Cardigan",
      price: "$245",
      material: "Upcycled Merino",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Natural Dye Tunic",
      price: "$130",
      material: "Botanical Dyes",
      image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EE] text-[#4A443F] font-light selection:bg-[#D4CEC5] selection:text-[#4A443F]">
      <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-multiply">
        <button className="p-2 hover:rotate-90 transition-transform duration-500">
          <Menu size={20} strokeWidth={1.5} />
        </button>
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase font-medium">Terra</h1>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">Studio</span>
        </div>
        <div className="flex items-center space-x-6">
          <Search size={20} strokeWidth={1.5} className="hidden sm:block cursor-pointer" />
          <div className="relative cursor-pointer group" onClick={() => setCartCount(c => c + 1)}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[9px] w-3 h-3 flex items-center justify-center">({cartCount})</span>
            )}
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 z-10">
          <div className="flex items-center space-x-2 text-[#8C8476] mb-6">
            <Leaf size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Ethically Sourced</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">Woven by <br /><span className="italic">Nature</span></h2>
          <p className="text-lg leading-relaxed mb-10 opacity-80 max-w-sm">Sustainable garments designed to breathe with you and return to the earth.</p>
          <button className="group flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border border-[#4A443F] flex items-center justify-center group-hover:bg-[#4A443F] group-hover:text-white transition-all duration-300">
              <ArrowRight size={20} strokeWidth={1} />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Explore Materials</span>
          </button>
        </div>
        <div className="lg:col-span-7 relative">
  <div className="aspect-4/5 bg-[#EBE7E0] overflow-hidden rounded-t-[200px] rounded-b-lg shadow-inner">
    <img 
      src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200" 
      className="w-full h-full object-cover mix-blend-multiply opacity-95"
      alt="Woven by Nature"
    />
  </div>
        </div>
      </section>

      <section className="bg-[#EBE7E0] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center space-y-4"><Wind size={24} strokeWidth={1} /><h4 className="font-serif text-xl">Breathable Design</h4></div>
          <div className="flex flex-col items-center text-center space-y-4"><Globe size={24} strokeWidth={1} /><h4 className="font-serif text-xl">Earth First</h4></div>
          <div className="flex flex-col items-center text-center space-y-4"><Heart size={24} strokeWidth={1} /><h4 className="font-serif text-xl">Fair Craft</h4></div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-24">
          {products.map((p, idx) => (
            <div key={p.id} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="aspect-3/4 overflow-hidden bg-[#EBE7E0] mb-8 relative">
                <img src={p.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={p.name} />
              </div>
              <div className="flex justify-between items-end border-b border-[#4A443F]/10 pb-4">
                <div><h4 className="text-xl font-serif mb-1">{p.name}</h4><p className="text-[10px] uppercase tracking-widest text-[#8C8476]">{p.material}</p></div>
                <span className="text-lg">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-32 px-6 border-t border-[#4A443F]/5 text-center">
        <h2 className="text-4xl font-serif mb-8">Terra</h2>
        <p className="text-xs tracking-widest opacity-60">© 2024 TERRA STUDIO - SUSTAINABLE CRAFT</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        body { font-family: 'Montserrat', sans-serif; }
      `}} />
    </div>
  );
}