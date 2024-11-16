import useLenis from "./components/useLenis";
import Footer from "./Footer";
import Hero from "./Hero";
import "./index.css";
import MainSection from "./MainSection";

function App() {
  useLenis();

  return (
    <>
      <div
        style={{ fontWeight: "400" }}
        className="flex flex-col items-center justify-center"
      >
        <Hero />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
