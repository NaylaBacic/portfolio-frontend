/* eslint-disable react/prop-types */

// Componente que renderiza un botón de Instagram (vista Home)
export const InstagramBtn = ({ href }) => {
  return (
    <li>
      <a className='instagram' aria-label='Instagram' href={href}>
        <i className='fab fa-instagram' target='_blank'></i>
      </a>
    </li>
  );
};
