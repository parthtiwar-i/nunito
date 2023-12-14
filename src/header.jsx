import React from 'react'
import logo from './assets/message.png';

function Header() {
  return (
    <>
    <div className="NavBar  bg-[#1A1B23] flex items-center text-white p-7 pl-20 max-sm:pl-8 gap-14 ">
        <div className="brand flex justify-center items-center gap-3 text-3xl">
        <img src={logo} className='w-10' alt="" />
        <b>nunito</b>
        </div>
        <div className="options max-md:hidden  flex justify-center items-center gap-8 text-base border-l-2 border-gray-400 px-10">
            <p className="option inline">Products <img className='w-3 inline' src="/down-chevron.png" alt="" /></p>
            <p className="option">Pricing</p>
            <p className="option">Company <img className='w-3 inline' src="/down-chevron.png" alt="" /></p>
            <p className="option">Jobs <div className="inline bg-orange-500 rounded-full p-2  text-xs ml-2">6</div></p>
        </div>
            <button className='ml-auto border-2 border-white px-3 py-1 rounded-3xl hover:bg-slate-50 hover:text-black  ' >Sign up</button>
    </div>

    </>
  )
}

export default Header