import { useEffect } from 'react';
import { useState } from 'react';

import { Card } from '../components/Card';
import { Spinner } from '../components/Spinner';

/* VISTA PROYECTOS */
export const Projects = () => {
  /* Estado donde se guardará la respuesta de la API */
  const [projects, setProjects] = useState([]);

  // Hace un GET a la API para obtener los proyectos
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/projects')
      .then((response) => response.json())
      .then((data) => {
        // Guarda los proyectos en el estado
        setProjects(() => data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <section className='work' id='work'>
      <h2 className='heading'>
        <i className='fas fa-laptop-code'></i> Proyectos <span>Realizados</span>
      </h2>

      <div className='box-container'>
        {/* Si el array tiene al menos  1 elemento hace un MAP y por cada elemento renderiza una tarjeta (componente Card) */}
        {projects.length ? (
          projects.map((project) => <Card key={project._id} project={project} />)
        ) : (
          <div className='loader-container'>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Spinner />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
