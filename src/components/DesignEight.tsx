"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  { id: 1, title: "SHADOW PLAY", year: "2025", cat: "EDITORIAL", img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, title: "NEO MINT", year: "2024", cat: "CAMPAIGN", img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, title: "URBAN SILENCE", year: "2025", cat: "LOOKBOOK", img: "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, title: "RAW TEXTURE", year: "2024", cat: "STUDIO", img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, title: "KINETIC", year: "2025", cat: "MOTION", img: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 6, title: "MINIMALIST", year: "2025", cat: "EDITORIAL", img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 7, title: "VOID", year: "2024", cat: "CAMPAIGN", img: "https://images.pexels.com/photos/2739485/pexels-photo-2739485.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 8, title: "MONO LOGUE", year: "2025", cat: "LOOKBOOK", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

export default function DesignEight() {
  return (
    <div className="min-h-screen bg-[#e5e5e1] text-zinc-900 p-4 md:p-8 font-mono overflow-x-hidden">
      <div className="border-[3px] border-zinc-900 p-6 md:p-12 min-h-screen flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-start mb-20 border-b-[3px] border-zinc-900 pb-8 gap-6">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">AURA_S</h1>
          <div className="uppercase text-[10px] md:text-xs font-black leading-tight tracking-widest">
             CREATIVE DIRECTION / 2025<br/>DIGITAL EXPERIENCE<br/>BASE_TOKYO_NY
          </div>
        </header>

        {/* FEATURED WORK */}
        <div className="mb-32">
          <div className="aspect-21/9 bg-zinc-900 mb-10 relative overflow-hidden group">
            <img src={PROJECTS[0].img} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Hero" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-white text-[15vw] font-black italic opacity-20">FEATURED</h2>
            </div>
          </div>
          <div className="flex justify-between items-end border-b-2 border-zinc-900 pb-4">
            <h3 className="text-4xl font-black italic tracking-tight uppercase">Editorial Selection</h3>
            <span className="text-xs font-bold">[ 08 WORKS ]</span>
          </div>
        </div>

        {/* WORK GRID (8 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {PROJECTS.map(project => (
            <div key={project.id} className="border-2 border-zinc-900 p-4 group cursor-pointer hover:bg-zinc-900 hover:text-white transition-all">
              <div className="aspect-3/4 overflow-hidden mb-6 border border-zinc-900/10">
                <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={project.title} />
              </div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-sm font-black italic underline">{project.title}</h4>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between text-[9px] font-black opacity-60">
                <span>{project.cat}</span>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-32 pt-10 border-t-[3px] border-zinc-900 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
           <div>© 2025 AURA_COLLECTIVE</div>
           <div className="flex gap-10"><span>ARCHIVE</span><span>CONTACT</span></div>
        </footer>
      </div>
    </div>
  );
}