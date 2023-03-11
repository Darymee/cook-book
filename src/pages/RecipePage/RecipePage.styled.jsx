import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
  /* width: 500px; */
  border-radius: 10px;
  /* overflow: hidden; */
  margin-right: 40px;
  flex-grow: 1;
`;

export const InfoWrapper = styled.div`
  flex-grow: 1;
`;

export const Description = styled.p`
  display: inline-block;
  text-align: center;
  font-family: 'Luckiest Guy', cursive;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.pink};
`;

export const IngredientsTitle = styled.h3`
  font-family: 'Luckiest Guy', cursive;
  margin-bottom: 10px;
  font-size: 20px;
  color: ${p => p.theme.colors.green};
`;

export const IngredientItem = styled.li`
  list-style: square;
  font-family: 'Luckiest Guy', cursive;
`;
