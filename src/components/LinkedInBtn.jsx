/* eslint-disable react/prop-types */

// Componente que renderiza un botón de LinkedIn (vista Home)
export const LinkedInBtn = ({ href }) => {
  return (
    <li>
      <a className='linkedin' aria-label='LinkedIn' href={href} target='_blank'>
        <i className='fab fa-linkedin'></i>
      </a>
    </li>
  );
};
