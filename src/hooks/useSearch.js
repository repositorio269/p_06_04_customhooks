import { useState } from "react"
import { findProducts } from "../services/Products";


export function useSearch(entity) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = e => {
        setIsLoading(true);
        setTimeout(() => { // simulación asincronía peticiones http
            if(entity === 'product') {
                setData(findProducts(e.target.value));
            } else if(entity === 'vendor') {
                // petición a otro servicio...
            }
            // ...
            setIsLoading(false);
        }, 2000);
    }

    const input = <input type="search" onChange={handleSearch}/> // JSX

    return {input, data, isLoading};
}