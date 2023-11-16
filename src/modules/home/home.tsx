import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
import { fetchProducts, PRODUCTS_LIST_QUERY_DOMAIN } from './apiCalls';
import { useQuery } from '@tanstack/react-query';
import CardComponent from './components/CardComponent/CardComponent';
import { ProductType } from './types/productType';
import Pagination from './components/Pagination/Pagination';
import EmptyProducts from './components/EmptyProducts/EmptyProducts';
import NavBar from '../../layout/navbar/NavBar';
import ProductModal from './components/ProductModal/ProductModal';

interface ProductsData {
  items: ProductType[];
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [isPromoFilter, setIsPromoFilter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const totalPages = 10; // This should come from your API's meta data
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleShowDetails = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const { data: productsData } = useQuery({
    queryKey: [PRODUCTS_LIST_QUERY_DOMAIN],
    queryFn: () => fetchProducts(),
  });

  console.log(productsData);

  const filteredProducts = productsData?.items.filter((product: ProductType) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesActive = !isActiveFilter || product.active === isActiveFilter;
    const matchesPromo = !isPromoFilter || product.promo === isPromoFilter;

    return matchesSearch && matchesActive && matchesPromo;
  });
  const currentItems = filteredProducts && filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} setIsActiveFilter={setIsActiveFilter} setIsPromoFilter={setIsPromoFilter} />
      <PageWrapper>
        {productsData ? (
          <StyledColumn>
            <StyledCont>
              {currentItems &&
                currentItems.map((product: ProductType) => (
                  <CardComponent
                    key={product.name}
                    image={product.image}
                    title={product.name}
                    text={product.description}
                    rating={product.rating}
                    promo={product.promo}
                    active={product.active}
                    onShowDetails={() => handleShowDetails(product)}
                  />
                ))}
            </StyledCont>
            <Pagination total={totalPages} current={currentPage} onPageChange={handlePageChange} />
          </StyledColumn>
        ) : (
          <EmptyProducts />
        )}
        <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </PageWrapper>
    </>
  );
};
export default Home;

const PageWrapper = styled.div`
  width: 100%;
  background-color: ${colors.whiteDark};
  min-height: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const StyledCont = styled.div`
  width: 100%;
  margin-top: 38px;
  display: grid;
  grid-gap: 20px; // Adjust the gap as needed
  padding: 40px; // Adjust the padding as needed
  max-width: 1440px; // Adjust max-width as needed for your design
  margin: 0 auto; // Centers the grid in the page
  place-items: center;

  // Default to 1 column for mobile devices
  grid-template-columns: 1fr;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns on medium devices
  }

  // Large devices (desktops, 1024px and up)
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // 3 columns on large devices
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); // 4 columns on extra large devices
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
