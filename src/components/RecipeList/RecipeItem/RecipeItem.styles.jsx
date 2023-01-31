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
  color: ${p => p.theme.colors.green};
  margin-bottom: 10px;
`;
