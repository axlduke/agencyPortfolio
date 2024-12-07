import React from 'react'
import Nav from './Navigation/Nav'
import walmartImage from '../assets/walmart.png';
import fedex from '../assets/fedex.png';
import amazon from '../assets/amazon.png';
import merck from '../assets/merck.png';
import evaly from '../assets/evaly.png';
import kanbanize from '../assets/kanbanize.png';
function Home() {
    return (
        <div className='h-screen'>
            <div>
                <div className='w-screen fixed items-center top-0 
                xx:bg-white xx:mb-12 xx:h-14
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:
                '>
                    <Nav/>
                    <div className='
                    xx:pt-5 xx:pl-16 xx:flex xx:items-center
                    xs:
                    sm:
                    md:
                    lg:
                    xl:
                    2xl:
                    '>
                        <h1>CROCO</h1>
                    </div>
                </div>

                <div className='
                xx:flex xx:mt-16 xx:mx-6 xx:pl-5 rounded-md bg-[#A1E1E1] xx:h-96
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:
                '>
                    <div className='
                        xx:
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                        '>
                        <div className='font-bold
                        xx:text-2xl xx:w-44 xx: xx:pt-10
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                        '>Infinite Possiblities, One Agency</div>
                        <div className='text-sm
                        xx: xx:w-36 xx:
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:'>Even before the Digital Agency establishment bill was
                        passed the Cabinet Secretary Information Technology
                        </div>
                        
                        <div className='pt-3'>
                            <button className='rounded-md
                                xx:text-sm xx:bg-black text-white xx:px-3 xx:py-1.5 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:'
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className='
                    xx: xx: 
                    xs:
                    sm:
                    md:
                    lg:
                    xl:
                    2xl:
                    '>
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_231/https://www.isummation.com/wp-content/uploads/2022/11/right-imgs-2.png" alt="" 
                            className='
                        xx:h-96 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                        '
                        />
                    </div>
                </div>

                <div className='flex justify-center items-center text-gray-400 space-x-1
                        xx:text-xs xx:pt-5 xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>
                    <hr className='
                        xx:w-12 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    <p>over 45k top class branding working ase_solution</p>
                    <hr className='
                        xx:w-12 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                </div>

                {/* branding logo */}
                <div className='grid
                        xx:grid-cols-6 xx:flex xx:items-center xx:gap-2 xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>
                    <div>
                        <img src={walmartImage} alt=""  className='
                        xx:w-20 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    </div>
                    <div>
                        <img src={fedex} alt=""  className='
                        xx:w-12 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    </div>
                    <div>
                        <img src={kanbanize} alt=""  className='
                        xx:w-16 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    </div>
                    <div>
                        <img src={amazon} alt=""  className='
                        xx:w-12 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    </div>
                    <div>
                        <img src={merck} alt=""  className='
                        xx:w-16 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    </div>
                    <div>
                        <img src={evaly} alt=""  className='
                        xx:w-14 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home