import { NavLink } from 'react-router-dom';

// Componente que renderiza la barra de navegación (todas las vistas)
export const Navbar = () => {
  const handleMenuClick = (e) => {
    const menu = e.currentTarget;
    menu.classList.toggle('fa-times');
    const navbar = document.querySelector('.navbar');
    navbar?.classList.toggle('nav-toggle');
  };

  const closeHamburguer = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('fa-times');
    const navbar = document.querySelector('.navbar');
    navbar?.classList.toggle('nav-toggle');
  };

  return (
    <header>
      <NavLink to='/' className='logo'>
        <i className='fab fa-node-js'></i>&nbsp;&nbsp;&nbsp;&nbsp;Nayla
      </NavLink>

      <i id='menu' className='fas fa-bars' onClick={handleMenuClick}></i>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeHamburguer}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/proyectos'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeHamburguer}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contacto'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeHamburguer}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
