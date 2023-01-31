import styled from '@emotion/styled';

export const CategoryUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 10px;
`;

export const CategoryItem = styled.li`
  font-family: 'Luckiest Guy', cursive;
  padding: 5px 7px;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.types[p.type]};
  margin-left: 10px;
  text-transform: capitalize;
  font-size: ${p => {
    if (p.size === 'big') {
      return '20px';
    }
  }};
`;
