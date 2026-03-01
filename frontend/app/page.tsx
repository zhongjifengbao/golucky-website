import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Advantages />
      <Footer />
    </main>
  );
}
