import React from 'react';
import './Header.scss';
export default function Header() {
  return (
    <header>
      <nav>
        <div className='nav__left'>
          <a href='helo'>M</a>
          <span>adala</span>
        </div>
        <div className='nav__center'>
          <a href='helo'>TRANG CHỦ</a>
          <a href='helo'>GIỚI THIỆU</a>
          <a href='helo'>
            SẢN PHẨM<i className='fa fa-angle-down'></i>
            <div className='nav__center-dropdown'>
              <div className='nav__center-one nav__center-check'>
                <h3>Dưỡng da</h3>
                <ul>
                  <li>Áo khoác</li>
                  <li>Bộ áo ền quần</li>
                  <li>Dresses</li>
                  <li>Quần '/' Váy</li>
                  <li>Quần short</li>
                  <li>Quần jean</li>
                  <li>Đồ đan</li>
                  <li>Áo nỉ</li>
                </ul>
              </div>
              <div className='nav__center-two nav__center-check'>
                <h3>Nước hoa</h3>
                <ul>
                  <li>Áo cánh / Áo sơ mi</li>
                  <li>Túi xách &amp; Balô</li>
                  <li>Khăn quàng cổ và Foulards</li>
                  <li>Dệt kim Hats &amp; Gloves</li>
                  <li>Vớ &amp; Socks</li>
                  <li>Jewerly</li>
                  <li>Bị bảo vệ</li>
                  <li>Giày</li>
                </ul>
              </div>
              <div className='nav__center-two nav__center-check'>
                <h3>Trang sức</h3>
                <ul>
                  <li>Áo cánh / Áo sơ mi</li>
                  <li>Túi xách &amp; Balô</li>
                  <li>Khăn quàng cổ và Foulards</li>
                  <li>Dệt kim Hats &amp; Gloves</li>
                  <li>Vớ &amp; Socks</li>
                  <li>Jewerly</li>
                  <li>Bị bảo vệ</li>
                  <li>Giày</li>
                </ul>
              </div>
            </div>
          </a>
          <a href='helo'>TIN TỨC</a>
          <a href='helo'>BẢN ĐỒ</a>
          <a href='helo'>LIÊN HỆ</a>
        </div>
        <div className='nav__right'>
          <i className='fas fa-shopping-cart'>
            <i className='nav__right-number'>2</i>
            <div className='nav__right-all'>
              <div className='nav__right-detail'>
                <img src='../../../asset/boy.jpg' alt='' />
                <div>
                  <p>Áo sơ mi Nam</p>
                  <p>
                    120.000<span>đ</span>
                  </p>
                </div>
                <i className='fas fa-times'></i>
              </div>
              <div className='nav__right-detail'>
                <img src='../../../asset/boy.jpg' alt='' />
                <div>
                  <p>Áo sơ mi Nam</p>
                  <p>
                    120.000<span>đ</span>
                  </p>
                </div>
                <i className='fas fa-times'></i>
              </div>
              <div className='nav__right-total'>
                <span>Tổng số</span>
                <span>
                  240.000<span>đ</span>
                </span>
              </div>
              <div className='nav__right-cart'>
                <a href='helo' target='_blank'>
                  GIỎ HÀNG
                </a>
              </div>
            </div>
          </i>
          <i className='fas fa-search'></i>
          <i className='fas fa-bars'></i>
        </div>
      </nav>
      {/* <div className='bannerText'>
        <div className='bannerText-desc'>
          <h5>GreenVera</h5>
          <p>Sản phẩm tinh dầu dưỡng da mới nhất của Mandala </p>
          <h6>
            Giá chỉ 750.000<span>đ</span>
          </h6>
          <a href='helo'>Mua hàng</a>
        </div>
      </div> */}
    </header>
  );
}
