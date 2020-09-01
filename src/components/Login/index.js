import React, { useState } from 'react';
import './Login.scss';
import { fetchUser } from '../../redux/auth/authAction';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
export default function Login() {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  const handleChangeLogin = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const data = { email: userLogin.email, password: userLogin.password };
    if (data.email && data.password) {
      dispatch(fetchUser(data));
    }
  };
  return (
    <React.Fragment>
      <section className='login'>
        <div className='login__title'>
          <h3>ĐĂNG NHẬP</h3>
          <Link to='/register'>ĐĂNG KÝ</Link>
        </div>
        <div className='login__form'>
          <div className='login__form-custormer'>
            <h4>KHÁCH HÀNG ĐĂNG KÝ</h4>
            <span>Nếu bạn có một tài khoản, xin vui lòng đăng nhập.</span>
            <form onSubmit={handleSubmitLogin}>
              <p>Địa chỉ email *</p>
              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChangeLogin}
              />
              <p>Password *</p>
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChangeLogin}
              />
              <button className='login__form-button' type='submit'>
                ĐĂNG NHẬP
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
