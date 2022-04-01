import React, { useState } from 'react';
import useFood from '../../Hooks/useFood';
import FoodCard from '../FoodCard/FoodCard';
import Spinner from '../Spinner/Spinner';

const Search = () => {
    const [searchText, setSearchText] = useState('beef');
    const searched = e => {
        setSearchText(e.target.value)
    }
    const [foods, setFood, spinner] = useFood(searchText)
    return (

        <>

            <div className='text-center mt-6'>
                <h1 className='text-3xl'>Search Your Food </h1>
                <input className='border-2 border-amber-600 rounded-md w-3/6' type="text" onChange={searched} />
            </div>

            {foods === null ? <h1 className='text-3xl text-center'>Nothing foundShowing the result for  <b>{searchText}</b> </h1> :

                <>

                    {spinner ? <Spinner></Spinner> : <div className='mt-5 md:mt-24'>



                        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto'>


                            {foods.map(food => <FoodCard food={food} key={food.idMeal}></FoodCard>)}
                        </div>
                    </div>

                    }
                </>
            }

        </>

    );
};

export default Search;