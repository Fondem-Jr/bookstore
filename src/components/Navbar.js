import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <div className="navBar">
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
          <p>Profile Pic</p>
      </div>
    </div>
  );
};

export default Navbar;
