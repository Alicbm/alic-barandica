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
        <li
          className={section == "Inicio" ? "active" : ""}
          onClick={() => { 
            setSection("Inicio");
            setState(false);
           }}
        >
          <a href="#Home">Inicio</a>
        </li>
        <li
          className={section == "Sobre mi" ? "active" : ""}
          onClick={() => {
            setSection("Sobre mi")
            setState(false);
          }}
        >
          <a href="#AboutMe">Sobre mi</a>
        </li>
        <li
          className={section == "Proyectos" ? "active" : ""}
          onClick={() => {
            setSection("Proyectos");
            setState(false);
          }}
        >
          <a href="#Proyects">Proyectos</a>
        </li>
        <li
          className={section == "Herramientas" ? "active" : ""}
          onClick={() => {
            setSection("Herramientas");
            setState(false);
          }}
        >
          <a href="#Tools">Herramientas</a>
        </li>
        <li
          className={section == "Detalles" ? "active" : ""}
          onClick={() => {
            setSection("Detalles");
            setState(false);
          }}
        >
          <a href="#DetailsAboutMe">Detalles</a>
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
