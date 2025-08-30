"use client";
import React from "react";
import { useState, useEffect } from "react";
import FlipLink from "../../components/ui/text-effect-flipper"
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image';

const Projects = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="h-screen">
      <Navbar />

      <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-12 p-10 ">

        <div className="row-span-4 card h-[698px] rounded-3xl w-full cursor-pointer focus:z-[99px] flex flex-col gap-20 bg-[#161616] text-white">
          <Image src="/card1.webp" alt="photo b/w" width={500} height={500} />
          <div className="text-xs text-center">
            <p className="text-center pt-8 text-[#494949] ">
            Development is where curiosity meets execution. For me it&apos;s a journey of constant learning and innovation. Every challenge in every project is an opportunity to build smarter solutions and create applications that truly make an impact.
            </p>
        </div>
        </div>

        <div className="col-start-1 row-start-5 bg-[#161616] text-[#D9D9D9] card flex h-[157px] w-full border-1 border-[#262626] cursor-pointer flex-col justify-between py-6 focus:z-[99px] p-3 gap-6 rounded-3xl">
          <h2 className="text-6xl font-extrabold">k757</h2>
          <p className="text-xs text-[#494949]">Within the realm of designers, I&apos;m recognised by the alias</p>
        </div>

        <div className="col-span-3 row-span-2 col-start-2 row-start-1 bg-[#161616] text-[#D9D9D9] border-1 border-[#262626]  rounded-3xl p-8 flex flex-col justify-between">
          <h2 className="text-6xl font-medium">
            Im Karan <br />
            <span className="text-7xl font-extrabold"> Bodkhe </span>
          </h2>
          <p className="text-[#494949] text-sm/4 ">
          My journey in the world of web development stems from a deep fascination with the digital realm. From my early days of curiosity to my current expertise, I have honed the craft of turning ideas into engaging, functional, and user-friendly web experiences. 
          I specialize in building seamless and visually appealing web applications that balance design with performance. 
          So let&apos;s create something impactful and innovative together.
          </p>
        </div>

        <div className="col-span-2 row-span-2 col-start-2 row-start-3 border-8 text-[#D9D9D9] border-[#604BB5] bg-[#4D389A] rounded-3xl p-9 pl-10 flex flex-col gap-8">
          <div className="flex justify-between">
            <h2 className="font-bold text-5xl"><FlipLink href='/'>SKILLS</FlipLink></h2>
            <img src="/star.svg" alt="star" className="h-18 w-15"></img>
          </div>
          <div>
            <ul className="font-medium text-sm">
              <li>FULL STACK DEVELOPER</li>
              <li>REACT.JS </li>
              <li>NEXT.JS</li>
              <li>TAILWIND CSS</li>
              <li>REDUX TOOLKIT</li>
              <li>NODE.JS EXPRESS.JS</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>

        <div className="row-span-2 col-start-4 row-start-3  bg-[#161616] border-1 border-[#262626] text-[#D9D9D9] rounded-3xl flex items-center justify-center">
          <span className="text-6xl font-black pb-3 pr-1">
            <FlipLink href='#'>
              {dateTime.toLocaleTimeString()}
            </FlipLink>
          </span>
        </div>

        <div className="col-span-3 col-start-2 row-start-5 p-3 text-[#D9D9D9] bg-[#161616] border-1 border-[#262626] flex flex-col items-center gap-2 rounded-3xl justify-center">  
            <h1 className="text-5xl font-bold">STACK</h1>
            <div className="flex h-14 w-190 justify-center gap-2">
            <Image src='/STACK/image.png' alt="VSCode" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/notion.png" alt="Notion" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/STACK/github.png" alt="Github" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/Mongodb.png" alt="MongoDB" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/Postman.png" alt="Postman" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/Framer.png" alt="Framer" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/figma.webp" alt="Figma" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/STACK/photoshop.png" alt="photoshop" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/STACK/sass.png" alt="sass" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
            <Image src="/STACK/database.png" alt="Database" width={52} height={52} className="transition-transform duration-300 hover:scale-125"/>
          </div>

        </div>

        <div className="row-span-4 col-start-5 row-start-1 text-[#D9D9D9] border-1 border-[#262626] bg-[#161616] rounded-3xl">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-44">
            <div>
              <h2 className="m-0 font-spaceGrotesk text-[50px] font-bold leading-10 ">
                LIN <br />
                KS
              </h2>
            </div>
            <div><a href="https://www.linkedin.com/in/karan-bodkhe-57824524a/" target="_blank" rel="noopener noreferrer"><img src="/linkdin.svg" alt="linkedin"/></a></div>
            <div><a href="https://www.behance.net/karanbodkhe2" target="_blank" rel="noopener noreferrer"><img src="/behance.svg" alt="behance"/></a></div>
            <div><a href="https://github.com/karanb757" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="github"/></a></div>
            <div><a href="https://dribbble.com/karan-bodkhe" target="_blank" rel="noopener noreferrer"><img src="/dribble.svg" alt="dribble"/></a></div>
            <div><a href="https://www.instagram.com/_karan797/" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="instagram"/></a></div>
          </div>

          <div className=" h-[520px] p-3 mt-2 rounded-3xl text-white border-[#262626] flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-6xl font-bold">
                <FlipLink href='#'>RECENT</FlipLink>
              </h1>
              <h1 className="text-6xl font-bold">
              <FlipLink href='#'>WORKS</FlipLink>
              </h1>
            </div>

            <div className="flex flex-col gap-3 pt-10">
              
              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#D9D9D9]">AI-LMS</span>
                    <span className="text-xs text-[#8A8A8A]">AUG-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="https://ai-lms-v3.vercel.app/">ai-lms.vercel.app</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#D9D9D9]">Skiper-UI</span>
                    <span className="text-xs text-[#8A8A8A]">JULY-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="#">skiper-UI.vercel.app</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#D9D9D9]">Portfolio</span>
                    <span className="text-xs text-[#8A8A8A]">JAN-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="#">kabir757.vercel.app</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between text-[#D9D9D9]">
                    <span className="text-lg font-bold">FindMyPG</span>
                    <span className="text-xs text-[#8A8A8A]">JAN-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="#">FindMyPG.vercel.app</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="col-start-5 row-start-5 border-1 border-[#262626] text-[#D9D9D9] rounded-3xl ">
          <div className="p-2 pt-4 pl-4">
            <FlipLink href="/">LETS</FlipLink>
            <FlipLink href="/">GO</FlipLink>
            <FlipLink href="/">BACK</FlipLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
