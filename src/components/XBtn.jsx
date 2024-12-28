/* eslint-disable react/prop-types */

// Componente que renderiza un botón de X (vista Home)
export const XBtn = ({ href }) => {
  return (
    <li>
      <a className='twitter' aria-label='Twitter' href={href} target='_blank'>
        <i className='fab fa-x-twitter'></i>
      </a>
    </li>
  );
};
