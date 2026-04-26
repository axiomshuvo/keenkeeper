"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import callIcon from "../../assets/call-icon.png";
import textIcon from "../../assets/text-icon.png";
import videoIcon from "../../assets/video-icon.png";
import { FriendsContext } from "../context/FriendsContext";

export default function Timeline() {
  const { interaction } = useContext(FriendsContext);

  const iconType = (interaction) => {
    if (interaction.type === "call") return callIcon;
    if (interaction.type === "text") return textIcon;
    if (interaction.type === "video") return videoIcon;
  };

  const [filter, setFilter] = useState("all");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredInteractions =
    filter === "all"
      ? interaction
      : interaction.filter((item) => item.type === filter);

  return (
    <div className="container mx-auto p-20 min-h-screen ">
      <h1 className="text-5xl font-bold">Timeline</h1>
      <div className="my-8 ">
        <select
          className="select select-lg select-accent cursor-pointer "
          name=""
          id=""
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All Interactions</option>
          <option value="call">Calls</option>
          <option value="text">Texts</option>
          <option value="video">Videos</option>
        </select>
      </div>
      <div className="space-y-4">
        {filteredInteractions.length === 0 ? (
          <div className="text-center mt-10 bg-base-100 rounded-2xl text-teal-900 py-25 space-y-2.5">
            <h2 className="text-3xl font-semibold">No interactions yet 😔</h2>
            <p className="text-lg">
              Start by calling, texting, or video chatting with a friend.
            </p>
          </div>
        ) : (
          filteredInteractions.map((item) => (
            <div
              key={item.id}
              className=" bg-base-100 shadow-xl flex flex-row items-center p-4 rounded-xl"
            >
              <Image
                src={iconType(item)}
                alt={item.type}
                width={40}
                height={40}
              />

              <div className="ml-4">
                <h2>
                  {item.type} with {item.friendName}
                </h2>

                <h4>{new Date(item.createdAt).toLocaleString()}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
