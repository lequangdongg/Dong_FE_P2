import React from 'react'

export default function Blog() {
  return (
    <section className='blog'>
        <div className='blog__about'>
          <div className='blog__about-us'>
            <h3>Về chúng tôi</h3>
            <div className='blog__about-space'>
              <span></span>
              <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
              <span></span>
            </div>
            <div className='blog__about-logo'>
              <a href='test'>M</a>
              <span>adala</span>
            </div>
            <span className='blog__about-review'>
              Giới thiệu chung về mỹ phẩm handmade Mandala{' '}
            </span>
            <p className='blog__about-desc'>
              Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
              quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
              khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các
              nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm
              nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình
              xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão thì
              hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng
              oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
            </p>
            <span className='blog__about-more' href='test'>
              Xem thêm
            </span>
          </div>
          <div className='blog__about-blog'>
            <h3>blog</h3>
            <div className='blog__about-space'>
              <span></span>
              <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
              <span></span>
            </div>
            <img src='../../asset/blog.jpg' alt='' />
            <span className='blog__about-review'>
              Review son kem Bourjois Velvet
            </span>
            <p className='blog__about-desc'>
              Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
              quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
              khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
            </p>
            <span className='blog__about-name'>
              Bởi NamTran ( 27 / 05 / 2015 )
            </span>
            <div className='blog__about-script'>
              <a href='test'>
                Đọc thêm<i className='fas fa-angle-right'></i>
              </a>
              <a href='test'>23 Bình luận</a>
            </div>
          </div>
          <div className='blog__about-email'>
            <div className='blog__about-one'>
              <h3>Gửi Email cho chúng tôi</h3>
              <div className='blog__about-space'>
                <span></span>
                <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
                <span></span>
              </div>
              <input type='text' name='' id='' placeholder='Email của bạn' />
              <p>Gửi email để nhận những ưu đãi mới nhất</p>
              <button>Gửi</button>
            </div>
            <div className='blog__about-two'>
              <h3>Tag Sản phẩm</h3>
              <div className='blog__about-space'>
                <span></span>
                <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
                <span></span>
              </div>
              <div className='blog__about-tag'>
                <span className='blog__about-first'>Đồng hồ</span>
                <span>Túi</span>
                <span>Phụ kiện</span>
                <span>Đồng hồ</span>
                <span className='blog__about-last'>Túi</span>
              </div>
              <div className='blog__about-tag'>
                <span>Giày</span>
                <span>Sandal</span>
                <span>Áo sơ mi</span>
                <span>Nước hoa</span>
                <span>Giày</span>
                <span>Sandal</span>
              </div>
              <div className='blog__about-tag'>
                <span>Trẻ em</span>
                <span>Thời trang nữ</span>
                <span>Trẻ em</span>
                <span>Thời trang nữ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
