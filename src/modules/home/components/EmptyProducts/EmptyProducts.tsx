import styled from 'styled-components';
import bagImg from '../../../../layout/assets/bag.svg';
import { colors } from '../../../../layout/theme/colors';

const EmptyProducts = () => {
  return (
    <StyledCont>
      <img src={bagImg} alt="" />
      <ContTitle>Ooops… It’s empty here</ContTitle>
      <ContDes>There are no products on the list</ContDes>
    </StyledCont>
  );
};

export default EmptyProducts;

const StyledCont = styled.div`
  width: 600px;
  height: 344px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 8px;
  gap: 22px;
  margin-bottom: 100px;
  @media (max-width: 650px) {
    width: 327px;
  }
`;
const ContTitle = styled.h2`
  color: ${colors.black};

  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
const ContDes = styled.p`
  color: ${colors.gray};

  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
