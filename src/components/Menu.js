import React, { useState } from 'react'
import logo from '../assets/logo.png';
import platform1 from '../assets/platform1.png';
import platform2 from '../assets/platform2.png';
import platform3 from '../assets/platform3.png';
import platform4 from '../assets/platform4.png';

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
          <img src={logo} alt="Logo" className='w-20'/>
        </a>

        <nav>
          <ul className="flex justify-center gap-6 pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About us</a></li>
            <li><a href="#tokenomics" className="">Features</a></li>
            <li><a href="#features" className="">Dapp</a></li>
            <li><a href="#community" className=''>AI Agent</a></li>
            <li><a href="#community" className=''>Autonomous Ai</a></li>
            <li><a href="#community" className=''>Roadmap</a></li>
            <li><a href="#community" className=''>Tokenomics</a></li>
          </ul>
        </nav>

        <div>
          <button onClick={() => setShow(!show)} className="border-custom rounded-lg py-3 lg:px-6 px-4 font-semibold text-white-100">
            Connect Wallet
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6 font-montserat">
        <a href="/" className="">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className='p-5'>
          <div className="flex items-center justify-between" onClick={ToggleSidebar}>

            <a href="/" className="mt-4">
              <img src={logo} alt="Logo" className='' />
            </a>
            <i className="fa fa-times text-2xl"></i>
          </div>

          <div className="sd-body mt-10">
            <ul>
              <a onClick={ToggleSidebar} href="/"><li className='p-3'>Home</li></a>
              <a onClick={ToggleSidebar} href="#about"><li className='p-3'>About</li></a>
              <a onClick={ToggleSidebar} href="#tokenomics"><li className='p-3'>Tokenomics</li></a>
              <a onClick={ToggleSidebar} href="#features"><li className='p-3'>Features</li></a>
              <a onClick={ToggleSidebar} href="#community"><li className='p-3'>Community</li></a>

              <div>
                <button onClick={() => setShow(!show)} className="bg-gradient rounded-lg p-3 text-white-100 text-xs text-left">
                  Join the world of advantages
                </button>
              </div>
            </ul>
          </div>

        </div>
      </div>


      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>



    </header >
  )
}
