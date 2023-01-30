import { Link, useLocation } from 'react-router-dom';

import {
  IoFastFoodOutline,
  IoTimeOutline,
  IoStarOutline,
} from 'react-icons/io5';

import {
  Item,
  ImgWrapper,
  InfoWrapper,
  Name,
  InfoBlock,
  InfoItem,
  CategoryList,
  CategoryItem,
} from './RecipeItem.styles';

export const RecipeItem = ({ recipe }) => {
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'recipes/' : '';

  const { name, time, url, category, calorie, rating } = recipe;
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
          <CategoryList>
            {category.map((category, index) => (
              <CategoryItem key={index} type={category}>
                <p>{category}</p>
              </CategoryItem>
            ))}
          </CategoryList>
          <InfoBlock>
            <InfoItem>
              <IoTimeOutline />
              <p>{time}</p>
            </InfoItem>
            <InfoItem>
              <IoFastFoodOutline />
              <p>{calorie} cal</p>
            </InfoItem>
            <InfoItem rating={rating}>
              <IoStarOutline />
              <p>{rating}</p>
            </InfoItem>
          </InfoBlock>
        </InfoWrapper>
      </Link>
    </Item>
  );
};
