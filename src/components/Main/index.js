import React, { useState, useEffect } from 'react';
import './Main.scss';
import IconShip from './IconShip';
import ImageGrid from './ImageGrid';
import Product from './Product';
import Description from './Description';
import Blog from './Blog';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchProductsHotTrend,
  fetchRecentlyViewedProducts,
  sortProducts,
} from '../../redux/product/productAction';
export default function Main() {
  const [sort, setSort] = useState('0');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleClickHotTrendProducts = () => {
    dispatch(fetchProductsHotTrend());
  };
  const handleClickProducts = () => {
    dispatch(fetchProducts());
  };
  const handleClickRecentlyViewed = () => {
    dispatch(fetchRecentlyViewedProducts());
  };
  const handleChangeSort = (event) => {
    const value = event.target.value;
    setSort(value);
    dispatch(sortProducts(value));
  };
  return (
    <main>
      <IconShip />
      <ImageGrid />
      <Product
        products={items}
        handleClickHotTrendProducts={handleClickHotTrendProducts}
        handleClickRecentlyViewed={handleClickRecentlyViewed}
        handleClickProducts={handleClickProducts}
        handleChangeSort={handleChangeSort}
        sort={sort}
      />
      <Description />
      <Blog />
    </main>
  );
}
