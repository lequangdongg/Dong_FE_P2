import React from 'react';
import './Register.scss';
export default function Register() {
  return (
    <React.Fragment>
      <section className='register'>
        <h3>ĐĂNG KÝ</h3>
        <div className='register__form'>
          <div className='register__form-person'>
            <h4>THÔNG TIN CÁ NHÂN</h4>
            <p>Tên trước *</p>
            <input type='text' />
            <p>Tên sau *</p>
            <input type='text' />
            <p>Email *</p>
            <input type='email' />
            <p>Password *</p>
            <input type='password' />
            <span>Đăng ký nhận bản tin </span>
          </div>
          <div className='register__form-button'>
            <button className='register__form-send'>GỬI</button>
            <button className='register__form-back'>
              {' '}
              <i className='fas fa-long-arrow-alt-left'> </i>
              <span>QUAY LẠI</span>
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
