import Hero from "./components/Hero";
import Friends from "./friends/Friends";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Friends />
    </div>
  );
}
