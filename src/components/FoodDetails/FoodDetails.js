import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../Hooks/useDetails';
// import useDetails from '../../Hooks/useDetails';

const FoodDetails = () => {
    const { idMeal } = useParams()
    // const [details, setDetails] = useDetails(idMeal)
    const [details, setDetails] = useDetails(idMeal)
    console.log(details)
    const { strMealThumb, strMeal, strTags, strInstructions, strYoutube } = details;
    return (
        <div className='md:flex max-w-screen-xl m-auto mt-10'>
            <div>
                <img className='w-96 w-96' src={strMealThumb} alt="" />
                <h2 className='text-3xl text-gray-700'>Name: {strMeal}</h2>
                <p className='text-lg text-gray-800'> {strInstructions}</p>
            </div>
            <div>
                <iframe width="560" height="315" src={strYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default FoodDetails;