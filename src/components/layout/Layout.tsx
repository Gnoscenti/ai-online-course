import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjusted path

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out", error);
      // Optionally, show an error message to the user
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white p-4 shadow-lg font-sans">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <img 
            src="/logo192.png" 
            alt="AI Integration Course Logo" 
            className="h-10 w-10 rounded-full border-2 border-blue-300"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://via.placeholder.com/40?text=AI";
            }}
          />
          <span className="text-2xl font-headings font-bold hover:text-blue-200 transition-colors">
            AI Integration Course
          </span>
        </NavLink>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) => 
            `hover:text-blue-200 transition-colors px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-headings font-bold text-white' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => 
            `hover:text-blue-200 transition-colors px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-headings font-bold text-white' : ''}`
          }>
            Courses
          </NavLink>
          {currentUser && (
            <NavLink to="/recap" className={({ isActive }) => 
              `hover:text-blue-200 transition-colors px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-headings font-bold text-white' : ''}`
            }>
              Recaps
            </NavLink>
          )}
          {currentUser ? (
            <button 
              onClick={handleLogout} 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors font-headings"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => 
                `hover:text-blue-200 transition-colors px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-headings font-bold text-white' : ''}`
              }>
                Login
              </NavLink>
              <NavLink to="/signup" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors font-headings">
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-blue-800 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-bold' : 'hover:bg-blue-700'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-bold' : 'hover:bg-blue-700'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </NavLink>
            {currentUser && (
              <NavLink 
                to="/recap" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-bold' : 'hover:bg-blue-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Recaps
              </NavLink>
            )}
            {currentUser ? (
              <button 
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }} 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-left"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700 font-bold' : 'hover:bg-blue-700'}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink 
                  to="/signup" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Outlet />
      </main>
      <footer className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white p-6 text-center font-sans">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">AI Integration Course</h3>
              <p className="text-blue-200">Master AI Integration Today</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 border-t border-blue-800 pt-4">
            <p>&copy; {new Date().getFullYear()} AI Integration Course. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

