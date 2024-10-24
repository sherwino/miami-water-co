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
        <div className="w-full h-full px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4 md:gap-4">
            {/* Left Column - splits into two rows */}
            <div className="grid grid-rows-2 gap-2 md:gap-4 mt-8 md:mt-0 h-[45vh] md:h-auto">
              {/* Top Cell - Title Image */}
              <div className="flex items-center justify-center md:items-start md:justify-start">
                <div className="w-[250px] md:w-auto">
                  <Image
                    src="/title-text.png"
                    alt="Miami Water Wax Logo"
                    width={714}
                    height={349}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Cell - Stacked Logos */}
              <div className="relative flex flex-col items-center md:items-start">
                <div className="w-[150px] md:w-auto md:ml-36">
                  <Image
                    src="/miami-water-wax-logo-alpha.png"
                    alt="Miami Water Wax Logo"
                    width={369}
                    height={370}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="w-[250px] md:w-auto md:-mt-8 -mt-4">
                  <Image
                    src="/wax-logo-text.png"
                    alt="Miami Water Wax Logo Text"
                    width={724}
                    height={177}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Badge Logo */}
            <div className="relative flex items-center justify-center md:justify-end w-full h-[45vh] md:h-full">
              <div className="w-[250px] md:w-auto md:mr-24">
                <Image
                  src="/miami-water-badge-logo.png"
                  alt="Miami Water Badge Logo"
                  width={664}
                  height={801}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
