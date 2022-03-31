import React from 'react';

const FoodCard = ({ food }) => {
    console.log(food)
    const { strMealThumb, strTags, strMeal, idMeal } = food;
    return (
        <div className='bg-white bg-opacity-75 rounded-2xl shadow-xl p-3'>
            <img src={strMealThumb} alt="" />
            <h2 className='text-2xl text-gray-600'>{strMeal}</h2>
            <p><small> {strTags ? strTags : 'Not Found'}</small></p>
        </div>
    );
};

export default FoodCard;