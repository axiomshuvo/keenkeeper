"use client";

import { createContext, useState } from "react";

const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [interaction, setInteraction] = useState([]);

  const addInteraction = (type, date) => {};

  return (
    <FriendsContext.Provider value={{}}>{children}</FriendsContext.Provider>
  );
};

export { FriendsContext, FriendsProvider };
