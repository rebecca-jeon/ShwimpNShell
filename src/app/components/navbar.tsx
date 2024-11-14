import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className='flex flex-row justify-between items-center'>
                <li>
                    <a href = "/">Logo</a>
                </li>
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
        </nav>
    );
};

export default Navbar;