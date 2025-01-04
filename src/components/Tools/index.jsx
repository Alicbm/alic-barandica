import { FaPython } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPandas, SiNumpy, SiSelenium, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaRProject,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { MdDataset } from "react-icons/md";
import { TittleSection } from "../../utils/TittleSection";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import "./Tools.css";

const icons = [
  {
    icon: <FaPython className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Python",
    description:
      "Python es un lenguaje de programación versátil y poderoso, ampliamente utilizado en ciencia de datos, desarrollo web y automatización.",
  },
  {
    icon: <FaRProject className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "R",
    description:
      "R es un lenguaje y entorno de software para análisis estadístico y gráficos.",
  },
  {
    icon: <BsBarChartFill className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Power BI",
    description:
      "Power BI es una herramienta de Microsoft para la visualización interactiva de datos y business intelligence.",
  },
  {
    icon: <GrMysql className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "MySQL",
    description:
      "MySQL es un sistema de gestión de bases de datos relacional de código abierto.",
  },
  {
    icon: <BiLogoPostgresql className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "PostgreSQL",
    description:
      "PostgreSQL es un sistema de gestión de bases de datos relacional avanzado y de código abierto.",
  },
  {
    icon: <SiPandas className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Pandas",
    description:
      "Pandas es una biblioteca de Python para la manipulación y análisis de datos.",
  },
  {
    icon: <SiNumpy className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Numpy",
    description:
      "Numpy es una biblioteca de Python para cálculos numéricos y científicos.",
  },
  {
    icon: <SiSelenium className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Selenium",
    description:
      "Selenium es una herramienta para la automatización de pruebas de aplicaciones web.",
  },
  {
    icon: <IoLogoJavascript className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Javascript",
    description:
      "Javascript es un lenguaje de programación esencial para el desarrollo web, utilizado tanto en el frontend como en el backend.",
  },
  {
    icon: <FaReact className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "React Js",
    description:
      "React es una biblioteca de JavaScript para construir interfaces de usuario interactivas.",
  },
  {
    icon: <FaNodeJs className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Node Js",
    description:
      "Node.js es un entorno de ejecución para JavaScript que permite construir aplicaciones del lado del servidor.",
  },
  {
    icon: <SiExpress className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Express Js",
    description:
      "Express es un framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs.",
  },
  {
    icon: <FaGitAlt className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Git",
    description:
      "Git es un sistema de control de versiones distribuido, utilizado para el seguimiento de cambios en el código fuente.",
  },
  {
    icon: <FaDocker className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "Docker",
    description:
      "Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.",
  },
  {
    icon: <FaHtml5 className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "HTML",
    description:
      "HTML es el lenguaje de marcado estándar para crear páginas web.",
  },
  {
    icon: <FaCss3Alt className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "CSS",
    description:
      "CSS es un lenguaje de estilos utilizado para describir la presentación de documentos HTML.",
  },
  {
    icon: <MdDataset className="Tools-container__item-icon__icon animate-on-scroll" />,
    name: "DataTable",
    description:
      "DataTable es una herramienta de R para manejar y visualizar tablas de datos de manera eficiente.",
  },
];

export function Tools() {
  useAnimateOnScroll(".animate-on-scroll");

  return (
    <section className="Tools animate-on-scroll" id="Tools">
      <TittleSection
        title="Herramientas de dominio"
        description="Soy apasionado por el aprendizaje y, a través de la programación y el análisis de datos, he desarrollado un conjunto amplio de herramientas para enfrentar desafíos complejos"
      />

      <div className="Tools-container">
        {icons.map((item, index) => (
          <div className="Tools-container__item" key={index}>
            <div className="Tools-container__item-icon">
              {item?.icon}
              <p className="Tools-container__item-icon__text">
                {item?.description}
              </p>
            </div>
            <p>{item?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
