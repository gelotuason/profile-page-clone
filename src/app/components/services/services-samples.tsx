'use client'

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
        <div className="mt-6">
            {
                sampleImages.map(sample => (
                    <Image
                        src={sample.src}
                        width={700}
                        height={700}
                        alt={sample.name}
                        className="w-full mb-2 rounded-lg"
                    />
                ))
            }
        </div>
    )
}