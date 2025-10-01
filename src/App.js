import React, { useState, useEffect } from "react"; 
import MainDisplay from "./MainDisplay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

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
    .then((data) => {console.log("Response from server: ", data)})
    .catch((err) => { console.log("Failed to fetch: ", err)})

  }



    // GET request example
  useEffect(() => {
    fetch("http://localhost:3000/api/message")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setMessage(data.message)
      });
  }, []);



  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route 
            exact path="/"
            element={<MainDisplay message={message} handleAddBook={handleAddBook} />}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
