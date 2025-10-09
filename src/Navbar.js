import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from './firebase/firebase'; // your Firebase auth instance
import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from 'firebase/auth';
// import { useState, useEffect } from "react";



const Navbar = ({user}) => {
    
      const navigate = useNavigate();

    //   const [user, setUser] = useState(null);

//   useEffect(()=>{
//     const authState = onAuthStateChanged(auth, (user)=>{
//       console.log("Logging to console for testing");
//       if (user) {
//         setUser(user);
//         console.log(`User signed in: ${user.email}`);
//       } else {
//         setUser(null);
//         console.log('User signed out');
//       }
//     });

//     return () => authState();
//   },[])


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
                <Link to="/personal-resume">Personal Resume</Link>


                {/* Show these links only when user is authenticated */}
                {user && (
                    <>
                        <Link to="/create">Create</Link> 
                        <button onClick={handleSignOut} className="signout-button">Log out</button>
                    </>
                )}   

                {!user && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}

                {/* Show logout button only when authenticated */}
                {/* {user && (
                    <>
                        <Link to="/login"></Link>
                    </>
                )} */}
            </div>
        </nav>
     );
}
 
export default Navbar;