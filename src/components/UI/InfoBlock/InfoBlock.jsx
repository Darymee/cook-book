import {
  IoFastFoodOutline,
  IoTimeOutline,
  IoStarOutline,
} from 'react-icons/io5';

import { InfoBlock, InfoItem, InfoText } from './InfoBlock.styled';

export const Info = ({ time, calorie, rating, size }) => {
  return (
    <InfoBlock>
      <InfoItem size={size}>
        <IoTimeOutline />
        <InfoText size={size}>{time}</InfoText>
      </InfoItem>
      <InfoItem size={size}>
        <IoFastFoodOutline />
        <InfoText size={size}>{calorie} cal</InfoText>
      </InfoItem>
      <InfoItem rating={rating} size={size}>
        <IoStarOutline />
        <InfoText size={size} rating={rating}>
          {rating}
        </InfoText>
      </InfoItem>
    </InfoBlock>
  );
};
