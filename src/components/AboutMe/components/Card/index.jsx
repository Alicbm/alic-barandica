import useAnimateOnScroll from '../../../../hooks/useAnimateOnScroll';
import './Card.css'

export function Card ({ icon, title, description, shadow = false }) {
  useAnimateOnScroll(".animate-on-scroll");

  return(
    <div className={`Card ${shadow ? 'shadow' : ''}`}>
      <div className="Card-icon animate-on-scroll">
        {icon}
      </div>
      <div className="Card-content">
        <h3 className="Card-content__title">{title}</h3>
        <p className="Card-content__description">{description}</p>
      </div>
    </div>
  )
}