// PrivateRoute.js

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; // For redirecting the user
import { auth  } from '../firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged for tracking auth state

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Manage auth state

  useEffect(() => {
    // Check if user is authenticated
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

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Loading state while checking authentication
  }

  // If the user is authenticated, return the protected page (element)
  // If the user is not authenticated, redirect to login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
