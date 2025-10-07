import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from './firebase/firebase'; // your Firebase auth instance
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from "react";



const Navbar = () => {
    
      const navigate = useNavigate();

      const [user, setUser] = useState(null);

  useEffect(()=>{
    const authState = onAuthStateChanged(auth, (user)=>{
      console.log("Logging to console for testing");
      if (user) {
        setUser(user);
        console.log(`User signed in: ${user.email}`);
      } else {
        setUser(null);
        console.log('User signed out');
      }
    });

    return () => authState();
  },[])


    const handleSignOut = () => {

        signOut(auth).then((cred) => {
        console.log('Signed out');
        alert("You are now signed out.");
        navigate('/');
        }).catch((error) => {
        console.error('Error signing out', error);
        console.log('there was an error signing out')
        });
  };
//
    return ( 
        <nav className="navbar">
            <h2>Blog</h2>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to="/create">New Post</Link>
                <Link to="/personal-resume">Personal Resume</Link>
                <Link to="/login">Login</Link>
                <Link id="sign-up-link" to="/signup">Sign Up</Link>
                <button onClick={handleSignOut} className="signout-button">Log out</button>
            </div>
        </nav>
     );
}
 
export default Navbar;