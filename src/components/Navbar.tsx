// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <span>{user?.username} ({user?.role})</span>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      {user?.role === 'Admin' && <Link to="/settings">Settings</Link>}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;