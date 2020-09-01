import React from 'react';
import './Main.scss';
import IconShip from './IconShip';
import ImageGrid from './ImageGrid';
import Product from './Product';
import Description from './Description';
import Blog from './Blog';
export default function Main() {
  const handleChange = (event) => {};
  return (
    <main>
      <IconShip />
      <ImageGrid />
      <Product handleChange={handleChange} />
      <Description />
      <Blog />
    </main>
  );
}
