import { useState } from 'react';
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

interface PageWrapperProps {
  $centerContent: boolean;
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

  const { data: productsData, isError } = useQuery({
    queryKey: [PRODUCTS_LIST_QUERY_DOMAIN],
    queryFn: () => fetchProducts(),
  });

  const hasProducts = productsData && productsData.items.length > 0;

  const filteredProducts = productsData?.items.filter((product: ProductType) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesActive = !isActiveFilter || (isActiveFilter && product.active === false);
    const matchesPromo = !isPromoFilter || product.promo === isPromoFilter;

    return matchesSearch && matchesActive && matchesPromo;
  });
  const currentItems = filteredProducts && filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const showEmptyProducts = !currentItems || currentItems.length === 0;

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} setIsActiveFilter={setIsActiveFilter} setIsPromoFilter={setIsPromoFilter} />
      <PageWrapper $centerContent={!hasProducts || showEmptyProducts}>
        {isError ? (
          <ErrorMessage>There was an error fetching the products. Please try again later.</ErrorMessage>
        ) : productsData ? (
          <>
            {showEmptyProducts ? (
              <EmptyProducts />
            ) : (
              <StyledColumn>
                <StyledCont>
                  {currentItems.map((product: ProductType) => (
                    <CardComponent
                      key={product.name}
                      image={product.image}
                      title={product.name}
                      text={product.description}
                      rating={product.rating}
                      promo={product.promo}
                      $active={product.active}
                      onShowDetails={() => handleShowDetails(product)}
                    />
                  ))}
                </StyledCont>
              </StyledColumn>
            )}
            <Pagination total={totalPages} current={currentPage} onPageChange={handlePageChange} />
          </>
        ) : (
          <EmptyProducts />
        )}
        <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </PageWrapper>
    </>
  );
};
export default Home;

const PageWrapper = styled.div<PageWrapperProps>`
  width: 100%;
  background-color: ${colors.whiteDark};
  min-height: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.$centerContent ? 'center' : 'start')};
`;

const StyledCont = styled.div`
  width: 100%;
  margin-top: 38px;
  display: grid;
  grid-gap: 20px;
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
  place-items: center;
  margin-top: 40px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: ${colors.red};
  text-align: center;
  font-size: 18px;
`;
