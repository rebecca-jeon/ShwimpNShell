import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className='relative flex justify-between items-center pb-10 border-b '>
            <ul className='flex flex-row items-center space-x-3 translate-y-5 text-[#FF5CB5]'>
                <li>
                    <Link href = '/pages/shop'>Shop</Link>
                </li>
                <li>
                    <Link href = '/pages/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link href = '/pages/contact'>Contact</Link>
                </li>
                <li>
                    <Link href = '/pages/about'>About</Link>
                </li>
            </ul>
            <div className='absolute left-1/2 transform -translate-x-1/2'>
                <img src = 'favicon.ico' alt = 'logo' className='h-12 w-auto translate-y-4'/>
            </div>
            <div>
                <ul className='flex flex-row items-center space-x-3 translate-y-5'>
                    <li>
                        Insta
                    </li>
                    <li>
                        Email
                    </li>
                    <li>
                        User
                    </li>
                    <li>
                        Basket
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;