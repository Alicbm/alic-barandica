import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from "../../images/logo.png";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        <div className="footer-container__logo">
          <img src={logo} alt="Alic Barandica Mejía" />

          <div className="footer-container__logo-content">
            <h4>Alic Barandica Mejía</h4>
            <p>Analista de Datos</p>
          </div>
        </div>

        <div className="footer-container__social">
          <p>/Redes Sociales</p>

          <div className="footer-container__social-content">
            <a
              href="https://www.linkedin.com/in/alic-barandica/"
              target="_blank"
            >
              <span>
                <FaLinkedin />
              </span>{" "}
              LinkedIn
            </a>

            <a href="https://www.github.com/Alicbm" target="_blank">
              <span>
                <FaGithubSquare />
              </span>{" "}
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-container__social">
          <p>/Contáctame</p>

          <div className="footer-container__social-content">
            <a
              href="mailto:abarandica1234@gmail.com"
              target="_blank"
            >
              <span>
                <IoMdMail />
              </span>{" "}
              abarandica1234@gmail.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
