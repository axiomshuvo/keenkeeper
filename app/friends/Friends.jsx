"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        console.log("Fetched friends data:", data);
      });
  }, []);

  return (
    <div className="pb-25">
      <h1>Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="flex justify-center flex-col items-center rounded-xl shadow-sm bg-base-100 p-5 space-y-2"
          >
            <Image
              className="rounded-full"
              src={friend.picture}
              alt={friend.name}
              width={100}
              height={100}
            />
            <h2>{friend.name}</h2>

            <div className="flex flex-col items-center space-y-2">
              <span>{friend.lastContact}</span>
              <span className="flex gap-1">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="badge badge-info">
                    {tag}
                  </span>
                ))}
              </span>
              <span className="badge badge-warning">{friend.status}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
