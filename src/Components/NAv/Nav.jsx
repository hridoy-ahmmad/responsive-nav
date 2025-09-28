import React, { useState } from 'react';
import Link from './Link';
import { Menu, Route, X } from 'lucide-react';



const navigation = [
    {
        "id": 1,
        "path": "/home",
        "name": "Home"
    },
    {
        "id": 2,
        "path": "/about",
        "name": "About Us"
    },
    {
        "id": 3,
        "path": "/services",
        "name": "Services"
    },
    {
        "id": 4,
        "path": "/contact",
        "name": "Contact"
    },
    {
        "id": 5,
        "path": "/profile",
        "name": "Profile"
    }
]

const menuItems = navigation.map(route => <Link key={route.id} route={route} ></Link>)

const Nav = () => {

    const [open, setOpen] = useState(false)


    return (
        <div className='flex lg:container mx-auto justify-between items-center h-[60px] px-4'>
            <h1>My Logo</h1>
            <ul className='lg:flex md:flex lg:gap-5 hidden '>
                {
                    menuItems
                }
            </ul>
            <span className='md:hidden lg:hidden' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='text-red-600'></X> : <Menu className=' text-gray-300'></Menu>
                }
                <ul className={` absolute right-0 duration-700 bg-black flex flex-col gap-2 text-[12px]
                    ${open ? 'top-14 right-10' : '-top-30 right-10 lg:right-0 opacity-[0%]'
                    }
                    `}>
                    {menuItems}
                    <button className='px-3 py-1 bg-gray-800 mb-2 '>Sign In</button>
                </ul>
            </span>
            <button className='lg:flex hidden md:block'>Sign In</button>
        </div>


    );
};

export default Nav;
