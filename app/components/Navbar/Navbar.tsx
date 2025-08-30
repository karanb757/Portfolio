"use client";
import ThemeToggleButton from '@/components/ui/theme-toggle-button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ScheduleButton from './Cal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 px-6 py-3 pr-12 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
         <div className="flex justify-between items-center">
        <ScheduleButton />

          <div className='backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex gap-4 '>
            <Link className='text-sm text-white' href="/">Home</Link>
            <Link className='text-sm text-white' href="/showcase">showcase</Link>
            <Link className='text-sm text-white' href="/projects">projects</Link>
          </div>
          <div className='backdrop-blur-sm bg-white/5 border border-white/10 px-4 py-2 pb-4 rounded-full transition-colors hover:bg-white/10 flex items-center gap-2'>
          <ThemeToggleButton variant='gif' url='https://media.giphy.com/media/v1.Y2lkPTgyYTE0OTNiZTN6OXhqemZzMGI2MjdzYWVodjZ4b2tuNm85eGV5Y3FkMGh3eXc1byZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/qHbIOCU929bQ3QlcVU/giphy.gif'/>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
