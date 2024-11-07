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

      {/* Content Container - 16:9 Aspect Ratio */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-[1920px] aspect-video relative px-4">
          <div className="absolute inset-0 grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="relative flex flex-col justify-between">
              {/* Top Title Image */}
              <div className="relative w-full pt-[10%]">
                <div className="relative w-[70%] min-w-[200px]">
                  <Image
                    src="/title-text.png"
                    alt="Miami Water Wax Logo"
                    width={714}
                    height={349}
                    className="object-contain w-full h-auto ml-[15%] lg:ml-[0%]"
                  />
                </div>
              </div>

              {/* Bottom Stacked Logos */}
              <div className="relative ml-[5%] lg:ml-[20%] mb-[10%]">
                <div className="relative w-[45%] min-w-[150px]">
                  <Image
                    src="/miami-water-wax-logo-alpha.png"
                    alt="Miami Water Wax Logo"
                    width={369}
                    height={370}
                    className="object-contain w-full h-auto ml-[25%] lg:ml-[0%]"
                    priority
                  />
                </div>
                <div className="relative w-[80%] min-w-[250px] -mt-4">
                  <Image
                    src="/wax-logo-text.png"
                    alt="Miami Water Wax Logo Text"
                    width={724}
                    height={177}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Badge Logo */}
            <div className="relative flex items-center justify-end">
              <div className="relative w-[60%] min-w-[200px] mr-[5%] lg:mr-[15%]">
                <Image
                  src="/miami-water-badge-logo.png"
                  alt="Miami Water Badge Logo"
                  width={664}
                  height={801}
                  className="object-contain w-full h-auto"
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
