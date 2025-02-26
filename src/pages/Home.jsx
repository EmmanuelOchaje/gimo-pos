import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Steps from "../components/Home/Steps";
import Potential from "../components/Home/Potential";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-cl">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Steps />
      <Potential />
      <Footer />
    </div>
  );
};

export default Home;
