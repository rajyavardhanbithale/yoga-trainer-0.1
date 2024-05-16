import Features from "./components/HomePage/Features";
import Background from "./components/HomePage/Background";
import Stats from "./components/HomePage/Stats";
import Hero from "./components/HomePage/Hero";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import Practice from "./components/HomePage/Practice";

export default function Home() {

  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Hero></Hero>


      <div id="hallmark" className="mx-auto w-[90%] my-40">
        <Features />
      </div>


      <div id="stats" className="mx-auto w-[90%] my-40">
        <Stats />
      </div>
      <div id="stats" ></div>

      <div id="stats" className="mx-auto w-[90%] my-40">
        <Practice />
      </div>

      <Footer></Footer>
    </>
  );
}
