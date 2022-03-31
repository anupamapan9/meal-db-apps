import { useEffect, useState } from "react"

const useDetails = (id) => {

    const [details, setDetails] = useState({})
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [id])
    return [details, setDetails]
}
export default useDetails
