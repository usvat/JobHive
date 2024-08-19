import React, { createContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client"; // Import from react-dom/client
import App from "./App.jsx";
import axios from "axios";

export const Context = createContext({ isAuthorized: false });

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "/api/v1/user/getuser",
          { withCredentials: true }
        );
        setUser(data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
        setUser(null); // Clear user state on error
      }
    };

    fetchUser();
  }, []);

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // Create the root
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
