import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-orange-600 font-extrabold text-4xl mb-16'>Welcome Foodies </h1>
                <Link to={'/search'} className='py-1 px-3 text-white  bg-amber-600 w-auto sm:mb-0'>
                    Search Food
                </Link>


            </div>
        </div>
    );
};

export default Home;



