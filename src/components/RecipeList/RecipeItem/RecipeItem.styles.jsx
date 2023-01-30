import styled from '@emotion/styled';

export const Item = styled.li`
  cursor: pointer;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  box-shadow: -1px 5px 19px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 1000ms cubic-bezier(0.25, 0.69, 0.59, 0.24);

  &:hover,
  &:focus {
    box-shadow: -1px 14px 19px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const ImgWrapper = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);

  overflow: hidden;

  height: 320px;
`;

export const InfoWrapper = styled.div`
  padding: 20px 20px;
`;

export const Name = styled.h3`
  font-family: 'Luckiest Guy', cursive;
  font-size: 20px;
  text-align: center;
  color: ${(p) => p.theme.colors.green};
  margin-bottom: 10px;
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const CategoryItem = styled.li`
  padding: 5px 7px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.types[p.type]};
  margin-left: 10px;
  text-transform: capitalize;
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoItem = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  & > svg {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
`;
