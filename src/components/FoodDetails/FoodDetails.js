import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const { idMeal } = useParams()
    console.log(idMeal)
    return (
        <div>
            <h1>This is food details</h1>
        </div>
    );
};

export default FoodDetails;