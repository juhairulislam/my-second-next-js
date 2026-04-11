import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl mb-4 flex justify-between px-10">
            <div className="">
                <a className=" font-extrabold  text-2xl bg-linear-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Food Meals</a>
            </div>

            <div>
                <Link href='/posts' className='btn btn-secondary'>All Foods</Link>

            </div>

        </div>
    );
};

export default Navbar;