import { NavLink } from './NavLink/NavLink';

import { NavList } from './Navigation.styled';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'New', path: '/new' },
];

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        {links.map((link, index) => (
          <NavLink key={index} link={link} />
        ))}
      </NavList>
    </nav>
  );
};
