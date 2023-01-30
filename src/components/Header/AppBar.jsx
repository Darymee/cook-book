import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { LogoGroup } from '../UI/LogoGroup/LogoGroup';

import { Header, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Wrapper>
        <LogoGroup />
        <Navigation />
        <AuthNav />
      </Wrapper>
    </Header>
  );
};
