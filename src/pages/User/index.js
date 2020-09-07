import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserLocal } from '../../redux/auth/authAction';
import { Link } from 'react-router-dom';
import './User.scss';
export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userlocal);
  const params = useParams();
  console.log(user);
  useEffect(() => {
    dispatch(fetchUserLocal(localStorage.getItem('token')));
  }, []);
  return (
    <React.Fragment>
      <h1 className='title'>
        {user
          ? `Xin chào bạn ${user[0].firstname}
        đến với trang quản lý tài khoản`
          : 'Loading..'}
      </h1>

      <div className='user'>
        <div className='user__link'>
          <Link to='/'>Quay lại trang chủ</Link>
          <Link to={`/user/${params.id}`}>Hồ sơ cá nhân</Link>
          <Link to={`/user/update/${params.id}`}>Cập nhật hồ sơ cá nhân</Link>
        </div>
        <div className='user__info'>
          <div className='user__info-fullname user__info-detail'>
            <span>Họ và tên : </span>
            <span>{user ? user[0].lastname + user[0].firstname : ''}</span>
          </div>
          <div className='user__info-email user__info-detail'>
            <span>Địa chỉ email : </span>
            <span>{user ? user[0].email : ''}</span>
          </div>
          <div className='user__info-password user__info-detail'>
            <span>Mật khẩu : </span>
            <span>{user ? user[0].password : ''}</span>
          </div>
          <div className='user__info-address user__info-detail'>
            <span>Địa chỉ : </span>
            <span>{user ? user[0].address : ''}</span>
            <div className='user__info-phonenumber user__info-detail'>
              <span>Số điện thoại : </span>
              <span>{user ? user[0].phone : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
