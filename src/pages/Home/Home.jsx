import { Title } from 'components/UI/Title/Title';
import { RecipeList } from 'components/RecipeList/RecipeList';

export const Home = () => {
  return (
    <>
      <Title>Home cooking recipes with photos</Title>
      <RecipeList />
    </>
  );
};
