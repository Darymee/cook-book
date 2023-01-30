import { Title } from 'components/UI/Title/Title';
import recipes from '../recipes.json';

export const Create = () => {
  const categories = recipes.map((recipe) => recipe.category);
  let arr = [];
  for (let category of categories) {
    console.log(category);
    arr.push(...category);
  }
  const uniqueCategories = [...new Set(arr)];

  return (
    <>
      <Title>Recipe creator</Title>
      <form>
        <label for="name">Recipe Name</label>
        <input name="name" type="text" id="name" />
        <label for="time">Cooking time</label>
        <input name="time" id="time" />
        <div>
          <p>Select Recipe Categories</p>
          {uniqueCategories.map((category) => (
            <label for={category}>
              <input
                key={category}
                type="checkbox"
                id={category}
                value={category}
              />
              {category}
            </label>
          ))}
        </div>

        <input type="file" />
        <textarea></textarea>
        <button type="submit">Create new Recipe</button>
      </form>
    </>
  );
};
