import { TittleSection } from "../../utils/TittleSection";
import { Detail } from "./components/Detail";
import './DetailsAboutMe.css';

const listDetails = [
  {
    title: "¿Cómo aprendo?",
    description: "Soy un apasionado del aprendizaje autodidacta. Me encanta usar plataformas como Platzi, YouTube y la documentación oficial de los lenguajes de programación para seguir creciendo y descubriendo cosas nuevas. La curiosidad me impulsa a aprender cada día un poco más."
  },
  {
    title: "Forma de trabajar",
    description: "Como programador, descubrí el poder de la modularización, una técnica que me permitió descomponer problemas complejos en partes manejables y claras. Desde entonces, me apasiona dividir las tareas en componentes más simples, lo que facilita su resolución y mejora la eficiencia. Además, siempre busco automatizar procesos repetitivos, porque creo firmemente que el tiempo es un recurso valioso. Para mí, aplicar el principio de Pareto —centrarme en lo que realmente importa— es la clave para maximizar el impacto y optimizar esfuerzos."
  },
  {
    title: "¿Qué me hace único?",
    description: "Persistencia. Estoy convencido de que la persistencia es la clave para alcanzar cualquier objetivo. Por más complejo que sea un problema, siempre habrá una solución disponible para mi. No hay montaña demasiado alta ni río demasiado profundo que pueda frenar mi determinación. Lo que quiero, lo conseguiré, porque la perseverancia transforma los obstáculos en oportunidades."
  },
  {
    title: "Filosofía de vida",
    description: 'Hay una bella frase de Aristóteles que, desde que la escuché, adopté como parte de mi filosofía de vida: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito". Creo profundamente en el poder de los hábitos y la disciplina para lograr el éxito. Por eso, me esfuerzo cada día por mejorar, superar mis límites y ser una versión cada vez más avanzada de mí mismo.'
  },
  {
    title: "¿Qué me motiva?",
    description: "Me motiva profundamente saber que mi conocimiento puede ser útil para los demás. No hay sensación más gratificante que escuchar que alguien logró resolver un proyecto gracias a mi ayuda, o que, gracias a mis explicaciones, pudo entender un tema y aprobar un examen, como ha sucedido en las asesorías y monitorías que he brindado. Tener un impacto positivo en la vida de las personas es una de las principales razones que me impulsa a seguir aprendiendo y mejorando cada día."
  },
  {
    title: "Recordatorio",
    description: "No olvides que eres increible 🫡."
  }
]

export function DetailsAboutMe () {
  return (
    <section className="DetailsAboutMe" id="DetailsAboutMe">
      <TittleSection 
        title="Detalles sobre mi"
        description="Conocer realmente a una persona no es fácil, pero aquí te dejo algunos detalles que te ayudarán a comprender mejor quién soy, tanto profesional como personalmente."
      />

      <div className="DetailsAboutMe-container">
        {listDetails.map((detail, index) => (
          <Detail key={index} title={detail.title} description={detail.description} />
        ))}
      </div>
    </section>
  )
}