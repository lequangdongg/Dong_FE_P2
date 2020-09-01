import React, { useState } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/register/registerAction';
export default function Register() {
  const dispatch = useDispatch();
  const [userRegister, setUserRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChangeRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const data = {
      firstname: userRegister.firstname,
      lastname: userRegister.lastname,
      email: userRegister.email,
      password: userRegister.password,
    };
    if (data.firstname && data.lastname && data.email && data.password) {
      dispatch(createUser(data));
    }
  };
  return (
    <React.Fragment>
      <section className='register'>
        <h3>ĐĂNG KÝ</h3>
        <div className='register__form'>
          <div className='register__form-person'>
            <form onSubmit={handleSubmitRegister}>
              <h4>THÔNG TIN CÁ NHÂN</h4>
              <p>Tên trước *</p>
              <input
                type='text'
                name='firstname'
                onChange={handleChangeRegister}
              />
              <p>Tên sau *</p>
              <input
                type='text'
                name='lastname'
                onChange={handleChangeRegister}
              />
              <p>Email *</p>
              <input
                type='email'
                name='email'
                onChange={handleChangeRegister}
              />
              <p>Password *</p>
              <input
                type='password'
                name='password'
                onChange={handleChangeRegister}
              />
              <span>Đăng ký nhận bản tin </span>
              <div className='register__form-button'>
                <button className='register__form-send' type='submit'>
                  GỬI
                </button>
                <button className='register__form-back'>
                  <i className='fas fa-long-arrow-alt-left'> </i>
                  <Link to='/login'>QUAY LẠI</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
