import { NavItem, Link } from './NavLink.styled';

export const NavLink = ({ link }) => {
  return (
    <NavItem>
      <Link to={link.path}>{link.name}</Link>
    </NavItem>
  );
};
