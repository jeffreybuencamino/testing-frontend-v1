import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [message, setMessage] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Fetching welcome message (use relative path so CRA proxy can be used)
        fetch("/api/message")
          .then((res) => res.json())
          .then((data) => {
            setMessage(data.message)
          });
    
          // Fetching blogs data
        fetch(url)
        .then(res => {
          if(!res.ok){
            console.log(res);
            setIsLoading(false);

            throw Error(`GangGang HTTP Error ${res.status}`);
          }
          return res.json()
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setError(null);
          setIsLoading(false);
        }).catch(err => {
          setError(err.message);
          console.log(err.message);
          setData(null);
          setIsLoading(false);
        })
      }, [url]);

      return {data, message, isLoading, error}
    }

export default useFetch;