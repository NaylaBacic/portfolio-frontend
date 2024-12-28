/* eslint-disable react/prop-types */

// Componente que renderiza un proyecto en un card (vista Proyectos)
export const Card = ({ project }) => {
  return (
    <div className='box tilt'>
      <img src={project.image} alt='Imagen del proyecto' />
      <div className='content'>
        <div className='tag'>
          <h3>{project.title}</h3>
        </div>
        <div className='desc'>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};
