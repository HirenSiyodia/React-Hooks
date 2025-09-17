import React, { useEffect, useState } from 'react'

const useFetch = ({url}) => {
    console.log("url", url);
    
    // data
    const [data, setData] = useState(null);
    // error
    const [error, setError] = useState(null);
    // loading
    const [loading, setLoading] = useState(true);

    // Custonhooks
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setError(error);                
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);


  return {
    data, loading, error
}
}

export default useFetch;