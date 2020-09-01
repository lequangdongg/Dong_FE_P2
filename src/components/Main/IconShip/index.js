import React from 'react';

export default function IconShip() {
  return (
    <section className='icon__buy'>
      <div className='icon__buy-plane'>
        <i className='fas fa-plane'></i>
        <p>Miễn phí vận chuyển</p>
      </div>
      <span></span>
      <div className='icon__buy-girf'>
        <i className='fa fa-gift'></i>
        <p>Nhận quà tặng trị giá 350.000đ</p>
      </div>
      <span></span>
      <div className='icon__buy-star'>
        <i className='fas fa-star'></i>
        <p>Giảm 30% cho hóa đơn trên 5.000.000đ</p>
      </div>
    </section>
  );
}
