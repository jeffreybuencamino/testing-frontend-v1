import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from './firebase/firebase'; // your file where you initialize firebase
import { createUserWithEmailAndPassword } from "firebase/auth"; // import separately


const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    // Check if password contains less than 6 characters
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    // Check if email contains "@"
    if (!formData.email.includes("@")) {
    alert("You must enter a valid email address.");
    return; // stop the form from submitting
    }

    // Check if passwords match 
    if (password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then(cred=>console.log(cred));
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    alert("Signup successful!");
    navigate('/');
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email Address:</label>
        <input
        id="signup-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
        id="signup-password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
