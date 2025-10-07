import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from './firebase/firebase'; // your file where you initialize firebase
import { signInWithEmailAndPassword } from "firebase/auth"; // import separately

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Use spread operator to keep other fields unchanged
    setFormData(prev => ({
      ...prev,       // copy existing fields
      [name]: value, // update the changed field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    console.log('Logging in with:', formData);
    signInWithEmailAndPassword(auth, email, password)
        .then(cred=>{
            console.log(cred);
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
                });
            alert("Sign in successful!");
            console.log(email, password);

            navigate('/');
        })
        .catch(err=>{
            alert(err);
            console.log(err);
        })
    // You can call API here with formData.email and formData.password
  };

  return (
    <div className="create">
            <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
        />

        <label>Password:</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
        />

        <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default LoginForm;
