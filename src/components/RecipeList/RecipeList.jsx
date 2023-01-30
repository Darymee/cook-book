import recipes from '../../recipes.json';
import { List } from './Recipe.styled';
import { RecipeItem } from './RecipeItem/RecipeItem';

export const RecipeList = () => {
  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </List>
  );
};
