import Image from "next/image";
import ProfileCard from "../profile-card/profile-card";

export default function HeaderSection() {
    return (
        <section className="w-full">
            <div className="relative min-h-40 md:h-64 lg:h-72">
                <Image
                    src="/cover-photo.jpg"
                    fill
                    quality={100}
                    alt="Cover Photo"
                    className="object-cover"
                    priority
                />
            </div>
            <ProfileCard />
        </section>
    )
}