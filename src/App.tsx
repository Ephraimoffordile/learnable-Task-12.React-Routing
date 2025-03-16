import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import { AuthProvider, useAuth } from './contexts/AuthContext';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user?.role === 'Admin' ? children : <Navigate to="/dashboard" />;
};


function App() {
  return (
    <div >
    <div className="main-container">
      <h1>Welcome to your bestSet</h1>
      <p>welcome to your homepage!!.</p>
      <button>Click Me for Authentication</button>
    </div>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Navbar />
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Navbar />
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AdminRoute>
                <Navbar />
                <Settings />
              </AdminRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
    </div>

  );
}

export default App;