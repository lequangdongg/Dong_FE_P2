import React from 'react';

export default function Product({ handleChange }) {
  return (
    <section className='product'>
      <div className='product__title'>
        <span>Sản phẩm mới </span>
        <span>Sản phẩm bán chạy </span>
        <span>Sản phẩm đặc biệt</span>
      </div>
      <div className='product__space'>
        <span></span>
        <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
        <span></span>
      </div>
      <div className='product__tabs'>
        <ul>
          <li>Mỹ phẩm</li>
        </ul>
        <ul>
          <li>Chăm sóc da</li>
        </ul>
        <ul>
          <li>Dành cho tóc</li>
        </ul>
        <ul>
          <li>Nước hoa</li>
        </ul>
        <ul>
          <li>Trang sức</li>
        </ul>
        <ul>
          <li>Quà tặng</li>
        </ul>
      </div>
      <div className='product__slider'>
        <div className='demo-container'>
          <div className='carousel'>
            <input
              className='carousel__activator'
              id='carousel-slide-activator-1'
              checked='checked'
              name='carousel'
              type='radio'
              onChange={handleChange}
            />
            <input
              className='carousel__activator'
              id='carousel-slide-activator-2'
              name='carousel'
              type='radio'
            />
            <input
              className='carousel__activator'
              id='carousel-slide-activator-3'
              name='carousel'
              type='radio'
            />
            <div className='carousel__controls'>
              <label
                className='carousel__control carousel__control--forward'
                htmlFor='carousel-slide-activator-2'
              >
                <img src='../../asset/arrow-right.jpg' alt='' />
              </label>
            </div>
            <div className='carousel__controls'>
              <label
                className='carousel__control carousel__control--backward'
                htmlFor='carousel-slide-activator-1'
              >
                <img src='../../asset/arrow-left.jpg' alt='' />
              </label>
              <label
                className='carousel__control carousel__control--forward'
                htmlFor='carousel-slide-activator-3'
              >
                <img src='../../asset/arrow-right.jpg' alt='' />
              </label>
            </div>
            <div className='carousel__controls'>
              <label
                className='carousel__control carousel__control--backward'
                htmlFor='carousel-slide-activator-2'
              >
                <img src='../../asset/arrow-left.jpg' alt='' />
              </label>
            </div>
            <div className='carousel__screen'>
              <div className='carousel__track'>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/one.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/two.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/three.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/four.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/five.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/six.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/one.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/two.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/three.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/four.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/five.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                  <div className='demo-content'>
                    <img src='../../asset/six.jpg' alt='' />
                    <div className='product__buy'>
                      <h6>OHUI</h6>
                      <p>Mỹ phẩm châu Âu</p>
                      <span className='product__buy-border'></span>
                      <span className='product__buy-price'>
                        355.00<span>đ</span>
                      </span>
                    </div>
                    <div className='product__buyCart'>
                      <button>MUA HÀNG</button>
                      <span>
                        <i className='fas fa-heart'></i>
                      </span>
                      <span>
                        <i className='fas fa-sync-alt'></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
