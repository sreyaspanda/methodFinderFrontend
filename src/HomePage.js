import React, { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home Page'; // Set the document title for the login page
    }, []);
  
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page content.</p>
        </div>
    );
};

export default HomePage;