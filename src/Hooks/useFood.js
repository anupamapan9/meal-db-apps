import { useEffect, useState } from "react";
const useFood = (name = 's') => {
    const [foods, setFoods] = useState([])
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true)
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals)
                setSpinner(false)
            })
    }, [name])
    return [foods, setFoods, spinner]
}
export default useFood
