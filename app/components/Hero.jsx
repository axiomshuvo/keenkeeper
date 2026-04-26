"use client";

import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";

export default function Hero({ keenKeeperFriends = [] }) {
  const { interaction } = useContext(FriendsContext);

  // Calculate stats
  const totalFriends = keenKeeperFriends.length;

  const onTrack = keenKeeperFriends.filter(
    (f) => f.status === "on-track",
  ).length;

  const needAttention = keenKeeperFriends.filter(
    (f) => f.status === "almost due" || f.status === "overdue",
  ).length;

  const interactionsThisMonth = interaction.length;

  return (
    <>
      <div className="hero max-w-5xl mt-20 mb-10 mx-auto ">
        <div className="hero-content w-full text-center">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-gray-800">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-slate-500 ">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn btn-primary  bg-teal-800 ">
              + Add a Friend
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className=" flex flex-col items-center py-10 bg-base-100 rounded-lg shadow-md cursor-pointer ">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  {totalFriends}
                </h2>
                <p>Total Friends</p>
              </div>
              <div className=" flex flex-col items-center py-10  bg-base-100 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  {onTrack}
                </h2>
                <p>On Track</p>
              </div>
              <div className=" flex flex-col items-center py-10  bg-base-100 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  {needAttention}
                </h2>
                <p>Need Attention</p>
              </div>
              <div className=" flex flex-col items-center py-10  bg-base-100 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  {interactionsThisMonth}
                </h2>
                <p>Interactions This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
