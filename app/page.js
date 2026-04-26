import { Suspense } from "react";
import FriendsLoader from "./components/FriendsLoader";
import Hero from "./components/Hero";
import Friends from "./friends/Friends";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/friends.json`,
  );
  const keenKeeperFriends = await res.json();
  return (
    <div className="container mx-auto">
      <Hero keenKeeperFriends={keenKeeperFriends} />
      <Suspense fallback={<FriendsLoader />}>
        <Friends />
      </Suspense>
    </div>
  );
}
