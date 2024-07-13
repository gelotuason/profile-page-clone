import ServicesDescription from "./services-desc";
import ServicesSamples from "./services-samples";

export default function ServicesSection() {
    return (
        <section>
            <h1 className="font-bold">Our Services</h1>
            <ServicesDescription />
            <ServicesSamples />
        </section>
    )
}