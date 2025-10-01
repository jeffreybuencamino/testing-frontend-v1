import React, { useState, useEffect } from "react"; 
import './App.css';

function App() {

  const [message, setMessage] = useState("");

  

  const handleAddBook = () => {

    const bookData = {
      
      title: "Title of book",
      author: "Jeffrey Buencamino",
      pages: 328,
      genres: [
        "Sci-fi",
        "Mystery"
      ],
      rating: 9
    }

    fetch('http://localhost:3000/test-api', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bookData)
    })
    .then((res) => res.json())
    .then((data) => {console.log("Response from server: ", data.title)})
    .catch((err) => { console.log("Failed to fetch: ", err)})

  }



    // GET request example
  useEffect(() => {
    fetch("http://localhost:3000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);



  return (
    <div className="App">
      <h1>message from backend: { message}</h1>
      <button onClick={handleAddBook}>Click me</button>
    </div>
  );
}

export default App;
