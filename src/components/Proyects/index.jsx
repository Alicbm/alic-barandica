import { TittleSection } from "../../utils/TittleSection";
import { Proyect } from "./components/Proyect";
import informe_cepal from '../../images/informe_cepal.png';
import informe_mercado_laboral_col from '../../images/informe_mercado_laboral_col.png';
import pegado_geih from '../../images/tasa_desempleo.png';
import automatizacion_cepal from '../../images/automatizacion_cepal.png';
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import './Proyects.css'

export function Proyects() {
  useAnimateOnScroll(".animate-on-scroll");

  return (
    <section className="Proyects animate-on-scroll" id="Proyects">
      <TittleSection 
        title="Explora mis proyectos"
        description="Automatización de procesos, extracción de datos, desarrollo de plataformas y más" 
      />

      <div className="Proyects-container">
        <Proyect 
          title="Informe para Ámerica Latina y el Caribe"
          image={informe_cepal}
          description='Informe basado en datos de la CEPAL que analiza América Latina y el Caribe a lo largo de diversos años. Incluye indicadores clave sobre población, economía, mercado laboral, pobreza y desigualdad. Con filtros dinámicos por año y país, permite estudiar comportamientos específicos, siendo una herramienta esencial para comprender la economía regional.'
          web_url="https://app.powerbi.com/view?r=eyJrIjoiMzFiYWYxZjYtMjBmNi00ZGJjLTljODItNDg5YzYzNjNjNTUwIiwidCI6ImZkNjljZTFiLTIwYzYtNDJlYy1iNTRlLTZkMWIzODcwYWM2ZSIsImMiOjR9"
          github_url="https://github.com/Alicbm/cepal_scraping"
        />
        <Proyect 
          title="Informe del Mercado Laboral Colombiano"
          image={informe_mercado_laboral_col}
          description='Este informe ofrece un análisis detallado del mercado laboral y social en Colombia, abarcando datos mensuales desde enero de 2022 hasta julio de 2024. Organizado en cinco secciones principales (Población y Territorio, Mercado Laboral, Mercado Laboral por Género, Trabajadores Informales e Inmigrantes Venezolanos), este estudio cubre los 24 principales departamentos del país, incluida Bogotá.'
          web_url="https://app.powerbi.com/view?r=eyJrIjoiNWFjMTczZDctZDQ4YS00YzkxLTg1M2UtYzRhYTBiYTM3YTMxIiwidCI6ImZkNjljZTFiLTIwYzYtNDJlYy1iNTRlLTZkMWIzODcwYWM2ZSIsImMiOjR9"
          github_url="https://app.powerbi.com/view?r=eyJrIjoiNWFjMTczZDctZDQ4YS00YzkxLTg1M2UtYzRhYTBiYTM3YTMxIiwidCI6ImZkNjljZTFiLTIwYzYtNDJlYy1iNTRlLTZkMWIzODcwYWM2ZSIsImMiOjR9"
        />
        <Proyect 
          title="Automatización del Empalme de la GEIH"
          image={pegado_geih}
          description="La GEIH, compuesta por múltiples módulos y carpetas, puede ser compleja de consolidar. Esta guía práctica transforma este proceso, haciéndolo más sencillo y eficiente. Además, hemos creado herramientas para calcular variables económicas clave, como la tasa de desempleo y la tasa de ocupación, y para validar la correcta integración de los datos."
          web_url="https://data-exploration.vercel.app/"
          github_url="https://github.com/Alicbm/data-exploration/"
        />
        <Proyect 
          title="Automatizando Descargas de Bases de Datos"
          image={automatizacion_cepal}
          description="Desarrollé un script en Python con Selenium para automatizar la descarga de bases de datos de la CEPAL en su sección de demografía. El script navega por las subcategorías, aplica los filtros necesarios, descarga los archivos en Excel y los guarda en una carpeta específica. Además, crea dinámicamente tablas en SQL, respetando los tipos de datos y estructura de las tablas descargadas, todo de forma automatizada."
          web_url="https://app.powerbi.com/view?r=eyJrIjoiMzFiYWYxZjYtMjBmNi00ZGJjLTljODItNDg5YzYzNjNjNTUwIiwidCI6ImZkNjljZTFiLTIwYzYtNDJlYy1iNTRlLTZkMWIzODcwYWM2ZSIsImMiOjR9"
          github_url="https://github.com/Alicbm/cepal_scraping"
        />
      </div>
    </section>
  )
}