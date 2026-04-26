import { Suspense } from "react";
import FriendsLoader from "./components/FriendsLoader";
import Hero from "./components/Hero";
import Friends from "./friends/Friends";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Suspense fallback={<FriendsLoader />}>
        <Friends />
      </Suspense>
    </div>
  );
}
