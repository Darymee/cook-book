import { Link } from 'react-router-dom';

import {
  LogoIcon,
  LogoWrapper,
  LogoText,
  LogoLousing,
} from './LogoGroup.styles';

export const LogoGroup = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <LogoWrapper>
        <LogoIcon />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '5px',
          }}
        >
          <LogoText>CookBook</LogoText>
          <LogoLousing>The Best Recipes Ever</LogoLousing>
        </div>
      </LogoWrapper>
    </Link>
  );
};
