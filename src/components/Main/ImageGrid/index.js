import React from 'react';

export default function ImageGrid() {
  return (
    <React.Fragment>
      <div className='image__grid'>
        <div className='image__grid-1'>
          <img src='../../asset/suatam.jpg' alt='' />
        </div>
        <div className='image__grid-2'>
          <p className='image__grid-text'>SỮA TẮM</p>
          <div className='image__grid-space'>
            <span></span>
            <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
            <span></span>
          </div>
        </div>
        <div className='image__grid-3'>
          <img src='../../asset/nuochoa1.jpg' alt='' />
        </div>
        <div className='image__grid-4'>
          <p className='image__grid-text'>NƯỚC HOA</p>
          <div className='image__grid-space'>
            <span></span>
            <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
            <span></span>
          </div>
        </div>
        <div className='image__grid-5'>
          <img src='../../asset/vuongniem2.jpg' alt='' />
        </div>
        <div className='image__grid-6'>
          <img src='../../asset/combo-tamtrang.jpg' alt='' />
        </div>
        <div className='image__grid-7'>
          <img src='../../asset/kimcuong.jpg' alt='' />
        </div>
        <div className='image__grid-8'>
          <p>TRANG SỨC</p>
          <div className='image__grid-space'>
            <span></span>
            <span> &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;</span>
            <span></span>
          </div>
        </div>
        <div className='image__grid-9'>
          <img src='../../asset/girl.jpg' alt='' />
        </div>
        <div className='image__grid-10'>
          <img src='../../asset/daisy.jpg' alt='' />
        </div>
      </div>
    </React.Fragment>
  );
}
