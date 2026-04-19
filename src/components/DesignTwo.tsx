"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronRight, ArrowRight, Globe, Share2, MessageSquare } from 'lucide-react';

export default function DesignTwo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Classic Silk Slip Dress",
      price: "$240",
      category: "Evening",
      tag: "Best Seller",
      image1: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
      image2: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800"
    },
    {
  id: 2,
  name: "Structured Wool Coat",
  price: "$480",
  category: "Outerwear",
  tag: "New",
  image1: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
  image2: "https://images.pexels.com/photos/8422292/pexels-photo-8422292.jpeg?auto=compress&cs=tinysrgb&w=800"
},
    {
      id: 3,
      name: "Linen Tailored Trousers",
      price: "$180",
      category: "Casual",
      tag: "Eco-friendly",
      image1: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
      image2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Cashmere Knit Sweater",
      price: "$320",
      category: "Essentials",
      tag: "Luxury",
      image1: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
      image2: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      
      <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'}`}>
        <div className="flex items-center space-x-8">
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden">
            <Menu size={24} />
          </button>
          <div className="hidden lg:flex space-x-6 text-sm uppercase tracking-widest font-medium text-inherit">
            <a href="#" className="hover:opacity-50 transition-opacity">New In</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Collections</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Editorial</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-serif tracking-tighter font-bold uppercase">L'AVENUE</h1>
        </div>

        <div className="flex items-center space-x-5">
          <Search size={20} className="hidden sm:block cursor-pointer hover:opacity-50 transition-opacity" />
          <div className="relative cursor-pointer group" onClick={() => setCartCount(prev => prev + 1)}>
            <ShoppingBag size={20} className="group-hover:opacity-50 transition-opacity" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#1A1A1A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>

      <section className="relative h-screen w-full overflow-hidden bg-gray-200">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale-30"
        >
          <source src="https://player.vimeo.com/external/494270251.hd.mp4?s=340176d6ec555776d3381e4b9983446904662d54&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">Spring / Summer 2024</p>
          <h2 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">The Silent Walk</h2>
          <button className="px-10 py-4 bg-white text-[#1A1A1A] uppercase tracking-widest text-xs font-bold hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
            Explore Collection
          </button>
        </div>
      </section>

      <div className="bg-[#1A1A1A] text-white py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee uppercase tracking-[0.2em] text-[10px] md:text-xs">
          New Arrivals Just Landed • Free Global Shipping on orders over $500 • Sustainable Craftsmanship • New Arrivals Just Landed • Free Global Shipping on orders over $500 • Sustainable Craftsmanship •
        </div>
      </div>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="uppercase tracking-widest text-xs text-gray-500 block mb-2">Curated Selection</span>
            <h3 className="text-4xl md:text-5xl font-serif">Seasonal Essentials</h3>
          </div>
          <a href="#" className="flex items-center space-x-2 border-b border-[#1A1A1A] pb-1 text-sm font-medium">
            <span>View All Products</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100 rounded-sm mb-4">
                <img src={product.image1} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <img src={product.image2} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute top-4 left-4"><span className="bg-white/90 backdrop-blur px-2 py-1 text-[10px] uppercase font-bold tracking-widest">{product.tag}</span></div>
                <button className="absolute bottom-0 left-0 right-0 bg-white/95 text-[#1A1A1A] py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-xs uppercase font-bold tracking-widest">Quick Add +</button>
              </div>
              <div className="flex justify-between items-start">
                <div><h4 className="text-sm font-medium mb-1 group-hover:underline">{product.name}</h4><p className="text-xs text-gray-400 uppercase">{product.category}</p></div>
                <span className="text-sm">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-16 px-6 text-center">
        <h1 className="text-xl font-serif font-bold uppercase mb-6 tracking-tighter">L'AVENUE</h1>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">© 2024 L'AVENUE ARCHIVE. ALL RIGHTS RESERVED.</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; animation: marquee 20s linear infinite; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />
    </div>
  );
}