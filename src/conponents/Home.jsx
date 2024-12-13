import React, { Fragment, useState, useEffect } from "react";
import Nav from './Navigation/Nav'
import walmartImage from '../assets/walmart.png';
import fedex from '../assets/fedex.png';
import amazon from '../assets/amazon.png';
import merck from '../assets/merck.png';
import evaly from '../assets/evaly.png';
import kanbanize from '../assets/kanbanize.png';
import 'swiper/swiper-bundle.css' // import swiper style


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

            <div  className='flex flex-col space-y-3
                xx: xx: xx: xx: 
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:
            '>
                <div className='flex items-center text-gray-400 space-x-1
                        xx:text-xs xx:pt-3 xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>
                    <hr className='bg-black text-black
                        xx:w-16 xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '/>
                    <p className='text-black font-semibold'>About Company</p>
                </div>

                <div className='
                xx:px-6 xx: xx: xx:
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:'
                >
                    <div>
                        <h1 className='
                        xx: xx:w-80 xx:text-3xl xx:font-bold
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:'>
                            Transforming Business With Innovative Digital Solutions
                        </h1>
                        <span className='
                        xx:font-thin xx:text-xs xx:text-justify xx:
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:'
                        >
                            Some studies indicate that consumer responses to marketing approaches are becoming loss predictable
                            for business. According to a 2023 study. nearly 90% of online consumers in the United States researched 
                            products and brands online before visiting the store or making purchase. <br/><br/>
                            Some studies indicate that consumer responses to marketing approaches are become  loss for buinesses.
                        </span>
                    </div>

                    <div className='mb-5'>
                        <button className='text-white rounded-sm
                            xx:font-thin xx:text-xs xx:text-justify xx:bg-black xx:px-2 xx:py-0.5
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:'
                        >
                            Explore Services
                        </button>
                    </div>
                    <div>
                        <img src="https://wpfrank.com/wp-content/uploads/2024/09/Monthly-Retainer-for-Your-Marketing-Needs.jpg" alt="aboutCompany"  className='rounded-md'/>
                    </div>
                </div>
            </div>

            {/* service */}
            <div className='
                xx:px-6 xx:pt-6 xx: xx: 
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:
            '>
                <div className='grid
                    xx:grid-cols-1 xx: xx: xx: 
                    xs:
                    sm:
                    md:
                    lg:
                    xl:
                    2xl:
                '>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='rounded-sm bg-yellow-400
                            xx:px-3 xx: xx: xx: 
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:
                        '>
                            <h1 className='
                                xx:pt-10 xx: xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Production Design</h1>
                            <span className='
                                xx:text-xs xx:text-center xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, similique accusamus.</span>
                        </div>
                        <div className='rounded-sm bg-[#FCBF90]
                            xx:px-3 xx: xx: xx: 
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:
                        '>
                            <h1 className='
                                xx:pt-10 xx: xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Production Design</h1>
                            <span className='
                                xx:text-xs xx:text-center xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, similique accusamus.</span>
                        </div>
                        <div className='rounded-sm bg-green-400
                            xx:px-3 xx: xx: xx: 
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:
                        '>
                            <h1 className='
                                xx:pt-10 xx: xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Production Design</h1>
                            <span className='
                                xx:text-xs xx:text-center xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, similique accusamus.</span>
                        </div>
                        <div className='rounded-sm bg-sky-300
                            xx:px-3 xx: xx: xx: 
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:
                        '>
                            <h1 className='
                                xx:pt-10 xx: xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Production Design</h1>
                            <span className='
                                xx:text-xs xx:text-center xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, similique accusamus.</span>
                        </div>
                        
                    </div>

                    <div  className='flex flex-col space-y-3
                        xx: xx: xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>
                        <div className='flex items-center text-gray-400 space-x-1
                                xx:text-xs xx:pt-3 xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>
                            <hr className='bg-black text-black
                                xx:w-16 xx: xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '/>
                            <p className='text-black font-semibold'>Services</p>
                        </div>

                        <div className='
                        xx:px-6 xx: xx: xx:
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:'
                        >
                            <div>
                                <h1 className='
                                xx: xx:w-80 xx:text-2xl xx:font-bold
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:'>
                                    We Can Help You Solve Your Problem Through Our Service
                                </h1>
                                <span className='
                                xx:font-thin xx:text-xs xx:text-justify xx:
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:'
                                >
                                    Some studies indicate that consumer responses to marketing approaches are becoming loss predictable
                                    for business. According to a 2023 study. nearly 90% of online consumers in the United States researched 
                                    products and brands online before visiting the store or making purchase. <br/><br/>
                                    Some studies indicate that consumer responses to marketing approaches are become  loss for buinesses.
                                </span>
                            </div>

                            <div className='mb-5'>
                                <button className='text-white rounded-sm
                                    xx:font-thin xx:text-xs xx:text-justify xx:bg-black xx:px-2 xx:py-0.5
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:'
                                >
                                    Explore Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex
                xx:px-10 xx:flex-col xx:space-y-5 xx: 
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:
            '>
                <div className='xx:space-y-3'>
                    <div>
                        <h1 className='xx:text-xl'>Watch Video to Discover Us</h1>
                    </div>
                    <div>
                        <p className='xx:text-xs text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ducimus modi quaerat quas veritatis perspiciatis sapiente qui tempore</p>
                    </div>
                </div>
                <div className='
                    xx:flex xx:flex-col xx:justify-center xx: xx: 
                    xs:
                    sm:
                    md:
                    lg:
                    xl:
                    2xl:
                '>
                    <img src="https://www.powerfulpanels.com/wp-content/uploads/2023/06/create-an-inclusive-environment-1--1200x675.jpg" alt="" className='rounded-md'/>
                    <span className='
                        xx:text-center xx:text-xs xx:mb-5 xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum explicabo vel fugiat a quia neque dolorum placeat aspernatur id illo.</span>
                    <div className='flex justify-center xx:pb-5'>
                        <button className='text-white rounded-sm
                            xx:font-thin xx:text-xs xx:flex xx:justify-center xx:bg-black xx:px-2 xx:py-1.5 xx:w-32
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:'
                        >
                            Explore Services
                        </button>
                    </div>
                    <div className='
                        xx:flex flex-row-reverse xx:mt-5 xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>
                        <div className='space-y-3
                            xx: xx: xx: xx: 
                            xs:
                            sm:
                            md:
                            lg:
                            xl:
                            2xl:
                        '>
                            <div>
                                <img src="https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg" alt="" />
                            </div>
                            <div className='flex items-center text-gray-400 space-x-1
                                xx:text-xs xx:pt-3 xx:mt-5 xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>
                                <hr className='bg-black text-black
                                    xx:w-16 xx: xx: xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '/>
                                <p className='text-black font-semibold'>Testimonials</p>
                            </div>
                            {/* carousel this part */}
                            <div className='
                                xx:space-y-5 xx: xx: xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>
                                <h1 className='
                                    xx:text-xl xx:font-bold xx: xx: xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>2500+ Happy Client Said to Us They Are Stisfied </h1>
                                <p className='
                                    xx:text-xs xx:text-justify xx: xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eius quo? 
                                Corporis, veniam ab? Repellendus sunt beatae ullam. Dolorem, eaque!</p>


                                {/* this is the part of the carousel begins */}
                                <div className='rounded-md bg-sky-300
                                    xx:p-5 xx: xx: xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>
                                    <div className='space-y-3
                                        xx: xx: xx: xx: 
                                        xs:
                                        sm:
                                        md:
                                        lg:
                                        xl:
                                        2xl:
                                    '>
                                        <div>
                                            <p className='
                                                xx:text-xs xx:text-justify xx: xx: 
                                                xs:
                                                sm:
                                                md:
                                                lg:
                                                xl:
                                                2xl:
                                            '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eum reiciendis maxime, dicta corporis aliquam voluptatem beatae iste sit quaerat!</p>
                                        </div>
                                        <div className='grid
                                            xx:grid-rows- xx: xx: xx: 
                                            xs:
                                            sm:
                                            md:
                                            lg:
                                            xl:
                                            2xl:
                                        '>
                                            <div>
                                                <img src="" alt="" />
                                            </div>
                                            <div>
                                                <h1 className='
                                                    xx:text-xs xx:font-bold xx: xx: 
                                                    xs:
                                                    sm:
                                                    md:
                                                    lg:
                                                    xl:
                                                    2xl:
                                                '>
                                                    John Doe
                                                </h1>
                                                <p className='
                                                    xx:text-xs xx:text-justify xx: xx: 
                                                    xs:
                                                    sm:
                                                    md:
                                                    lg:
                                                    xl:
                                                    2xl:
                                                '>
                                                    Philippine
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subscribe Part */}
                            <div className='bg-[#270B33] rounded-lg text-white
                                xx:pb-5 xx:px-5 xx:py-3.5 xx: 
                                xs:
                                sm:
                                md:
                                lg:
                                xl:
                                2xl:
                            '>
                                <div>
                                    <div className='
                                        xx:space-y-3 xx: xx: xx: 
                                        xs:
                                        sm:
                                        md:
                                        lg:
                                        xl:
                                        2xl:
                                    '>
                                        <div className='flex items-center text-gray-400 space-x-1
                                            xx:text-xs xx:pt-3 xx:mt-5 xx: 
                                            xs:
                                            sm:
                                            md:
                                            lg:
                                            xl:
                                            2xl:
                                        '>
                                            <hr className='bg-black text-black
                                                xx:w-16 xx: xx: xx: 
                                                xs:
                                                sm:
                                                md:
                                                lg:
                                                xl:
                                                2xl:
                                            '/>
                                            <p className='text-white font-semibold'>Subscribe Now</p>
                                        </div>

                                        <h1 className='
                                            xx:text-xl xx:font-bold xx: xx: 
                                            xs:
                                            sm:
                                            md:
                                            lg:
                                            xl:
                                            2xl:
                                        '>
                                            Subscribe To Our Newsletter
                                        </h1>

                                        <div>
                                            <div className="relative">
                                                <form action="">
                                                    <div className="flex items-center">
                                                        <input 
                                                            type="text" 
                                                            placeholder='Test'  
                                                            className='border border-black rounded-md px-4 py-2 w-full outline-none text-black'
                                                        />
                                                        <button 
                                                            type="#" 
                                                            className='bg-black text-white text-xs px-4 rounded-r-md absolute right-0 h-full'
                                                        >
                                                            Subscribe
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div>
                                                <span className='
                                                    xx:text-xs xx: xx: xx: 
                                                    xs:
                                                    sm:
                                                    md:
                                                    lg:
                                                    xl:
                                                    2xl:
                                                '>
                                                    Already a member?<span className='text-[#FCBF90]'> Sign in</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}

            <div className='bg-[#d5e1fd]
                xx:mt-10 xx:px-10 xx: xx: 
                xs:
                sm:
                md:
                lg:
                xl:
                2xl:
            '>
                <div className='grid
                    xx:grid-rows-4 xx: xx: xx: 
                    xs:
                    sm:
                    md:
                    lg:
                    xl:
                    2xl:
                '>
                    <div className='
                        xx:space-y-5 xx:mt-5 xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>
                        <div>
                            <h1 className='font-bold xx:text-2xl'>CROCO</h1>
                        </div>
                        <div>
                            <span className='xx:text-sm xx:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit similique sunt impedit voluptatum eius?</span>
                        </div>
                        <div>
                            <ul className='flex xx:space-x-3'>
                                <li className='flex justify-center items-center rounded-full border border-black
                                    xx:w-10 xx:aspect-square xx:text-xl xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>f</li>
                                <li className='flex justify-center items-center rounded-full border border-black
                                    xx:w-10 xx:aspect-square xx:text-xl xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>I</li>
                                <li className='flex justify-center items-center rounded-full border border-black
                                    xx:w-10 xx:aspect-square xx:text-xl xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>in</li>
                                <li className='flex justify-center items-center rounded-full border border-black
                                    xx:w-10 xx:aspect-square xx:text-xl xx: 
                                    xs:
                                    sm:
                                    md:
                                    lg:
                                    xl:
                                    2xl:
                                '>t</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>Products</h1>
                        </div>
                        <div>
                            <ul>
                                <li>Features</li>
                                <li>Integrations</li>
                                <li>Pricing</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>Company</h1>
                        </div>
                        <div>
                            <ul>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Costumers</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>Quick Contact</h1>
                        </div>
                        <div>
                            <ul>
                                <li>+63 920 692 8571</li>
                                <li>maltoace9@gmail.com</li>
                                <li>Contact Us</li>
                                <li>Term of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <hr />
                    </div>
                    <div>
                        <span>
                            © 2024 <strong>aceKun</strong> All right reserved
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home