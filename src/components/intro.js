import React from 'react';

export default function Intro() {
  return (
    <section>
        <div className="flex flex-row divide-x-0 h-50 p-5">
        <div>
          <button className='hover:scale-125 transition-all duration-500 h-10 w-30 float-start'>
            <img src= {window.location.origin +'/logo.png'} alt='logo' className='h-full'/>
          </button>
        </div>
        <div className="flex-auto lg:basis-2/5"></div>
        
        <button className="flex-auto font-bold hover:scale-125 transition-all duration-500 buttonPadding">Education</button>
        <button className="flex-auto font-bold hover:scale-125 transition-all duration-500 buttonPadding">Technologies</button>
        <button className="flex-auto font-bold hover:scale-125 transition-all duration-500 buttonPadding">Work Experience</button>
        <button className="flex-auto font-bold hover:scale-125 transition-all duration-500 buttonPadding">Projects</button>
        <button className="flex-auto font-bold hover:scale-125 transition-all duration-500 buttonPadding">Hobbies</button>
        <button className="flex-auto font-bold hover:scale-125 transition-all duration-500 buttonPadding">Contact</button>      
      </div>
      <div className="flex justify-center">
        <div className="text-center mainGrid">
          <p className ="header font-bold">I'm Sai Divya Mulukala</p>
          <p className='text-lg'>A passionate computer science master's student and software developer, blending creativity and technology to build innovative solutions.</p>
        </div>
      </div>
    </section>
  );
}