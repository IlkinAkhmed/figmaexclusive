import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    function FetchData() {
        fetch(`http://localhost:3000/${url}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    useEffect(() => {
        FetchData()
        setIsLoading(!isLoading)
    }, [])
    return { products, setProducts, isLoading };
}
export default useFetch