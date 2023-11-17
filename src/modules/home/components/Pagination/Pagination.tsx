import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (pageNumber: number) => void;
}

interface PageNumberProps {
  $isActive?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ total, current, onPageChange }) => {
  let pageNumbers: (number | string)[] = [];
  const ellipsis = '...';

  if (total <= 6) {
    pageNumbers = Array.from({ length: total }, (_, i) => i + 1);
  } else {
    if (current <= 2) {
      pageNumbers = [1, 2, 3, ellipsis, total - 1, total];
    } else if (current === 3) {
      pageNumbers = [1, 2, 3, 4, ellipsis, total - 1, total];
    } else if (current >= total - 5) {
      pageNumbers = [1, ellipsis];
      for (let i = total - 5; i <= total; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers = [1, ellipsis, current - 1, current, current + 1, ellipsis, total];
    }
  }

  return (
    <Nav>
      {current > 1 && <PageNumber onClick={() => onPageChange(1)}>First</PageNumber>}
      {pageNumbers.map((number, index) =>
        number === ellipsis ? (
          <Ellipsis key={index}>{number}</Ellipsis>
        ) : (
          <PageNumber
            key={index}
            $isActive={number === current}
            onClick={() => typeof number === 'number' && onPageChange(number)}
          >
            {number}
          </PageNumber>
        ),
      )}
      {current < total && <PageNumber onClick={() => onPageChange(total)}>Last</PageNumber>}
    </Nav>
  );
};

export default Pagination;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 100px;
`;

const PageNumber = styled.button<PageNumberProps>`
  background: ${props => (props.$isActive ? '#007bff' : 'white')};
  color: ${props => (props.$isActive ? 'white' : 'black')};
  border: 1px solid #ddd;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const Ellipsis = styled.span`
  padding: 5px 10px;
  margin: 0 5px;
`;
