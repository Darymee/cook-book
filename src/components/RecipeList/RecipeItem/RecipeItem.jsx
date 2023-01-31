import { Link, useLocation } from 'react-router-dom';

import { CategoryList } from 'components/UI/CategoryList/CategoryList';

import { Item, ImgWrapper, InfoWrapper, Name } from './RecipeItem.styles';
import { Info } from 'components/UI/InfoBlock/InfoBlock';

export const RecipeItem = ({ recipe }) => {
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'recipes/' : '';

  const { name, time, url, categories, calorie, rating } = recipe;
  return (
    <Item>
      <Link
        to={`${currentUrl}${name}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ImgWrapper>
          <img src={url} alt={name} />
        </ImgWrapper>
        <InfoWrapper>
          <Name>{name}</Name>
          <CategoryList categories={categories} />
          <Info time={time} calorie={calorie} rating={rating} />
        </InfoWrapper>
      </Link>
    </Item>
  );
};
