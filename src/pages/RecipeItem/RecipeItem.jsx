import { useParams } from 'react-router-dom';

import { Title } from 'components/UI/Title/Title';
import {
  CardWrapper,
  ImgWrapper,
  InfoWrapper,
  Description,
} from './RecipeItem.styled';

import recipes from '../../recipes.json';

export const RecipeItem = () => {
  let { name } = useParams();

  const recipe = recipes.filter(function (recipe) {
    return recipe.name === name;
  });

  const item = recipe[0];

  console.log(recipe);
  return (
    <CardWrapper style={{ display: 'flex' }}>
      <ImgWrapper>
        <img src={item.url} alt={item.name} />
      </ImgWrapper>
      <InfoWrapper>
        <Title>{item.name}</Title>
        <Description>{item.description}</Description>
      </InfoWrapper>
    </CardWrapper>
  );
};
