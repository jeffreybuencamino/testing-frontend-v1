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
