import { Route, Routes, Navigate } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Create } from 'pages/Create';
import { RecipePage } from 'pages/RecipePage/RecipePage';

import { AppBar } from './components/Header/AppBar';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { PageWrapper } from 'components/UI/PageWrapper/PageWrapper';
import { Login } from 'pages/Login/Login';

function App() {
  return (
    <Wrapper>
      <AppBar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new" element="" />
          <Route path="recipes" element="" />
          <Route path="recipes/:name" element={<RecipePage />} />

          <Route path="creator" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element="" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PageWrapper>
    </Wrapper>
  );
}

export default App;
