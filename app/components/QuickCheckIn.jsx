"use client";

import Image from "next/image";
import { useContext } from "react";
import toast from "react-hot-toast";
import callIcon from "../../assets/call-icon.png";
import textIcon from "../../assets/text-icon.png";
import videoIcon from "../../assets/video-icon.png";
import { FriendsContext } from "../context/FriendsContext";

export default function QuickCheckIn({ friend }) {
  const { addInteraction } = useContext(FriendsContext);
  const handleClick = (type) => {
    toast.success(` you ${type}  with ${friend.name}`);
    addInteraction(type, friend);
    console.log(`Added ${type} interaction with ${friend.name}`);
  };

  return (
    <div className=" bg-base-100 rounded-xl shadow-xl p-10 ">
      <h2 className="font-semibold text-xl mb-5 text-left ">Quick Check-In</h2>
      <div className="grid grid-cols1 md:grid-cols-3 gap-4">
        <div
          onClick={() => {
            handleClick("call");
          }}
          className="bg-slate-100 cursor-pointer rounded-xl shadow-xl flex flex-col items-center justify-center p-4 space-y-2 py-5 text-xl"
        >
          <Image src={callIcon} alt="Snooze 2 Weeks" width={20} height={20} />
          <span>Call</span>
        </div>
        <div
          onClick={() => {
            handleClick("text");
          }}
          className="bg-slate-100 cursor-pointer rounded-xl shadow-xl flex flex-col items-center justify-center p-4 space-y-2 py-5 text-xl "
        >
          <Image src={textIcon} alt="Snooze 2 Weeks" width={20} height={20} />
          <span>Text</span>
        </div>
        <div
          onClick={() => {
            handleClick("video");
          }}
          className="bg-slate-100 cursor-pointer rounded-xl shadow-xl flex flex-col items-center justify-center p-4 space-y-2 py-5 text-xl  "
        >
          <Image src={videoIcon} alt="Snooze 2 Weeks" width={20} height={20} />
          <span>video</span>
        </div>
      </div>
    </div>
  );
}
