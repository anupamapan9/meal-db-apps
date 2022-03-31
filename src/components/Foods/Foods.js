import React from 'react';
import useFood from '../../Hooks/useFood';
import FoodCard from '../FoodCard/FoodCard';

const Foods = () => {
    const [foods] = useFood()
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto'>
            {foods.map(food => <FoodCard food={food} key={food.idMeal}></FoodCard>)}
        </div>
    );
};

export default Foods;