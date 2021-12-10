import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

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
    <div className="panel">
      <div className='navBar'>
        <div>
          <span className='Text-Style-5'>Bookstore CMS</span>
        </div>
        <div>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.id} className='navList'>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className='profileIcon'>
        <span><FaUser style={{color: '#0290ff', fontSize: '50px'}}/></span>
      </div>
    </div>
  );
};

export default Navbar;
