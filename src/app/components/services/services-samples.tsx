import Image from "next/image";

export default function ServicesSamples() {
    const sampleImages = [
        {
            src: '/services-photo-1.jpg', name: 'Services Sample 1'
        },
        {
            src: '/services-photo-2.jpg', name: 'Services Sample 2'
        }
    ]

    return (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 w-full h-[640px] lg:h-[480px] lg:space-x-2 space-y-2 lg:space-y-0">
            {
                sampleImages.map(sample => (
                    <div key={sample.name} className="relative col-span-1">
                        <Image
                            src={sample.src}
                            layout="fill"
                            alt={sample.name}
                            className="object-cover mb-2 rounded-lg"
                        />
                    </div>
                ))
            }
        </div>
    )
}