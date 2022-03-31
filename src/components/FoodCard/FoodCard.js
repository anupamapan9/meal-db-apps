import React from 'react';
import { Link } from 'react-router-dom';
const FoodCard = ({ food }) => {
    const { strMealThumb, strTags, strMeal, idMeal } = food;
    return (
        <div className='bg-white bg-opacity-75 rounded-2xl shadow-xl p-3'>
            <Link to={`/food-details/${idMeal}`}>
                <img src={strMealThumb} alt="" />
                <h2 className='text-2xl text-gray-600'>{strMeal}</h2>
                <p><small> {strTags ? strTags : 'Not Found'}</small></p>
            </Link>
        </div>
    );
};

export default FoodCard;