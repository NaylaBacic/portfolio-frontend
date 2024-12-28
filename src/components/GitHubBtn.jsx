/* eslint-disable react/prop-types */

// Componente que renderiza un botón de GitHub (vista Home)
export const GitHubBtn = ({ href }) => {
  return (
    <li>
      <a className='github' aria-label='GitHub' href={href} target='_blank'>
        <i className='fab fa-github'></i>
      </a>
    </li>
  );
};
