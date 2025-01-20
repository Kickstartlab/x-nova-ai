import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Difference from './Difference'

import bottom from '../assets/bottom.png';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import build from '../assets/build.png';
import read from '../assets/read.png';
import feature_1 from '../assets/feature_1.gif';
import feature_2 from '../assets/feature_2.gif';
import feature_3 from '../assets/feature_3.gif';
import feature_4 from '../assets/feature_4.gif';
import token from '../assets/token.png';
import wallet from '../assets/wallet.png';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import video from '../assets/video.png';
import bar1 from '../assets/bar1.png';
import bar2 from '../assets/bar2.png';
import bar3 from '../assets/bar3.png';
import side from '../assets/side.png';
import side1 from '../assets/side1.png';
import ricon1 from '../assets/ricon1.png';
import ricon2 from '../assets/ricon2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, [])

    return (
        <div className="bg-black-100 font-inter overflow-hidden text-white-100">

            <section className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-6 lg:py-28 py-12 text-center lg:w-9/12 mx-auto">
                        <h1 data-aos='fade-up' className='lg:text-[11rem] md:text-6xl text-3xl font-bricolage font-bold text-gradient tracking-wider'>
                            X-Nova AI
                        </h1>

                        <p className='font-bricolage md:text-4xl text-xl md:leading-snug'>
                            The First Platform Pioneering Autonomous AI Advancements
                            and AI Agents  On The Ethereum Blockchain
                        </p>
                        <p>
                            CA:
                        </p>

                        <div data-aos='zoom-in' className="flex items-center justify-center md:gap-8 gap-6 mx-auto mt-5 font-bricolage">
                            <a href="/">
                                <button className="text-white-100 rounded-xl py-3 md:text-lg text-xs md:px-6 px-4 border-custom">
                                    Get Started
                                </button>
                            </a>

                            <a href="/">
                                <button className="text-white-100 rounded-xl py-3 md:text-lg text-xs md:px-6 px-4 border-custom">
                                    Whitepaper
                                </button>
                            </a>
                        </div>

                        <div className=''>
                            <img src={bottom} alt='x-nova-ai' className='left-0 right-0 w-full mt-6'></img>
                        </div>
                    </div>
                </div>
            </section>

            {/* who we are section */}

            <section id='about' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10 font-bricolage">
                <div className='container mx-auto'>

                    <div className='flex flex-col gap-y-5 items-center mx-auto justify-center w-11/12 bg-black-50 md:p-16 p-6 border-2 rounded-xl text-center'>
                        <p className='font-[500]'>WHO WE ARE</p>

                        <p className='md:text-2xl'>
                            Welcome to X-Nova AI, the first platform pioneering autonomous AI advancements and AI Agents  on the Ethereum blockchain. At the forefront of innovation, we seamlessly merge cutting-edge AI technology with blockchain infrastructure, delivering transformative solutions and unparalleled rewards for our community.
                        </p>

                        <div className='flex flex-wrap items-start mx-auto text-left'>


                            <div className='md:w-1/2 flex items-start gap-3 md:text-xl md:mt-12 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p>Empower Yourself with AI Agents</p>
                            </div>

                            <div className='md:w-1/2 flex gap-3 md:text-xl md:mt-12 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <p>Pioneering Autonomous AI Evolution on the Ethereum Blockchain</p>
                            </div>

                            <div className='md:w-1/2 flex md:text-xl gap-3 md:mt-16 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p>Earn Rewards for Engagement</p>
                            </div>

                            <div className='md:w-1/2 flex md:text-xl gap-3 md:mt-16 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p>Redefining Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose Us? section */}

            <section id='choose' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10 font-bricolage">
                <div className='container mx-auto'>

                    <div className='text-center space-y-6'>
                        <p className='md:text-xl'>Why choose Us?</p>

                        <p className='md:text-6xl text-3xl font-bold tracking-wide'>
                            X-Nova Ai Use Cases
                        </p>
                    </div>

                    <div className='flex flex-wrap items-start justify-between mx-auto md:mt-16 mt-8'>

                        <div className='md:w-5/12'>
                            <p className='md:text-2xl text-lg'>X-Nova Ai Engage-to-Earn dApp</p>

                            <p className='md:my-8 my-6'>
                                The X-Nova AI Engage-to-Earn dApp is designed to reward user engagement while promoting project visibility
                            </p>

                            <div className='flex items-center gap-3'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Community Growth & Promotion</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Increasing Awareness in the Crypto Community</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Driving User Adoption</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Building an Influencer Ecosystem</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Driving Token Utility</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Data Insights for the Project</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Supporting Grassroots Marketing</p>
                            </div>
                        </div>

                        <div className='md:w-5/12'>
                            <p className='md:text-2xl text-lg'>
                                X-Nova Ai Custom Ai Agent Bot
                                & dApp
                            </p>

                            <p className='md:my-8 my-6'>
                                AI Agent Telegram Bots can serve various roles, making them highly versatile for individuals, communities, and businesses
                            </p>

                            <div className='flex items-center gap-3'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Community Management</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Customer Support & Service</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Learning & Education</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Marketing & Promotions</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Financial Assistance</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Productivity Tools</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Entertainment & Fun</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>News & Updates</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p>Social Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features section */}

            <section id='features' className="lg:px-20 px-5 lg:pb-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className='flex flex-wrap items-center justify-between mx-auto md:mt-20 mt-8 lg:space-y-0 space-y-12'>

                        <div className="lg:w-6/12 w-full img-item">
                            <img src={feature1} alt="" className='max-w-[450px] w-full' />
                        </div>

                        <div className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                Custom AI Agent Bot 🤖
                            </h2>

                            <p className="py-8  ">
                                Build and deploy smart Ai agents directly within telegram to automate tasks, boost efficency and elevate productivity like never before.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Lets Build
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-wrap flex-row-reverse items-center justify-between mx-auto md:mt-20 mt-12 lg:space-y-0 space-y-12'>
                        <div className="lg:w-5/12 w-full img-item">
                            <img src={feature2} alt="" className='max-w-[450px] w-full' />
                        </div>

                        <div className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                Custom AI Agen dApp  🖥
                            </h2>

                            <p className="py-8">
                                create and personalize your very own AI solutions through our decentralized application. Accessible, user-friendly and tailored for everyone from beginners to blockchain pros.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Take Me There
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center justify-between mx-auto md:mt-20 mt-12 lg:space-y-0 space-y-12'>

                        <div className="lg:w-5/12 w-full img-item">
                            <img src={feature3} alt="" className='max-w-[450px] w-full' />
                        </div>

                        <div className="text-white-100 lg:w-6/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                Twitter AI Agent ( Engage to Earn )
                            </h2>

                            <p className="py-8">
                                Redefine social engagement with ENgage-to-Earn rewards on X.com (Twitter). Contribute to X-Nova AI's growth by interacting and promoting and get reward for it.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-52 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Twitter Ai Agent
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-wrap flex-row-reverse items-center justify-between mx-auto md:mt-20 mt-12 lg:space-y-0 space-y-12'>
                        <div className="lg:w-5/12 w-full img-item">
                            <img src={feature4} alt="" className='max-w-[450px] w-full' />
                        </div>

                        <div className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                AI Agents Evolve & Breed
                            </h2>

                            <p className="py-8">
                                Welcome th the next frontier of AI evolution! Experience autonomous AI agents that evolove, adapt and even breed within a decentralized ecosystem. Witness innovation like never before.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-52 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Take Me There
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* X-Nova AI: Unleashing */}

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto relative z-10">

                <div className='flex flex-wrap lg:space-y-0 space-y-8'>
                    <div className='md:w-4/12 rounded-[32px] bg-gradient-to-b from-purple-100 to-white-100 bg-opacity-30 p-8 mx-4'>
                        <p className='md:text-3xl text-xl font-semibold'>
                            
                        </p>
                    </div>

                    <div className='md:w-4/12 rounded-[32px] bg-gradient-to-b from-pink-100 to-purple-100 bg-opacity-30 p-8 mx-4'>

                    </div>
                </div>

            </div>


            <img src={side} alt='' className='absolute left-0 -mt-24'></img>

            {/* our token */}

            <div id='tokenomics' className="lg:px-20 px-5 font-urbanist lg:py-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className='lg:flex items-center justify-between gap-x-12'>

                        <div data-aos="fade-right" className='lg:w-1/2'>
                            <div className='space-y-3'>
                                <p className='text-lg font-semibold flex items-center gap-x-2'>
                                    <span>
                                        <svg width="62" height="4" viewBox="0 0 62 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="2.06888" x2="61.9862" y2="2.06888" stroke="white" strokeWidth="2.21379" />
                                        </svg>
                                    </span>
                                    Our Token
                                </p>

                                <h3 className='md:text-5xl text-3xl font-semibold text-white-100'>
                                    What is SolveX Token?
                                </h3>
                            </div>

                            <p className='lg:leading-snug mt-8'>
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </p>
                        </div>

                        <div data-aos="fade-up" className='lg:w-1/2'>
                            <img src={token} alt='token' className=''></img>
                        </div>
                    </div>

                    <div className='flex flex-col mx-auto w-11/12 bg-blue-100 rounded-2xl lg:p-12 p-5 text-center lg:-mt-24'>
                        <div data-aos="zoom-in" className="flex justify-center items-center lg:gap-44 gap-5  mx-auto">
                            <div className='space-y-2'>
                                <p className='md:text-xl text-sm'>
                                    Total Supply
                                </p>
                                <p className='md:text-4xl text-xl font-semibold font-libre'>
                                    12M
                                </p>
                            </div>

                            <div className='space-y-2'>
                                <p className='md:text-xl text-sm'>
                                    Locked
                                </p>
                                <p className='md:text-4xl text-xl font-semibold font-libre'>
                                    6M
                                </p>
                            </div>

                            <div className='space-y-2'>
                                <p className='md:text-xl text-sm'>
                                    Circulating
                                </p>
                                <p className='md:text-4xl text-xl font-semibold font-libre'>
                                    3M+
                                </p>
                            </div>
                        </div>

                        <p data-aos="fade-up" className='md:mt-16 mt-8'>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,<br></br> dictum est a, mattis tellus
                        </p>
                    </div>


                </div>
            </div>

            <img src={side1} alt='' className='absolute right-0 -mt-44'></img>

            {/* What Makes us Different? section */}

            <div id="difference" className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto relative z-10"
            >
                <h3 data-aos='fade-right' className='md:text-5xl text-2xl font-libre font-semibold text-white-100'>
                    What Makes us Different?
                </h3>

                <div className='md:pt-20 py-8'>
                    <Difference />
                </div>


                <div className='lg:flex justify-between items-center lg:pt-20 py-12 lg:space-y-0 space-y-8'>

                    <div className='lg:w-1/3'>
                        <h3 data-aos='fade-right' className='md:text-5xl text-3xl lg:text-left text-center font-libre font-extrabold text-blue-100 lg:leading-relaxed lg:pb-0 pb-6'>
                            TOKEN
                            DISTRIBUTION
                        </h3>
                    </div>

                    <div className='flex items-center justify-center md:gap-16 gap-6'>

                        <div>
                            <img src={bar1} alt='' className=''></img>
                            <h4 data-aos='fade-up' className='md:text-3xl text-xl font-urbanist pt-3 font-semibold text-white-100 text-center'>
                                Locked
                            </h4>
                        </div>

                        <div>
                            <img src={bar2} alt='' className=''></img>
                            <h4 data-aos='fade-up' className='md:text-3xl text-xl font-urbanist pt-3 font-semibold text-white-100 text-center'>
                                Circulation
                            </h4>
                        </div>

                        <div>
                            <img src={bar3} alt='' className=''></img>
                            <h4 data-aos='fade-up' className='md:text-3xl text-xl font-urbanist pt-3 font-semibold text-white-100 text-center'>
                                Team
                            </h4>
                        </div>
                    </div>
                </div>

            </div>

            {/* roadmap */}

            <div id='roadmap' className="lg:px-20 px-5 lg:pt-20 py-5 relative z-10">
                <div className='container mx-auto'>

                    <div className=''>
                        <div data-aos='fade-right' className='flex items-center gap-x-3 pb-3'>
                            <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                            </svg>
                            Roadmap
                        </div>
                        <h3 data-aos='fade-right' className='md:text-5xl text-3xl font-libre font-semibold text-white-100'>
                            Our Roadmap
                        </h3>
                    </div>

                    {/* mobile version */}
                    <div className='lg:hidden block pt-8'>
                        <div className='flex flex-col gap-y-8'>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Concept</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Concept Generation
                                    </li>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Team Assemble
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Research</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon1} alt='icon'></img></span>
                                        Proving the concept can work
                                    </li>

                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Strategic Plan
                                    </li>

                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        White paper conpletion
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Design</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon1} alt='icon'></img></span>
                                        Platform design and technical de monstration
                                    </li>

                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Building the MVP
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Pre-Sale</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon1} alt='icon'></img></span>
                                        Public financing & Seed funding raised
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* desktop version */}

                    <div className='lg:my-16 my-6 lg:block hidden'>

                        <div className='translate-y-44 h-1.5 bg-blue-100'>
                        </div>

                        <div className='flex items-center justify-center gap-5'>

                            <div id='node_1' className='flex items-end gap-x-0 translate-y-40 -mt-2'>

                                <div className='-translate-y-8 flex flex-col items-center justify-center'>
                                    <h4 className='text-2xl font-semibold text-center'>2024 <span className='text-blue-100'>Q1</span>
                                    </h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>

                                </div>

                                <div className='-translate-y-12 -translate-x-6'>
                                    <p className='font-semibold text-xl mb-5'>Concept</p>
                                    <ul className='space-y-3'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Concept Generation
                                        </li>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Team Assemble
                                        </li>
                                    </ul>

                                </div>



                            </div>

                            <div data-aos='fade-down' id='node_2' className='flex items-end gap-x-0 -mt-8'>
                                <div className='flex flex-col items-center justify-center'>
                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-blue-100'>Q2</span></h4>
                                </div>

                                <div className='-translate-y-20 '>
                                    <p className='font-semibold text-xl mb-5'>Concept</p>
                                    <ul className='space-y-3'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon1} alt='icon'></img></span>
                                            Proving the concept can work
                                        </li>

                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Strategic Plan
                                        </li>

                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            White paper conpletion
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_2' className='flex items-end gap-x-0 translate-y-40 mt-1'>

                                <div className='-translate-y-10 flex flex-col items-center justify-center'>
                                    <h4 className='text-2xl font-semibold'>2024 <span className='text-blue-100'>Q3</span></h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>
                                </div>

                                <div className='-translate-y-14 -translate-x-6'>
                                    <p className='font-semibold text-xl mb-5'>Design</p>
                                    <ul className='space-y-3 w-52'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon1} alt='icon'></img></span>
                                            Platform design and technical de monstration
                                        </li>

                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Building the MVP
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div data-aos='fade-down' id='node_4' className='flex items-end gap-x-0 -mt-14'>

                                <div className='flex flex-col items-center justify-center'>
                                    <svg width="4" height="200" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-blue-100'>Q4</span></h4>
                                </div>

                                <div className='-translate-y-24 w-52'>
                                    <p className='font-semibold text-xl mb-5'>Concept</p>
                                    <ul className='space-y-3'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon1} alt='icon'></img></span>
                                            Public financing & Seed funding raised
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Solve X Wallet App section */}

            <div id='wallet' className="lg:px-20 px-5 lg:pt-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center lg:py-12 lg:space-y-0 space-y-8">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">
                            <div>
                                <h3 className='md:text-7xl text-3xl font-extrabold tracking-wide text-white-100 capitalize font-libre'>
                                    Solve X
                                </h3>
                                <h3 className='md:text-7xl text-3xl font-extrabold tracking-wide text-white-100 capitalize font-libre pt-4'>
                                    Wallet App
                                </h3>
                            </div>


                            <p className='py-6 text-white-50 lg:w-1/2 text-lg lg:leading-relaxed'>
                                Our easy-to-use cryptocurrency wallet solution supporting multiple chains. You can send/receive all cryptocurrencies on supported chains and keep track of their transactions, as well as display detailed token information. Try it now!
                            </p>

                            <div className='flex items-center gap-x-6 mt-5'>

                                <button className='py-3 px-5 bg-blue-100 rounded-lg'>
                                    <img src={google} alt='google'></img>
                                </button>

                                <button className='py-3 px-5 bg-blue-100 rounded-lg'>
                                    <img src={apple} alt='google'></img>
                                </button>
                            </div>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <img src={wallet} alt="Logo" className='w-8/12 sm:flex mx-auto animate-float' />
                        </div>

                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}
