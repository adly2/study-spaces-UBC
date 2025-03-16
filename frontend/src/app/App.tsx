import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import StudySpacesList from "../components/StudySpacesList.tsx";
import Footer from "../components/Footer.tsx";
import "../styles/globals.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <StudySpacesList />
      </main>
      <Footer />
    </div>
  );
}
