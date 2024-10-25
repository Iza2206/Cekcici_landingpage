import React from 'react'
import { IoMdSearch } from "react-icons/io";

const MenuLinks = [
    {
        id : 1,
        name : "Home",
        link : "/#",
    },
    {
        id : 2,
        name : "Shop",
        link : "/#shop",
    },
    {
        id : 3,
        name : "About",
        link : "/#about",
    },
    {
        id : 4,
        name : "Blogs",
        link : "/#blog",
    },
]

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
            <div className="container flex justify-between items-center">
                {/* Logo and Link section */}
                <div className="flex items-center gap-4">
                    <a 
                        href="#"
                        className="text-brandYellow font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                        Cekcici
                    </a>
                   { /* Menu Items */}
                   <div className="hidden lg:block">
                        <ul className="flex items-center gap-4">
                            {MenuLinks.map((data, index)=>(
                                    <li key={index}> 
                                        <a href={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                        {""}
                                        {data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                   </div>
                </div>
                {/* Navbar Right section */}
                <div className="flex justify-between items-center gap-4">
                    {/* Search Bar section */}
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search" className="search-bar" />
                        <IoMdSearch 
                        className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3" />
                    </div>

                    {/* Dark Mode section */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar