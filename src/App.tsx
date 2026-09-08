import Navbar      from "@/components/organisms/Navbar";
import Hero        from "@/components/organisms/Hero";
import Services    from "@/components/organisms/Services";
import Work        from "@/components/organisms/Work";
import About       from "@/components/organisms/About";
import Contact     from "@/components/organisms/Contact";
import Footer      from "@/components/organisms/Footer";
import SectionDots from "@/components/atoms/SectionDots";

export default function App() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Navbar />
      <SectionDots />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
