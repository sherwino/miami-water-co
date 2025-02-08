import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://s3.amazonaws.com/wino-feed/testFeed/bvd/miami-water-bg-video.mp4"
        poster="/bg-video-placeholder.jpg"
        autoPlay
        playsInline
        loop
        muted
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Content Container - 16:9 Aspect Ratio */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-[1920px] aspect-video relative px-4">
          {/* Stacked Images Container */}
          <div className="absolute inset-0">
            {/* Title Image */}
            <div className="absolute inset-0">
              <Image
                src="/mwc-text-heading.png"
                alt="Miami Water Wax Logo"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Wax Seal Logo */}
            <div className="absolute inset-0">
              <Image
                src="/mwc-wax-seal-logo.png"
                alt="Miami Water Wax Logo"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Sub Heading */}
            <div className="absolute inset-0">
              <Image
                src="/mwc-sub-heading.png"
                alt="Miami Water Wax Logo Text"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Badge Logo */}
            <div className="absolute inset-0">
              <Image
                src="/mwc-badge-logo.png"
                alt="Miami Water Badge Logo"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
