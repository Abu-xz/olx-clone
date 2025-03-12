import React, { useContext, useState } from 'react';
import { FaRegHeart, FaSearch, FaRegComment, FaRegBell, FaPlus } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import avatar_png from '/avatar_1.png'
import '../index.css';
import { AuthContext } from '../store/Auth/AuthContext';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/setup';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();    
    
    const logout = () => {
        signOut(auth)
        navigate('/login')
    }

    return (
        <>
            <header className="flex  items-center justify-between p-4 bg-white shadow-md">
                <div className="flex items-center">
                    <svg width="48px" height="48px" viewBox="0 0 1024 1024" className='text-cyan-900' fill='currentColor'>
                        <path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                    </svg>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center border-2 border-gray-800 rounded p-2">
                        <FaSearch className="text-xl text-gray-500" />
                        <input type='text' placeholder='Kerala' className="ml-2 outline-none w-full" />
                        <RiArrowDropDownLine className="text-xl text-gray-500" />
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center border-y-2 border-l-2 border-gray-800 rounded-l p-2">
                            <input type='text' placeholder='Search...' className="outline-none w-full" />
                        </div>
                        <div className="w-[43px] h-[44px] flex items-center justify-center bg-green-900 rounded-r border-y-2 border-r-2 border-gray-800">
                            <FaSearch className="w-[20px] h-[20px] text-white" />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-2">
                    <p className="text-gray-700">English</p>
                    <RiArrowDropDownLine className="text-xl text-gray-500" />
                </div>

                <div className="flex items-center space-x-6">
                    <FaRegHeart className='text-xl text-gray-700 cursor-pointer' />
                    <FaRegComment className='hidden md:flex text-xl text-gray-700 cursor-pointer' />
                    <FaRegBell className='hidden md:flex text-xl text-gray-700 cursor-pointer' />
                    <div className="flex items-center space-x-4">
                        <div
                            className="relative flex items-center cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                        <div className="flex items-center gap-1">
                            <img
                                src={avatar_png}
                                alt="User Avatar"
                                className="w-[35px] h-[35px] rounded-full"
                            />
                            <RiArrowDropDownLine className="text-xl text-gray-500" />
                        </div>

                        {/* Dropdown */}
                        {isDropdownOpen && (
                            <div className="absolute right-4 top-15 w-48 bg-white shadow-xl  z-10">
                                <div className="p-4 text-center border-b">
                                    <p className="uppercase text-sm font-semibold text-gray-700">{user?.name? user.name : 'Unknown'}</p>
                                </div>

                                <div className="p-3 flex flex-col gap-2">
                                    <button
                                        className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200"
                                    >
                                        View Profile
                                    </button>
                                    <Link to={'/login'}>
                                        <button
                                            onClick={logout}
                                            className="bg-red-500 text-white py-2 px-4 w-full rounded-md hover:bg-red-600 transition duration-200"
                                        >
                                            Logout
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        )}
                    </div>
                    <Link to={'/create'} className="flex items-center border-3 border-b-yellow-300 border-t-cyan-400 border-r-green-600 border-l-blue-500 text-green-950 font-bold px-4 py-2 rounded-4xl cursor-pointer">
                        <FaPlus className="mr-2" />
                        Sell
                    </Link>
                </div>
            </div>
        </header >


            <nav className="flex flex-wrap items-center gap-4 md:gap-14 bg-white border-gray-200 border-2 py-2 mt-2 px-6 md:px-12 mb-20">

                <div className="flex items-center cursor-pointer">
                    <h2 className="text-lg font-semibold text-gray-800 uppercase">All Categories</h2>
                    <RiArrowDropDownLine className="text-2xl text-gray-500" />
                </div>

                <div className="hidden md:flex items-center space-x-3">
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">Cars</p>
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">Motorcycles</p>
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">Mobile Phones</p>
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">For Sale: Houses & Apartments</p>
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">Scooters</p>
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">Commercial & Other Vehicles</p>
                    <p className="text-gray-700 hover:text-green-950 cursor-pointer">For Rent: Houses & Apartments</p>
                </div>

                <button className="md:hidden block px-4 py-2 border rounded " onClick={() => setShowMenu(!showMenu)}>
                    ☰
                </button>

                {showMenu && (
                    <div className="w-full flex flex-col bg-white border-b mt-2 p-4">
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">Cars</p>
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">Motorcycles</p>
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">Mobile Phones</p>
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">For Sale: Houses & Apartments</p>
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">Scooters</p>
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">Commercial & Other Vehicles</p>
                        <p className="text-gray-700 hover:text-green-950 cursor-pointer">For Rent: Houses & Apartments</p>
                    </div>
                )}
            </nav>

        </>

    );
}

export default Navbar;