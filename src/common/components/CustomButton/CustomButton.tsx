import styled from 'styled-components';
import { colors } from '../../../layout/theme/colors';

interface ButtonProps {
  height?: string;
  primary?: string;
  disabled?: boolean;
  children: string;
  type?: string;
  onClick?: () => void;
}

// CustomButton component
const CustomButton: React.FC<ButtonProps> = ({ children, height, primary, disabled, type, onClick }) => {
  return (
    <StyledButton height={height} primary={primary} disabled={disabled} type={type} onClick={onClick}>
      {disabled ? 'Unavailable' : children}
    </StyledButton>
  );
};

export default CustomButton;

// Styled button with conditional styling based on props
const StyledButton = styled.button<ButtonProps>`
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  color: ${({ primary }) => (primary === 'true' ? `${colors.white}` : `${colors.blue}`)};
  background: ${({ primary }) => (primary === 'true' ? `${colors.blue}` : `${colors.white}`)};
  border: ${({ primary }) => (primary === 'true' ? 'none' : `1px solid ${colors.blue}`)};
  height: ${({ height }) => height || 'auto'};
  &:hover {
    color: ${({ primary }) => (primary === 'true' ? `${colors.white}` : `${colors.darkBlue}`)};
    background: ${({ primary }) => (primary === 'true' ? `${colors.darkBlue}` : `${colors.white}`)};
    border: ${({ primary }) => (primary === 'true' ? 'none' : `1px solid ${colors.darkBlue}`)};
  }
  &:disabled {
    color: ${({ primary }) => (primary === 'true' ? `${colors.white}` : `${colors.darkGray}`)};
    background: ${({ primary }) => (primary === 'true' ? `${colors.darkGray}` : '#FFF')};
    border: ${({ primary }) => (primary === 'true' ? 'none' : `1px solid ${colors.darkGray}`)};
    cursor: not-allowed;
  }
`;
