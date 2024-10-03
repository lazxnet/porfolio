import styles from './ProjectsStyles.module.css';
import nebulosa from '../../assets/nebulosa.png';
import bookhub from '../../assets/bookhub.png';
import ahorrosmart from '../../assets/ahorrosmart.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nebulosa}
          link="https://github.com/lazxnet/nebulosa-web"
          h3="Nebulosa"
          p="App de Clima"
        />
        <ProjectCard
          src={bookhub}
          link="https://github.com/lazxnet/bookhub"
          h3="BookHub"
          p="Libreria Digital"
        />
        <ProjectCard
          src={ahorrosmart}
          link="https://github.com/lazxnet/ahorrosmart"
          h3="AhorroSmart"
          p="App de Ahorro"
        />
        
      </div>
    </section>
  );
}

export default Projects;
