import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from "../../images/logo.png";
import "./Header.css";

export function Header() {
  const [state, setState] = useState(false);
  const [section, setSection] = useState("Inicio");

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Alic Barandica Mejía" />
      </div>

      {state && (
        <div className="header-iconClose" onClick={() => setState(!state)}>
          <IoClose />
        </div>
      )}

      <ul className={state ? "header-menu active" : "header-menu inactive"}>
        <li className={section == "Inicio" ? "active" : ""}>
          <a
            href="#Home"
            onClick={() => {
              setSection("Inicio");
              setState(false);
            }}
          >
            Inicio
          </a>
        </li>
        <li className={section == "Sobre mi" ? "active" : ""}>
          <a
            href="#AboutMe"
            onClick={() => {
              setSection("Sobre mi");
              setState(false);
            }}
          >
            Sobre mi
          </a>
        </li>
        <li className={section == "Proyectos" ? "active" : ""}>
          <a
            href="#Proyects"
            onClick={() => {
              setSection("Proyectos");
              setState(false);
            }}
          >
            Proyectos
          </a>
        </li>
        <li className={section == "Herramientas" ? "active" : ""}>
          <a
            href="#Tools"
            onClick={() => {
              setSection("Herramientas");
              setState(false);
            }}
          >
            Herramientas
          </a>
        </li>
        <li className={section == "Detalles" ? "active" : ""}>
          <a
            href="#DetailsAboutMe"
            onClick={() => {
              setSection("Detalles");
              setState(false);
            }}
          >
            Detalles
          </a>
        </li>
      </ul>

      <div className="header-contact">
        <a href="#footer">
          <button className="main-button">Contacto</button>
        </a>
      </div>

      <div className="header-iconMenu">
        <span onClick={() => setState(!state)}>
          <IoMdMenu />
        </span>
      </div>
    </header>
  );
}
