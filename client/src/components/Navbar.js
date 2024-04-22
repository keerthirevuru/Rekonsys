import React from 'react';

const Navbar = () => {
  const handleProfileClick = () => {
    // Handle click event for profile picture here
    console.log("Profile picture clicked!");
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">Rekonsys</div>
        <div className='flex items-center'>
          <a href="/login" className="text-white hover:text-gray-300 mr-4">Login</a>
          <a href="/register" className="text-white hover:text-gray-300">Register</a>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;