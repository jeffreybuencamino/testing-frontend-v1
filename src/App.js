// import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainDisplay from "./MainDisplay";
import Navbar from "./Navbar";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
// import useFetch from "./useFetch";
import EditBlog from "./EditBlog";
import PersonalResume from "./PersonalResume";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';  // your Firebase auth instance
import { useEffect, useState } from "react";



function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user ? `User: ${user.email}` : 'No user');
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  // const [message, setMessage] = useState("");
  // const [data, setData] = useState([]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // const {data, message} = useFetch("/blogs")
  

  // const handleAddBookButton = () => {

  //   const bookData = {
  //     title: "Title of book",
  //     author: "Jeffrey Buencamino",
  //     pages: 328,
  //     genres: [
  //       "Sci-fi",
  //       "Mystery"
  //     ],
  //     rating: 9
  //   }

  //   fetch('/test-api', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(bookData)
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {console.log("Response from server: ", data)})
  //   .catch((err) => { console.log("Failed to fetch: ", err)})

  // }



    // GET request example
  // useEffect(() => {
  //   //Fetching welcome message
  //   fetch("/api/message")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.message);
  //       setMessage(data.message)
  //     });

  //     // Fetching blogs data
  //   fetch("/blogs")
  //   .then(res => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     setData(data);

  //   })
  // }, []);

  // const [user, setUser] = useState(null);

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user)=>{
  //     console.log("Logging to console for testing");
  //     if (user) {
  //       setUser(user);
  //       console.log('User signed in:', user.email);
  //     } else {
  //       setUser(null);
  //       console.log('User signed out');
  //     }
  //   })
  // },[user])


  return (
    <Router>

      <div className="App">
        <Navbar user={user}/>
        <div className="content">
          <Routes>
            <Route 
            exact path="/"
            element={<MainDisplay user={user}/>}>
            </Route>
            <Route exact path="/create"
            element={<Create/>}/>
            <Route exact path="/blog/:id"
            element={<BlogDetails/>}/>
            <Route exact path='/edit/:id'
            element={<EditBlog/>}/>
            <Route exact path="/personal-resume"
            element={<PersonalResume/>}/>
            <Route exact path="/login"
            element={<LoginForm/>}/>
            <Route exact path="/signup"
            element={<SignupForm/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
