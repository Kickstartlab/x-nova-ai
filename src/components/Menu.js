import React, { useState } from 'react'
import logo from '../assets/logo.png';

export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-inter h-28">
        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-20' />
        </a>

        <nav>
          <ul className="flex justify-center gap-6 text-sm pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About us</a></li>
            <li><a href="#features" className="">Features</a></li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-ai-agent-bot-and-dapp/x-nova-ai-agent-dapp" className="">Dapp</a>
            </li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-ai-agent-bot-and-dapp/x-nova-ai-custom-ai-agent-bot" className=''>AI Agent</a></li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-autonomous-ai-developments/ai-agents-evolve-and-breed" className=''>Autonomous Ai</a></li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-twitter-ai-agent-nova/engage-to-earn" className=''>Twitter Ai</a></li>
            <li><a href="#tokenomics" className=''>Tokenomics</a></li>
            <li><a href="#roadmap" className=''>Roadmap</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSduIZBkFj19dyFY0UCiP50nt_-bVaxs1fzp3yiTahe1pe3F7w/viewform?usp=dialog" className=''>Private Sale</a></li>
          </ul>
        </nav>

        <div>
          <button onClick={() => setShow(!show)} className="border-custom btn-gradient animate-border rounded-lg py-3 lg:px-6 px-4 font-semibold text-white-100">
          Ai Supervision
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6">
        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-14' />
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''} dark:bg-blue-200 bg-black-100 border border-white-50 rounded-md`}>
        <div className='p-6'>
          <ul onClick={ToggleSidebar} className='space-y-5'>
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About us</a></li>
            <li><a href="#features" className="">Features</a></li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-ai-agent-bot-and-dapp/x-nova-ai-agent-dapp" className="">Dapp</a>
            </li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-ai-agent-bot-and-dapp/x-nova-ai-custom-ai-agent-bot" className=''>AI Agent</a></li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-autonomous-ai-developments/ai-agents-evolve-and-breed" className=''>Autonomous Ai</a></li>
            <li><a href="https://nova-ai-2.gitbook.io/xnovaai/x-nova-twitter-ai-agent-nova/engage-to-earn" className=''>Twitter Ai</a></li>
            <li><a href="#tokenomics" className=''>Tokenomics</a></li>
            <li><a href="#roadmap" className=''>Roadmap</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSduIZBkFj19dyFY0UCiP50nt_-bVaxs1fzp3yiTahe1pe3F7w/viewform?usp=dialog" className=''>Private Sale</a></li>
            <li><a href="/" className=''>Ai Supervision</a></li>
          </ul>
        </div>
      </div>

    </header >
  )
}
