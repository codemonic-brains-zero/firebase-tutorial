import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const user = JSON.parse(localStorage.getItem('user'));

    console.log('User from localStorage:', user);

    const navigate = useNavigate();

    const logout = () => {
        console.log('Logout function called');
        localStorage.removeItem('user'); // Remove the 'user' item from localStorage
        navigate('/'); // Navigate to the home page
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-800 p-4 z-50 relative">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-semibold">
                        <a href="#home">MyApp</a>
                    </div>
                    <div className="hidden xl:flex md:flex space-x-4">
                        <a href="/home" className="text-white hover:text-gray-400">Home</a>
                        <a href="/list" className="text-white hover:text-gray-400">View Products</a>
                        {user && (
                            <div
                                onClick={logout}
                                className="cursor-pointer block text-center font-bold w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                            >
                                Logout
                            </div>
                        )}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <a href="/home" className="block text-white px-2 py-1 hover:bg-gray-700">Home</a>
                        <a href="/list" className="block text-white px-2 py-1 hover:bg-gray-700">View Products</a>
                        {user && (
                            <div
                                onClick={logout}
                                className="cursor-pointer block w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                            >
                                Logout
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
}
