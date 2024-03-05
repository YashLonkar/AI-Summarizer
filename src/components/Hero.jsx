import React from "react";
import {logo } from '../assets';
const Hero =() => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center flex-row w-full mn-10 pt-3">
                <img src={logo} alt="sumz-logo" className="w-28 object-contain"></img>
                <div>
                <button type="button" onClick={() => window.open('github.com')} className="black_btn mr-1.5">
                    GitHub
                </button>
                <button type="button" onClick={() => window.open('github.com')} className="black_btn">
                    LinkedIn
                </button>
                </div>
                
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden"/>
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>

            <h2 className="desc">
            Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    );
}

export default Hero