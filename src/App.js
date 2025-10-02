// import React, { useState, useEffect } from "react"; 
import MainDisplay from "./MainDisplay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import useFetch from "./useFetch";

function App() {

  // const [message, setMessage] = useState("");
  // const [data, setData] = useState([]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  const {data, message} = useFetch("http://localhost:3000/blogs")
  

  const handleAddBookButton = () => {

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
  // useEffect(() => {
  //   //Fetching welcome message
  //   fetch("http://localhost:3000/api/message")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.message);
  //       setMessage(data.message)
  //     });

  //     // Fetching blogs data
  //   fetch("http://localhost:3000/blogs")
  //   .then(res => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     setData(data);

  //   })
  // }, []);



  return (
    <Router>

      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route 
            exact path="/"
            element={<MainDisplay data={data} message={message} handleAddBookButton={handleAddBookButton} />}>
            </Route>
            <Route exact path="/create"
            element={<Create/>}/>
            <Route exact path="/blog/:id"
            element={<BlogDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
