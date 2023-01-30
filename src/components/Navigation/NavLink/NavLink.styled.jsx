import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavItem = styled.li`
  margin-left: 40px;

  font-family: 'Luckiest Guy', cursive;
  font-size: 22px;
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 8px;
`;
