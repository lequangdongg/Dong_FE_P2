import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/auth/authAction';
export default function Admin() {
  const dispatch = useDispatch();
  const handleClickCheckOut = (event) => {
    event.preventDefault();
    dispatch(logOut());
  };
  return (
    <div>
      Admin
      <Link to='/login' onClick={handleClickCheckOut}>
        Log out
      </Link>
    </div>
  );
}
