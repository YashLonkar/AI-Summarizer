import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full items-center flex flex-col'>
      <nav className='flex justify-between w-full mb-10 pt-3'>
        <div className="font-bold text-3xl">SUMMARIZER</div>
        <div className="ml-auto">
        <button
          type='button'
          onClick={() =>
            window.open("https://www.linkedin.com/in/yashlonkar55/", "_blank")
          }
          className='black_btn mr-2'
        >
          LinkedIn
        </button>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/YashLonkar55/", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
        </div>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
