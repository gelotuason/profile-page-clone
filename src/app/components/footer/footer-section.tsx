import FooterIcons from "./footer-icons";

export default function FooterSection() {
    return (
        <section className="text-center text-sm tracking-tighter mb-9">
            <p className="font-semibold tracking-tighter text-base">Socials</p>

            <div className="flex gap-6 justify-center mt-2">
                <FooterIcons />
            </div>

            <div className="mt-5">
                <p className="font-black">GLDNHRVST.</p>
                <p className="mt-1">Golden Harvest</p>
                <p className="mt-1">© ZwiftTech. All Right Reserved.</p>
            </div>
        </section>
    )
}