import { CategoryUl, CategoryItem } from './CategoryList.styled';

export const CategoryList = ({ categories, size }) => {
  return (
    <CategoryUl>
      {categories.map((category, index) => (
        <CategoryItem key={index} type={category} size={size}>
          <p>{category}</p>
        </CategoryItem>
      ))}
    </CategoryUl>
  );
};
