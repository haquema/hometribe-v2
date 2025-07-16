import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    // Log all query params as an object
    const queryParams = Object.fromEntries(params.entries());
    console.log('Query params:', queryParams);
  }, [location.search]);
  // const { token, user, logout } = useAuth();
  // const [loading, setLoading] = useState(true);
  // const [profile, setProfile] = useState(user);
  // const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login');
  //     return;
  //   }
  //   if (!user) {
  //     // Fetch user profile if not already in context
  //     fetch('/api/user/profile', {
  //       headers: { Authorization: `Bearer ${token}` }
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data.success) setProfile(data.user);
  //         else {
  //           setError('Could not fetch profile');
  //           logout();
  //           navigate('/login');
  //         }
  //       })
  //       .catch(() => {
  //         setError('Network error');
  //         logout();
  //         navigate('/login');
  //       })
  //       .finally(() => setLoading(false));
  //   } else {
  //     setLoading(false);
  //   }
  // }, [token, user, logout, navigate]);

  // if (loading) return <div className="text-center mt-8">Loading...</div>;
  // if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  // if (!profile) return null;

  return (
    <h1>Well done on making it here!</h1>
  );
};

export default ProfilePage;