import React from 'react';
import { Link } from 'react-router-dom';
import CustomeLink from '../CustomeLinks/CustomeLink';

const Header = () => {
    return (
        <nav className='flex items-center justify-around h-20 bg-amber-300'>
            <div className='hidden md:block'>
                <h1 className='logo font-medium font-mono text-3xl'>Foodies</h1>
            </div>
            <div className='flex md:justify-evenly justify-between md:w-1/3 w-1/2 font-semibold text-gray-800'>

                <CustomeLink to='/'>Home</CustomeLink>
                <CustomeLink to='/foods'>Foods</CustomeLink>
                <CustomeLink to='/search'>Search</CustomeLink>
                <CustomeLink to='/about'>About</CustomeLink>

            </div>
        </nav>
    );
};

export default Header;