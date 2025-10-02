import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [message, setMessage] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        //Fetching welcome message
        fetch("http://localhost:3000/api/message")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.message);
            setMessage(data.message)
          });
    
          // Fetching blogs data
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          // console.log(data);
          setData(data);
    
        })
      }, [url]);

      return {data, message}
    }

export default useFetch;