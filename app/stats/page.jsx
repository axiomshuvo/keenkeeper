"use client";
import { useContext } from "react";

import { Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../context/FriendsContext";

export default function Stats() {
  const { interaction } = useContext(FriendsContext);
  console.log(interaction);

  // count types
  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };
  interaction.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });
  const data = [
    { name: "Call", value: counts.call, fill: "#14b8a6" },
    { name: "Text", value: counts.text, fill: "#3b82f6" },
    { name: "Video", value: counts.video, fill: "#f59e0b" },
  ];
  console.log("Chart data:", data);

  const MyPie = () => (
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      outerRadius="80%"
      innerRadius="60%"
    />
  );

  return (
    <div className="container mx-auto p-20 min-h-screen ">
      <h1 className="text-5xl font-bold text-teal-950 ">
        Friendship Analytics
      </h1>
      {interaction.length === 0 ? (
        <div className="text-center mt-10 bg-base-100 rounded-2xl text-teal-900 py-25 space-y-2.5">
          <h2 className="text-3xl font-semibold">No Analytics yet 😔</h2>
        </div>
      ) : (
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <MyPie />
            <Tooltip />
          </PieChart>
        </div>
      )}
    </div>
  );
}
