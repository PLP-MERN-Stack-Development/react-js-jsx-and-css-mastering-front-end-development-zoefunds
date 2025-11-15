import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">ReactTailwindApp</Link>
        <div className="flex items-center space-x-3">
          <NavLink to="/" className={({isActive}) => isActive ? 'underline' : ''}>Home</NavLink>
          <NavLink to="/tasks" className={({isActive}) => isActive ? 'underline' : ''}>Tasks</NavLink>
          <Button variant="secondary" onClick={toggle}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  );
}