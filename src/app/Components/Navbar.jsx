import Link from 'next/link';
import React from 'react';
import { IoCaretBackOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl mb-2 flex justify-between px-10">
            <div className="flex items-center gap-4">
                <a className=" font-extrabold  text-2xl bg-linear-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Food Meals</a>
            </div>

            <div>
                <Link href='/posts' className='btn btn-secondary'>All Foods</Link>

            </div>

        </div>
    );
};

export default Navbar;