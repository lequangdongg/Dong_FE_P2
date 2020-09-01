import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
export default function Product({
  products,
  handleClickHotTrendProducts,
  handleClickRecentlyViewed,
  handleClickProducts,
  handleChangeSort,
  sort
}) {
  const settings = {
    dots: true,
    infinite: products.length > 5,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <React.Fragment>
      <section className='product'>
        <div className='product__title'>
          <button onClick={handleClickHotTrendProducts}>Sản phẩm mới </button>
          <span onClick={handleClickProducts}>Sản phẩm bán chạy </span>
          <button onClick={handleClickRecentlyViewed}>
            Sản phẩm đã xem gần đây
          </button>
          <select value={sort} onChange={handleChangeSort}>
            <option value="0">Chọn thể loại sắp xếp</option>
            <option value="1">Sắp xếp theo tên</option>
            <option value="2">Sắp xếp theo loại</option>
            <option value="3">Sắp xếp theo giá</option>
            <option value="4">Sắp xếp theo sao</option>
          </select>
        </div>
        <div className='product__tabs'>
          <ul>
            <li>Mỹ phẩm</li>
          </ul>
          <ul>
            <li>Chăm sóc da</li>
          </ul>
          <ul>
            <li>Dành cho tóc</li>
          </ul>
          <ul>
            <li>Nước hoa</li>
          </ul>
          <ul>
            <li>Trang sức</li>
          </ul>
          <ul>
            <li>Quà tặng</li>
          </ul>
        </div>
        <Slider {...settings}>
          {products.map((items) => (
            <div className='content' key={items.id}>
              <img src={items.image} alt='' />
              <div className='content__buy'>
                <h6>{items.type.toUpperCase()}</h6>
                <p>{items.name}</p>
                <span className='content__buy-border'></span>
                <span className='content__buy-price'>
                  {items.price}
                  <span>đ</span>
                </span>
              </div>
              <div className='content__buyCart'>
                <button>MUA HÀNG</button>
                <span>
                  <i className='fas fa-heart'></i>
                </span>
                <span>
                  <i className='fas fa-sync-alt'></i>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </React.Fragment>
  );
}
