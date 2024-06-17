import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

export const Context = createContext({
  isAuthenticated: false,
  user: {},
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App /> {/* Render the App component */}
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper /> {/* Wrap AppWrapper with React.StrictMode */}
  </React.StrictMode>
);
