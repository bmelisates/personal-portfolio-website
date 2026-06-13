import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F9F9F9] dark:bg-[#121212] text-[#1F2937] dark:text-[#E5E7EB] transition-colors duration-300 antialiased overflow-x-hidden w-full selection:bg-[#EA2678]/30">
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      {/* Çemberler (Dekoratif) */}
      {/* Gri Çember */}
      <div
        className="hidden xl:block absolute border-[#4731D4] dark:border-[#CBF281] rounded-full pointer-events-none z-0 opacity-20"
        style={{
          width: "121px",
          height: "121px",
          top: "650px",
          left: "1038px",
          borderWidth: "21px",
        }}
      ></div>
      {/* Pembe Çember */}
      <div
        className="hidden xl:block absolute border-[#EA2678] dark:border-[#CBF281] rounded-full pointer-events-none z-0"
        style={{
          width: "121px",
          height: "121px",
          top: "990px",
          right: "-40px",
          borderWidth: "21px",
        }}
      ></div>
    </div>
  );
}
