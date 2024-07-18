import HeaderSection from "./components/header/header-section";
import BackgroundSection from "./components/background/background-section";
import ServicesSection from "./components/services/services-section";

export default function Home() {
  return (
    <main className="min-w-screen max-w-[1220px] mx-auto">
      <HeaderSection />
      <hr />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="section-title mt-4 tracking-tighter">Golden Wedding</h1>
        <BackgroundSection />
        <ServicesSection />
      </div>
    </main>
  );
}
