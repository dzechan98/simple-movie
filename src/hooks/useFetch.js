import { useEffect } from "react";

export const useFetch = (url, setData) => {
    const getData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data.results || data.cast || data);
    };
    useEffect(() => {
        getData(url);
    }, []);
};
