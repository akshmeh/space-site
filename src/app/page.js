import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="main main-home" style="background-image: url(./assets/home/background-home-desktop.jpg)">
    <Navbar/>
    <main className="flex flex-col lg:flex-row">
      <div className="lg:w-3/5 p-10 lg:p-20 lg:pt-32 text-center lg:text-left">
        <h2 className="text-2xl mb-8">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className=" text-8xl mb-8">SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="flex justify-center lg:block lg:w-2/5 pb-10 lg:p-20 lg:pt-32">
        <Link href={"/destination"} className="bg-white rounded-full w-60 h-60 text-center text-[#0B0D17] text-3xl flex items-center justify-center explore-animate">Explore</Link>
      </div>
    </main>
    </div>
    
    </>
  )
}
