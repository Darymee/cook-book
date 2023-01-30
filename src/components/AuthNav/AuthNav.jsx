import { NavLink } from 'components/Navigation/NavLink/NavLink';

const links = [
  { name: 'Create new recipe', path: '/creator' },
  { name: 'Login', path: '/login' },
];

export const AuthNav = () => {
  return (
    <ul style={{ marginLeft: 'auto', display: 'flex' }}>
      {links.map((link, index) => (
        <NavLink key={index} link={link} />
      ))}
    </ul>
  );
};
