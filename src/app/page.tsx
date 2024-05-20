import Hero from "@/components/Home/Hero";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CrossPlatform from "@/components/Home/CrossPlatform";

export default function Home() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <main className="flex-1">
        <Hero />
        <CrossPlatform />
      </main>

      <Footer />
    </div >
  );
}
