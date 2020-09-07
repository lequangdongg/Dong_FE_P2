import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchHistoryProduct,
  deleteProduct,
} from '../../redux/cartUser/cartUserAction';
import { useSelector, useDispatch } from 'react-redux';
import './UserDetail.scss';
import formatNuber from '../../common/formatNumber';
import { Link } from 'react-router-dom';

export default function UserDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartUser.items);
  useEffect(() => {
    dispatch(fetchHistoryProduct(Number(params.id)));
  }, []);

  const onHandleDeleteProduct = (index) => {
    dispatch(deleteProduct(index));
  };
  return (
    <section className='cart'>
      <h3>LỊCH SỬ MUA HÀNG</h3>
      <table className='cart__table'>
        <tbody>
          <tr>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Tổng số</th>
            <th>Ngày mua</th>
            <th>Xóa</th>
          </tr>
          {items
            ? items.map((product) => (
                <tr className='cart__table-item' key={product.id}>
                  <td>
                    <img src={product.image} alt='' />
                  </td>
                  <td>
                    <p className='cart__table-name'>{product.name}</p>
                  </td>
                  <td>
                    <span className='cart__table-price'>
                      {formatNuber(product.totalPrice)}
                    </span>
                  </td>
                  <td>
                    <button className='cart__table-quantity'>
                      {product.cart[0].amout}
                    </button>
                  </td>
                  <td>
                    <span className='cart__table-price'>
                      {formatNuber(product.totalPrice * product.cart[0].amout)}
                    </span>
                  </td>
                  <td>{product.date}</td>
                  <td>
                    <i
                      className='far fa-trash-alt'
                      onClick={() => onHandleDeleteProduct(product.id)}
                    ></i>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <div className='cart__button'>
        <Link to='/'>tiếp tục mua hàng</Link>
      </div>
    </section>
  );
}
