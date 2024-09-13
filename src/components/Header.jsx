import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='menu-items'>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/cart'>Cart</NavLink>
      </li>
      <li>
        <NavLink to='/orders'>Orders</NavLink>
      </li>
      <li>
        <NavLink to='/payment'>Payment</NavLink>
      </li>
    </ul>
  );
};

export default Header;
