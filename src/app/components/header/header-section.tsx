import Image from "next/image";
import ProfileCard from "../profile-card/profile-card";

export default function HeaderSection() {
    return (
        <section>
            <Image
                src="/cover-photo.jpg"
                width={820}
                height={312}
                alt="Cover Photo"
                className="w-full"
            />
            <ProfileCard />
        </section>
    )
}