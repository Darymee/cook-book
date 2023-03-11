import styled from '@emotion/styled';

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

    height: ${p => {
      if (p.size === 'big') {
        return '40px';
      }
      return '25px';
    }};
    width: ${p => {
      if (p.size === 'big') {
        return '40px';
      }
      return '25px';
    }};
    stroke: ${p => Color(p.rating)};
  }
`;

export const InfoText = styled.p`
  font-size: ${(p) => {
    if (p.size === 'big') {
      return '20px';
    }
  }};
`;

function Color(point) {
  if (!point) {
    return;
  }
  if (point === 1) {
    return '#b70d0e';
  }
  if (point > 1 && point <= 2) {
    return '#e57200';
  }
  if (point > 2 && point <= 3.5) {
    return '#e8d405';
  }
  if (point > 3 && point <= 4.5) {
    return '#65b47d';
  }
  return '#088446';
}
