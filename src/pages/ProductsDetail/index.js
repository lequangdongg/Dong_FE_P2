import React, { useEffect } from 'react';
import './ProductsDetail.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/product/productAction';
import { fetchUserLocal } from '../../redux/auth/authAction';
import { postOrderUser } from '../../redux/cartUser/cartUserAction';
import { logOut } from '../../redux/auth/authAction';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import formatNumber from '../../common/formatNumber';
import Comment from '../../components/Comment'
import ShareFacebook from "../../components/ShareFacebook";
export default function ProductsDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const user = useSelector((state) => state.auth.userlocal);
  const { id } = useParams();
  const items = product[Number(id) - 1];
  let info;
  if (user) {
    info = {
      id: user[0].id,
      address: user[0].address,
      phone: user[0].phone,
    };
  }
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUserLocal(localStorage.getItem('token')));
  }, []);

  const handleClickCheckOut = (event) => {
    event.preventDefault();
    dispatch(logOut);
  };

  const handleClickBuyProduct = () => {
    dispatch(
      postOrderUser(info, items.price, [{ idProduct: items.id, amout: 1 }], items.image, items.name)
    );
  };

  return (
    <div>
      <section className='breadcrumb'>
        <div className='breadcrumb__left'>
          <Link to='/'>
            Home <i className='fas fa-angle-right'></i>
          </Link>
          <span>Sản phẩm</span>
        </div>
        <div className='breadcrumb__right'>
        <Link to={user ? `/product/history/${info.id}` : '/'}>Lịch sử mua hàng</Link>
          {user
            ? user.map((name) => (
                <React.Fragment key={name.id}>
                  <span onClick={handleClickCheckOut}>{name.email}</span>
                </React.Fragment>
              ))
            : null}
        </div>
      </section>
      <section className='bangles'>
        <img src={items ? items.image : null} alt='' />
        <div>
          <h3 className='bangles__title'>{items ? items.name : null}</h3>
          <small>{items ? items.type : null}</small>
          <p className='bangles__title-price'>
            {items ? formatNumber(items.price) : null} 
          </p>
          <p className='bangles__title-description'>
            {items ? items.description : null}
          </p>
          <p className='bangless__title-color'>
            View(Lượt xem) : {items ? items.view : null}
          </p>
          <p className='bangless__title-size'>
            Trạng thái : {items ? items.status : null}
          </p>
          <div className='bangless__title-count'>
            SỐ LƯỢNG : {items ? items.quantity : null}
            <p className='bangless__title-buy'>
              <button onClick={handleClickBuyProduct}>MUA HÀNG</button>
              <span>
                <i className='fas fa-heart'></i>
              </span>
              <span>
                <i className='fas fa-sync-alt'></i>
              </span>
            </p>
          </div>
        <ShareFacebook />
        </div>
      </section>
      <Comment />
    </div>
  );
}
