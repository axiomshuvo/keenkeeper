"use client";

import { createContext, useState } from "react";

const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [interaction, setInteraction] = useState([]);

  const addInteraction = (type, friend) => {
    const allType = ["call", "text", "video"];

    if (!allType.includes(type)) {
      console.error("Invalid interaction type");
      return;
    }

    if (!friend || !friend.id) {
      console.error("Invalid friend object");
      return;
    }

    // console.log(friend);

    const newInteraction = {
      type,
      friendId: friend.id,
      friendName: friend.name,
      createdAt: new Date().toISOString(),
    };
    setInteraction((prev) => [...prev, newInteraction]);
  };

  return (
    <FriendsContext.Provider value={{ interaction, addInteraction }}>
      {children}
    </FriendsContext.Provider>
  );
};

export { FriendsContext, FriendsProvider };
