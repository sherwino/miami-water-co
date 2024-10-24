import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://s3.amazonaws.com/wino-feed/testFeed/bvd/miami-water-bg-video.mp4"
        autoPlay
        playsInline
        loop
        muted
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Content Grid */}
      <div className="relative z-10 h-full">
        <div className="w-full h-full px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4">
            {/* Left Column - splits into two rows */}
            <div className="grid grid-rows-2 gap-4">
              {/* Top Cell - H3 Text */}
              <div className="flex items-start flex-col text-center">
              <Image src="/title-text.png" alt="Miami Water Wax Logo" width={714} height={349} className="object-contain" />
                {/* <h3 className="text-white text-6xl font-bold w-full bg-purple-300">
                  Behing the curtain, magic is happening
                </h3> */}
                {/* <p className="text-5xl">The grand unveiling of our website is coming soon</p> */}
              </div>

              {/* Bottom Cell - Logo 1 */}
              <div className="relative flex flex-col">
                <Image
                  src="/miami-water-wax-logo-alpha.png"
                  alt="Miami Water Wax Logo"
                  width={369}
                  height={370}
                  className="object-contain ml-36"
                  priority
                />
                <Image
                  src="/wax-logo-text.png"
                  alt="Miami Water Wax Logo Text"
                  width={724}
                  height={177}
                  className="object-contain -mt-8"
                  priority
                />
              </div>
            </div>

            {/* Right Column - full height logo */}
            <div className="relative flex items-center justify-end w-full h-full">
              <Image
                src="/miami-water-badge-logo.png"
                alt="Miami Water Badge Logo"
                width={664}
                height={801}
                className="object-contain mr-24"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
