import React from 'react';
import './Login.scss';
export default function Login() {
  return (
    <React.Fragment>
      <section className='login'>
        <div className='login__title'>
          <h3>ĐĂNG NHẬP</h3>
          <button>ĐĂNG KÝ</button>
        </div>
        <div className='login__form'>
          <div className='login__form-custormer'>
            <h4>KHÁCH HÀNG ĐĂNG KÝ</h4>
            <span>Nếu bạn có một tài khoản, xin vui lòng đăng nhập.</span>
            <p>Địa chỉ email *</p>
            <input type='email' />
            <p>Password *</p>
            <input type='password' />
          </div>
          <div className='login__form-button'>
            <span>Quên Mật Khẩu?</span>
            <button>ĐĂNG NHẬP</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
