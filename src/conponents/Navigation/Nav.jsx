import React, {useState, useRef, useEffect} from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleHumber = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const menuRef = useRef(null) // to check if click inside or outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[menuRef])
    return (
        <div className={`fixed h-screen ${isMenuOpen ? 'bg-slate-900 text-white' : 'bg-transparent'}`} ref={menuRef}>
            <div className='mt-5 w-56 space-y-5 pl-6' >
                <div className='flex justify-between bottom-9 xx:mx-2.5'>
                    <div className={`${isMenuOpen ? 'block' : 'hidden sm:block'}`}>
                        <h1 className=' font-bold xx:text-3xl'>CROCO</h1>
                    </div>
                    <button className='sm:hidden text-2xl' onClick={toggleHumber}>
                        {isMenuOpen ? <IoCloseOutline className='text-white transition-transform duration-300 rotate-190'/> : <RxHamburgerMenu className='text-black transition-transform duration-300 rotate-190'/> }
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'block xx:space-y-2' : 'hidden sm:block'}`}>
                    <ul className='xx:space-y-2'>
                        <li>About us</li>
                        <li>Profile</li>
                        <li>Tearms</li>
                        <li>Contact</li>
                    </ul>

                    <div className=''>English</div>
                    <div className=''>Sign In</div>
                    <div className='bg-black text-white rounded-md
                        xx:w-32 xx:flex xx:justify-center xx:py-1.5 xx: xx: 
                        xs:
                        sm:
                        md:
                        lg:
                        xl:
                        2xl:
                    '>Sign Up</div>
                </div>

                <div className='absolute bottom-3'>
                    <div className=''>
                        @ AseDev
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav