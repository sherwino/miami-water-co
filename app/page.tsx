
export default function Home() {
  return (
    <div className="w-full h-full">
    <main className="flex overflow-hidden">
       <video className="top-0 absolute w-screen h-screen object-cover" src="https://s3.amazonaws.com/wino-feed/testFeed/bvd/miami-water.mp4" autoPlay playsInline loop muted></video>
       {/* <div className="absolute top-0 left-0 w-lvw h-lvh bg-black/30 backdrop-blur-sm"></div> */}

     </main>
    </div>
  );
}
