import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../../../common/components/CustomButton/CustomButton';
import star from '../../../../layout/assets/star.svg';
import starEmpty from '../../../../layout/assets/starEmpty.svg';
import { colors } from '../../../../layout/theme/colors';

interface CardComponentProps {
  image: string;
  title: string;
  text: string;
  rating: number;
  promo?: boolean;
  active: boolean;
  onShowDetails: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ image, title, text, rating, promo, active, onShowDetails }) => (
  <Card className="card">
    <CardImage src={image} alt={title} active={active} />
    <CardBody>
      {promo && <PromoBadge>Promo</PromoBadge>}
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <StarRating>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
            {index < rating ? <StarImg src={star} alt="star" /> : <StarImg src={starEmpty} alt="star empty" />}
          </span>
        ))}
      </StarRating>
      <ButtonCont>
        <CustomButton primary="true" height="38px" disabled={active} onClick={onShowDetails}>
          Show detalis
        </CustomButton>
      </ButtonCont>
    </CardBody>
  </Card>
);

export default CardComponent;

const Card = styled.div`
  width: 288px;
  height: 420px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column; // Stack the children vertically
  justify-content: space-between; // Distributes space around items
  overflow: hidden; // Keeps the image within the border-radius
  background: white;
  gap: 0;
`;

const CardImage = styled.img<{ active: boolean }>`
  height: 170px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: ${props => (props.active ? 'grayscale(100%)' : 'none')};
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 18px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
`;

const StarRating = styled.div`
  color: #ffc107; // color for the stars
`;

const StarImg = styled.img`
  height: 16px;
`;

const PromoBadge = styled.span`
  width: 75px;
  text-align: center;
  background-color: ${colors.orange};
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  position: absolute;
  top: 1rem;
  left: 0rem;
`;

const ButtonCont = styled.div`
  width: 256px;
  margin-top: 16px;
  margin-bottom: 8px;
`;
