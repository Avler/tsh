import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { ProductType } from '../../types/productType';
import { colors } from '../../../../layout/theme/colors';

interface ProductModalProps {
  product: ProductType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <StyledModal show={isOpen} onHide={onClose} closeButton>
      <StyledModalHeader closeButton></StyledModalHeader>
      <StyledModalBody>
        <StyledImage src={product.image} alt={product.name} />
        <StyledModalTitle>{product.name}</StyledModalTitle>
        <StyledModalDes>{product.description}</StyledModalDes>
      </StyledModalBody>
    </StyledModal>
  );
};

export default ProductModal;

const StyledModal = styled(Modal)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 600px;
  height: 530px;
  padding: 0px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  @media (max-width: 600px) {
    width: 327px;
    height: 570px;
  }
`;

const StyledModalHeader = styled(Modal.Header)`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  z-index: 10;
`;

const StyledModalTitle = styled(Modal.Title)`
  margin-left: 15px;
  margin-top: 15px;
  height: 50px;
  color: ${colors.black};

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  @media (max-width: 600px) {
    height: 65px;
  }
`;

const StyledModalDes = styled.p`
  margin-left: 15px;
  margin-top: 10px;
  height: 80px;
  color: ${colors.darkGray};

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  @media (max-width: 600px) {
    height: 120px;
  }
`;

const StyledModalBody = styled(Modal.Body)`
  padding: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
`;
