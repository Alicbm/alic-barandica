import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import "./Proyect.css";

export function Proyect({
  title,
  image,
  description,
  web_url,
  github_url,
}) {
  return (
    <div className="Proyect">
      <div className="Proyect-container">
        <div className="Proyect-container__title">
          <h4>{title}</h4>
        </div>

        <div className="Proyect-container__content">
          <img src={image} alt={title} />

          <p>{description}</p>
        </div>
      </div>

      <div className="Proyect-container__buttons">
        <button>
          <a href={web_url} target="_blank">
            Ver Proyecto
            <span>
              <HiExternalLink />
            </span>
          </a>
        </button>

        <button>
          <a href={github_url} target="_blank">
            Ver Código
            <span>
              <FaGithub />
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}
