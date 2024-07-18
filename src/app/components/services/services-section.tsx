import ServicesDescription from "./services-desc";
import ServicesSamples from "./services-samples";

export default function ServicesSection() {
    return (
        <section className="section-text">
            <h1 className="font-bold tracking-tighter">Our Services</h1>
            <ServicesDescription />
            <ServicesSamples />
        </section>
    )
}