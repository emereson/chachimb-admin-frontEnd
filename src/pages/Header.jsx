import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pagesStyle/Header.css';

const Header = ({ userData }) => {
  const location = useLocation();
  const [url, setUrl] = useState('/');
  const [viewHeader, setViewHeader] = useState(false);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  const closeSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/#/log-in';
  };

  return (
    <header
      className={`header_container ${
        viewHeader ? 'header_viewContainer' : null
      }`}
      onMouseOut={() => setViewHeader(false)}
      onMouseOver={() => setViewHeader(true)}
    >
      <section
        className="header_sectionOne"
        style={viewHeader ? { opacity: '1' } : null}
      >
        <i class="bx bxs-user-circle"></i>
        <p>
          {userData?.name?.toUpperCase()}{' '}
          {userData?.lastName?.toUpperCase()}
        </p>
      </section>
      <section className="header_sectionTwo">
        <Link className="header_sectionTwo_link" to="/universities">
          <i class="bx bxs-school"></i>
          <p>Universidades</p>
        </Link>
        <Link className="header_sectionTwo_link" to="/users">
          <i class="bx bxs-user"></i>
          <p>Usuarios</p>
        </Link>
        <Link className="header_sectionTwo_link" to="/register">
          <i class="bx bxs-user-rectangle"></i>
          <p>Administradores</p>
        </Link>

        <a className="header_sectionTwo_link" onClick={closeSesion}>
          <i class="bx bxs-door-open"></i>
          <p>Cerrar sesión</p>
        </a>
      </section>
    </header>
  );
};

export default Header;
