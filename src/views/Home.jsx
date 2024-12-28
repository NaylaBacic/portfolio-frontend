import { GitHubBtn } from '../components/GitHubBtn';
import { InstagramBtn } from '../components/Instagrambtn';
import { LinkedInBtn } from '../components/LinkedInBtn';
import { Waves } from '../components/Waves';
import { XBtn } from '../components/XBtn';
import Typewriter from '../components/Typewriter';

/* VISTA INICIO */
export const Home = () => {
  // Frases para la "máquina de escribir" 
  const phrases = [
    'Desarrolladora Full Stack.',
    'Apasionada por la programación.',
    'Fanática del diseño UX/UI.',
  ];

  return (
    <>
      <section className='home' id='home'>
        <div className='content'>
          <h2>
            👋 Hola,
            <br />
            soy Nayla <span>Bacic</span>
          </h2>

          {/* Componente "Máquina de Escribir" */}
          <Typewriter phrases={phrases} typingSpeed={120} pauseTime={1500} />

          <a href='#about' className='btn'>
            <span>Más sobre mí</span>
            <i className='fas fa-arrow-circle-down'></i>
          </a>
          <div className='socials'>
            <ul className='social-icons'>
              {/* Componentes Botones */}
              <LinkedInBtn href='https://ar.linkedin.com/in/nayla-al%C3%ADn-bacic-5307ba200' />
              <GitHubBtn href='https://github.com/NaylaBacic' />
              <InstagramBtn href='https://www.instagram.com/naybacic/' />
              {/*  */}
            </ul>
          </div>
        </div>
        <div className='image'>
          <img draggable='false' className='tilt' src='hero.png' alt='' />
        </div>

        {/* Componente "ondas" */}
        <Waves />
      </section>
      <section className='about' id='about'>
        <h2 className='heading'>
          <i className='fas fa-user-alt'></i> Sobre <span>mi</span>
        </h2>

        <div className='row'>
          <div className='image'>
            <img draggable='false' className='tilt' src='profile.png' alt='' />
          </div>
          <div className='content'>
            <h3>Soy Nayla</h3>
            <span className='tag'>Desarrolladora Full Stack</span>

            {/* biografía */}
            <p>
              Soy una desarrolladora Full-Stack que vive en Buenos Aires. Soy muy apasionada por
              mejorar mis habilidades de codificación y desarrollar aplicaciones y sitios web.
              Construyo WebApps y sitios web usando MERN Stack. Trabajo por mi cuenta para mejorar
              mis habilidades. Me encanta construir clones Full-Stack.
            </p>

            <div className='box-container'>
              <div className='box'>
                <p>
                  {/* email */}
                  <span> email : </span> naylabacic@hotmail.com
                </p>
                <p>
                  {/* ciudad de residencia */}
                  <span> lugar : </span> Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div className='resumebtn'>
              {/* Google Drive */}
              <a href='https://drive.google.com/file/d/1WhHC7VKlMG_t8XY6y-j2i51uROq9WGFZ/view?usp=sharing' target='_blank' className='btn'>
                <span>Descagar mi CV</span>
                <i className='fas fa-chevron-right'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
