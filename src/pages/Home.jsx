// Home.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation, useNavigate for redirecting
import { auth } from '../firebase'; // Import Firebase auth
import { signOut } from 'firebase/auth'; // Import signOut function from Firebase
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged for tracking auth state

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const navigate = useNavigate(); // useNavigate hook for redirecting after logout

  // Check authentication status on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    // Cleanup the subscription when the component is unmounted
    return () => unsubscribe();
  }, []);

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await signOut(auth); // Log the user out
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Conditionally render the logout button if the user is authenticated */}
      {isAuthenticated && (
        <button onClick={handleLogout}>Log Out</button>
      )}
    </div>
  );
}

export default Home;
