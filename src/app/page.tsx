import Features from "./components/HomePage/Features";
import Background from "./components/HomePage/Background";
import Stats from "./components/HomePage/Stats";
import Hero from "./components/HomePage/Hero";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import Practice from "./components/HomePage/Practice";
import HeroExtended from "./components/HomePage/HeroExtended";


export default function Home() {

  return (
    <>
      <Background></Background>
      <Navbar></Navbar>


      <div className="w-[90%] mt-10 mx-auto">

        <Hero></Hero>
      </div>

      <div className="mt-10 sm:mt-5">
        <HeroExtended />

      </div>
      <div id="hallmark" className="mx-auto sm:w-[90%] mt-20">
        <Features />
      </div>

      <div id="stats" className="mx-auto w-[90%] mt-40">
        <Stats />
      </div>
      <div id="stats" ></div>

      <div id="stats" className="mx-auto w-[90%] mt-40">
        <Practice />
      </div>

      <div className="mt-40">
      <Footer></Footer>

      </div>
    </>
  );
}
