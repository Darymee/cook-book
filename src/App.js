import { Route, Routes, Navigate } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Create } from 'pages/Create';
import { RecipeItem } from 'pages/RecipeItem/RecipeItem';

import { AppBar } from './components/Header/AppBar';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { PageWrapper } from 'components/UI/PageWrapper/PageWrapper';

function App() {
  return (
    <Wrapper>
      <AppBar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new" element="" />
          <Route path="recipes" element="" />
          <Route path="recipes/:name" element={<RecipeItem />} />

          <Route path="creator" element={<Create />} />
          <Route path="login" element="" />
          <Route path="register" element="" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PageWrapper>
    </Wrapper>
  );
}

export default App;
