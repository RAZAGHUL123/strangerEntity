import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userProfile, setUserProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Replace with the actual Stranger's Things API endpoint for user profiles
        const response = await axios.get('https://strangers-things.herokuapp.com/api/your-cohort-name/users/userId'); // Replace 'your-cohort-name' and 'userId' with actual values
        if (response.data.success) {
          setUserProfile(response.data.data.user);
          setIsLoading(false);
        } else {
          console.error('Error fetching user profile:', response.data.error.message);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="profile">
      <h2>User Profile</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {userProfile.username}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          {/* Add more user profile information here */}
        </div>
      )}
    </div>
  );
}

export default Profile;
