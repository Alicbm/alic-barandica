import { Header } from "./components/Header";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Proyects } from "./components/Proyects";
import { Tools } from "./components/Tools";
import { DetailsAboutMe } from "./components/DetailsAboutMe";
import { Footer } from "./components/Footer";
import './App.css';

export function App() {
  return (
    <>
    <Header />
    <main className="App">
      <Home />
      <div className="App-container">
        <AboutMe />
        <Proyects />
        <Tools />
        <DetailsAboutMe />
      </div>
    </main>
      <Footer />
    </>
  );
}