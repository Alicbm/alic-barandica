import { IoMdContact } from "react-icons/io";
import { FaTasks, FaUserCircle } from "react-icons/fa";
import "./Home.css";

export function Home() {
  return (
    <section className="home" id="Home">
      <div className="home-container">
        <div className="home-container__content">
          <h1 className="home-container__content-title">Alic Barandica,</h1>
          <h1 className="home-container__content-title">Analista de Datos</h1>
          <p className="home-container__content-subtitle">
            Análisis con propósito, resultados que cuentan
          </p>
          <div className="home-container__content-buttons">
            <a href="#footer">
            <button className="main-button">
              <span><FaUserCircle /></span>
              Contáctame
            </button>
            </a>
            <a href="#Proyects">
            <button className="secondary-button">
              <span><FaTasks /></span>
              Ver proyectos
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
