import ServicesSamples from "./services-samples";

export default function ServicesSection() {
    return (
        <section className="section-text">
            <h1 className="font-bold tracking-tighter">Our Services</h1>
            <p className="mt-3 tracking-tighter text-gray-500 font-medium">
                Lorem Ipsum is simply dummy text of the printing and typewriting industry.
            </p>
            <ServicesSamples />
        </section>
    )
}