import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className='product-list-wrap'>
      <ul className='product-list'>
        <li className='product-item-wrap'>
          <Link to='/' className='product-item'>
            <div className='product-img'>
              <img src='img/products/prod-1.jpg' alt='' />
            </div>
            <div className='product-text'>
              <span className='product-category'>디저트</span>
              <p className='product-title'>솜사탕</p>
              <span className='product-price'>1900원</span>
            </div>
          </Link>
        </li>
        <li className='product-item-wrap'>
          <Link to='/' className='product-item'>
            <div className='product-img'>
              <img src='img/products/prod-2.jpg' alt='' />
            </div>
            <div className='product-text'>
              <span className='product-category'>과자</span>
              <p className='product-title'>치즈 크리스프 파르미지아노 레지아노</p>
              <span className='product-price'>4500원</span>
            </div>
          </Link>
        </li>
        <li className='product-item-wrap'>
          <Link to='/' className='product-item'>
            <div className='product-img'>
              <img src='img/products/prod-3.jpg' alt='' />
            </div>
            <div className='product-text'>
              <span className='product-category'>디저트</span>
              <p className='product-title'>미니 케이크 어소트</p>
              <span className='product-price'>5900원</span>
            </div>
          </Link>
        </li>
        <li className='product-item-wrap'>
          <Link to='/' className='product-item'>
            <div className='product-img'>
              <img src='img/products/prod-4.jpg' alt='' />
            </div>
            <div className='product-text'>
              <span className='product-category'>과자</span>
              <p className='product-title'>미니 웨이퍼 초콜릿</p>
              <span className='product-price'>2900원</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
