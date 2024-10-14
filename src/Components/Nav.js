import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';
import resume from "../resume/Harikrishnan.pdf"

const NavLinks = ({ closeMenu }) => {
  return (
    <ul className='flex flex-col md:flex-row md:items-center md:gap-8 gap-6 text-white'>
      {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((section) => (
        <li key={section} className='p-2 hover:bg-indigo-600 rounded-full cursor-pointer transition-colors duration-300'>
          <Link
            to={section.toLowerCase()}
            smooth={true}
            duration={500}
            onClick={closeMenu} // Close the menu on click
          >
            {section}
          </Link>
        </li>
      ))}

      {/* Add Download Resume Button */}
      <li className='p-2 hover:bg-indigo-600 rounded-full cursor-pointer transition-colors duration-300'>
        <a
          href={resume} // Assuming the resume is placed in the public folder
          download
          className='text-white hover:text-indigo-400'
          onClick={closeMenu}
        >
          Download Resume   
        </a>
      </li>
    </ul>
  );
};

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const toggleNavbar = () => setOpen(!isOpen);

  const closeMenu = () => setOpen(false); // Function to close the menu

  return (
    <nav className='fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 flex justify-between items-center p-4'>
      {/* Name and Logo */}
      <div className='text-white text-2xl font-bold'>
        <Link to='about' smooth={true} duration={500}>
          Harikrishnan
        </Link>
      </div>

      {/* Desktop Navigation and Download Resume Button */}
      <div className='hidden md:flex items-center gap-8'>
        <NavLinks closeMenu={closeMenu} />
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden z-50'>
        <button onClick={toggleNavbar} className='text-white'>
          {isOpen ? <IoMdClose className='text-3xl' /> : <FiAlignJustify className='text-3xl' />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white z-40'>
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </nav>
  );
}

export default Nav;
