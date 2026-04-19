"use client";
import React, { useState } from 'react';
import { ShoppingBag, Plus, ArrowUpRight, Globe, Share2, MoveRight } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Essential Tee', price: '$55', category: 'Basics', color: 'Carbon', image: 'https://images.pexels.com/photos/1656681/pexels-photo-1656681.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Technical Jacket', price: '$210', category: 'Outerwear', color: 'Midnight', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Luxury Hoodie', price: '$140', category: 'Sweats', color: 'Onyx', image: 'https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Zip Up Hoodie', price: '$155', category: 'Sweats', color: 'Graphite', image: 'https://images.pexels.com/photos/15535546/pexels-photo-15535546/free-photo-of-stylish-man-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Double Zip Hoodie', price: '$175', category: 'Sweats', color: 'Jet Black', image: 'https://images.pexels.com/photos/1617000/pexels-photo-1617000.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Signature Sweatshirt', price: '$120', category: 'Sweats', color: 'Obsidian', image: 'https://images.pexels.com/photos/1154611/pexels-photo-1154611.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Style Pants', price: '$130', category: 'Bottoms', color: 'Coal', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'Heavy Sweatpants', price: '$110', category: 'Bottoms', color: 'Ash', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function DesignFive() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Basics', 'Sweats', 'Outerwear', 'Bottoms'];
  const filteredProducts = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    // အပြင်ဘက်ဆုံး div မှာ overflow-hidden မရှိရပါ (Sticky အလုပ်လုပ်ရန်)
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black w-full">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-450 mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-black italic tracking-tighter uppercase">NEXT.S</h1>
          <div className="flex items-center gap-6">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[10px] font-bold">CART (0)</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - စာသားတွေ ကျွံထွက်တတ်လို့ ဒီမှာပဲ overflow-hidden ထည့်ပါမယ် */}
      <section className="relative min-h-screen bg-black flex flex-col items-center justify-center pt-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none opacity-10 z-0">
          <h2 className="text-[18vw] font-black leading-none tracking-tighter italic uppercase">Collection</h2>
        </div>
        
        <div className="relative z-10 w-full px-6 flex flex-col justify-end min-h-[70vh] pb-20">
          <div className="max-w-4xl">
            <p className="text-[9px] uppercase tracking-[0.4em] mb-4 text-gray-500 text-left">Fall 2024 Release</p>
            <h2 className="text-4xl sm:text-7xl md:text-[120px] font-bold leading-[0.9] tracking-tighter uppercase mb-10 text-left wrap-break-word">
              Technical <br /> Wearables
            </h2>
            <button className="bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all flex items-center gap-3 w-fit">
              Browse All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      {/* top-16 သည် Navbar ရဲ့ အမြင့် h-16 နဲ့ ကိုက်ညီရပါမယ် */}
      <div className="sticky top-16 z-40 bg-black py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 px-6">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter w-full md:w-auto text-left">THE ARCHIVE</h3>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
              {categories.map(cat => (
              <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 border rounded-full transition-all shrink-0 ${
                  filter === cat ? 'bg-white text-black border-white' : 'text-gray-500 border-white/10 hover:border-white/40'
                  }`}
              >
                  {cat}
              </button>
              ))}
          </div>
      </div>

      {/* PRODUCTS GRID */}
      <main className="px-6 py-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative border border-white/5 bg-[#0a0a0a] p-4">
              <div className="relative aspect-4/5 overflow-hidden bg-[#111] mb-6">
                <img src={product.image} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700" alt={product.name} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Plus className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold uppercase tracking-tighter text-white">{product.name}</h3>
                <span className="text-[10px] text-gray-500 font-mono italic">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* INDUSTRIAL SECTION */}
        <section className="mt-20 flex flex-col md:grid md:grid-cols-2 border border-white/10 bg-[#050505] overflow-hidden w-full">
            <div className="p-8 md:p-20 border-b md:border-b-0 md:border-r border-white/10">
                <h4 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-tight mb-8">
                    Uncompromising <br/> Quality.
                </h4>
                <p className="text-gray-500 uppercase tracking-tighter text-[10px] max-w-xs mb-8 text-left">Tested for durability in urban environments.</p>
                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                    Process <MoveRight className="w-4 h-4" />
                </button>
            </div>
            <div className="relative aspect-square md:aspect-auto overflow-hidden flex items-center justify-center">
                <div className="opacity-10">
                    <span className="text-white text-[30vw] font-black italic select-none">NEXT</span>
                </div>
            </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/10 overflow-hidden">
        <h2 className="text-[12vw] font-black italic tracking-tighter leading-none uppercase mb-10 text-left">NEXT.S</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-700">
          <p>© 2024 NEXT.S STUDIO</p>
          <div className="flex gap-6">
            <Globe className="w-4 h-4" />
            <Share2 className="w-4 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}