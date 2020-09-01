import React from 'react';
import './Footer.scss';
export default function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__contact'>
          <div className='footer__total'>Liên Hệ với chúng tôi</div>
          <div className='footer__list footer__contact-location'>
            <i className='fas fa-map-marker-alt'></i>
            <span>
              Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,
              <br />
              P. Cống Vị, Q. Ba Đình, Hà Nội
            </span>
          </div>
          <div className='footer__list footer__contact-number'>
            <i className='fas fa-phone-volume'></i>
            <span>(04) 6674 2332 - </span>
            <i className='fas fa-blender-phone'></i>
            <span>(04) 3786 8904</span>
          </div>
          <div className='footer__list footer__contact-number'>
            <i className='fas fa-phone-volume'></i>
            <span>(08) 6680 9686</span>
            <i className='fas fa-envelope'></i>
            <span>Support@bizweb.vn</span>
          </div>
        </div>
        <div className='footer__shipping'>
          <div className='footer__total'>Chuyển Hàng</div>
          <div className='footer__list'>
            <ul>
              <li>mua sắm trực tuyến</li>
              <li>Đến từ chúng tôi gửi đến</li>
              <li>Chính sách vận chuyển</li>
              <li>vận chuyển thông qua</li>
            </ul>
          </div>
        </div>
        <div className='footer__support'>
          <div className='footer__total'>hỗ trợ</div>
          <div className='footer__list'>
            <ul>
              <li>Câu chuyện của chúng ta</li>
              <li>Thanh toán an toàn</li>
              <li>tùy chọn Vận Chuyển</li>
              <li>Chính sách vận chuyển</li>
            </ul>
          </div>
        </div>
        <div className='footer__information'>
          <div className='footer__total'>thông tin</div>
          <div className='footer__list'>
            <ul>
              <li>về Chúng tôi</li>
              <li>Diều khoản & điều kiện</li>
              <li>Chính Sách Riêng Tư</li>
              <li>Đơn đặt hàng và Returns</li>
            </ul>
          </div>
        </div>
        <div className='footer__account'>
          <div className='footer__total'>my account</div>
          <div className='footer__list'>
            <ul>
              <li>Xem Giỏ hàng</li>
              <li>Sản phẩm yêu thích</li>
              <li>kiểm tra</li>
              <li>Theo dõi đặt hàng của tôi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__copy'>
        <p>© Copyright 2008-2014 DKT Technology JSC</p>
        <div>
          <img src='../../../asset/footer.jpg' alt='' />
        </div>
      </div>
    </footer>
  );
}
