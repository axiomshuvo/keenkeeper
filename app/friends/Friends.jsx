import FriendCard from "./FriendCard";

export default async function Friends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/friends.json`,
  );
  const friends = await res.json();

  return (
    <div className="pb-25">
      <h1 className="text-4xl font-bold text-teal-800 my-10">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
