import HeaderSection from "./components/header/header-section";
import BackgroundSection from "./components/background/background-section";
import ServicesSection from "./components/services/services-section";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <HeaderSection />
      <hr />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-2xl mt-4">Golden Wedding</h1>
        <BackgroundSection />
        <ServicesSection />
      </div>
    </main>
  );
}
