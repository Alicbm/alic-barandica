import { GiTeacher } from "react-icons/gi";
import { FaBook, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { SiPlatzi } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { Card } from "./components/Card";
import { TittleSection } from "../../utils/TittleSection";
import "./AboutMe.css";

export function AboutMe() {
  return (
    <section className="AboutMe" id="AboutMe">
      <TittleSection
        title="Conoce un poco sobre mí" 
        description="Economista con enfoque en análisis de datos y programación. Platzinauta apasionado por el aprendizaje continuo."
      />

      <div className="AboutMe-cards">
        <Card
          icon={<FaChalkboardTeacher />}
          title="Asesorías"
          description="Líder del laboratorio del analítica de datos de la Universidad del Magdalena"
          shadow={true}
        />
        <Card
          icon={<GiTeacher />}
          title="Monitorias"
          description="Dicte clases sobre lenguajes de programación como Python y R"
        />
        <Card
          icon={<FaBook />}
          title="Investigación"
          description="Participé activamente en los semilleros de Ingeniería de Sistemas y Analítica de Datos"
          shadow={true}
        />
        <Card
          icon={<FaLaptopCode />}
          title="Desarrollador"
          description="Trabaje durante un año como desarrollador FullStack"
        />
        <Card
          icon={<SiPlatzi />}
          title="Platzinauta"
          description="He tomado más de 40 cursos en Platzi, sobre desarrollo de software y análisis de datos"
          shadow={true}
        />
        <Card
          icon={<FaUniversity />}
          title="Economista"
          description="Graduado en la Universidad del Magdalena"  
        />
      </div>

      <div className="AboutMe-buttons">
        <a href="https://www.linkedin.com/in/alic-barandica" target="_blank">
        <button className="AboutMe-buttons__button main-button">
          <GrLinkedin />
          LinkedIn
        </button>
        </a>

        <a href="https://www.github.com/Alicbm" target="_blank">
        <button className="AboutMe-buttons__button secondary-button">
          <FaGithub />
          GitHub
        </button>
        </a>
      </div>
    </section>
  );
}
