import { BiSolidRightArrow } from "react-icons/bi";
import './TittleSection.css'

export function TittleSection({ title, description }) {
  return (
    <div className="TittleSection">
      <div className="TittleSection-title">
        <span className="TittleSection-title__arrow">
          <BiSolidRightArrow />
        </span>
        <h2 className="TittleSection-title__title">{title}</h2>
      </div>

      <p className="TittleSection-description">{description}</p>
    </div>
  );
}
