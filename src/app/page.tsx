import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="size-full bg-blue-500">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}
