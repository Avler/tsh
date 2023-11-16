import styled from 'styled-components';
import { colors } from '../theme/colors';

const Logo = () => {
  return <LogoImage>join.tsh.io</LogoImage>;
};

export default Logo;

const LogoImage = styled.h3`
  color: ${colors.black};
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
`;
