import React from 'react';
import { Navbar, Nav, Form, FormControl, Container, FormCheck } from 'react-bootstrap';
import CustomButton from '../../common/components/CustomButton/CustomButton';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
import Logo from '../logo/Logo';
import searchIcon from '../assets/magnifier.svg';
import { ROUTES } from '../../modules/app/routes';
import { useNavigate } from 'react-router-dom';
interface NavBarProps {
  setSearchTerm: (term: string) => void;
  setIsActiveFilter: (isActive: boolean) => void;
  setIsPromoFilter: (isPromo: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setSearchTerm, setIsActiveFilter, setIsPromoFilter }) => {

    const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Active checkbox change handler
  const handleActiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsActiveFilter(event.target.checked);
  };

  // Promo checkbox change handler
  const handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPromoFilter(event.target.checked);
  };

  return (
    <StyledNavbar>
      <StyledCont className="d-none d-xl-flex ">
        <Logo />
        <Nav>
          <Form className="d-flex flex-column flex-lg-row">
            <SearchCont>
              <SearchBar type="search" placeholder="Search" onChange={handleSearchChange} />
              <StyledIcon src={searchIcon} alt="search" />
            </SearchCont>

            <CheckBoxWrapper>
              <StyledCheckbox type="checkbox" label="Active" id="active-check" onChange={handleActiveChange} />
              <StyledCheckbox type="checkbox" label="Promo" id="promo-check" onChange={handlePromoChange} />
            </CheckBoxWrapper>
          </Form>
        </Nav>
        <ButtonCont>
          <CustomButton height="36px" onClick={() =>navigate(ROUTES.login())}>Log in</CustomButton>
        </ButtonCont>
      </StyledCont>
      <StyledCont className="d-flex flex-column d-xl-none gap-2 mt-5">
        <StyledContMobile>
          {' '}
          <Logo />
          <ButtonCont>
            <CustomButton height="36px">Log in</CustomButton>
          </ButtonCont>
        </StyledContMobile>

        <Nav>
          <Form className="d-flex flex-column flex-lg-row gap-2">
            <SearchCont>
              <SearchBar type="search" placeholder="Search" onChange={handleSearchChange} />
              <StyledIcon src={searchIcon} alt="search" />
            </SearchCont>

            <CheckBoxWrapper>
              <StyledCheckbox type="checkbox" label="Active" id="active-check" onChange={handleActiveChange} />
              <StyledCheckbox type="checkbox" label="Promo" id="promo-check" onChange={handlePromoChange} />
            </CheckBoxWrapper>
          </Form>
        </Nav>
      </StyledCont>
    </StyledNavbar>
  );
};

export default NavBar;

const StyledCont = styled(Container)`
  display: flex;
  gap: 80px;
  padding: 0px 80px;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
const StyledContMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
`;

const SearchCont = styled.div`
  width: 392px;
  position: relative;
  @media (max-width: 768px) {
    width: 329px;
    margin-right: 30px;
  }
`;
const StyledIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 14px;
`;

const ButtonCont = styled.div`
  width: 88px;
`;

const StyledNavbar = styled(Navbar)`
  width: 100%;
  height: 143px;
`;

const SearchBar = styled(FormControl)`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
`;

const StyledCheckbox = styled(FormCheck)`
  &.form-check {
    display: flex;
    align-items: center;
    .form-check-input {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid #e0e2ea;
      margin-right: 0.5rem;
      &:checked {
        background-color: #4460f7;
        border-color: #4460f7;
      }
      &:focus {
        box-shadow: none;
      }
    }
    .form-check-label {
      margin-bottom: 0;
    }
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  .form-check {
    margin-left: 1rem;
  }
`;
