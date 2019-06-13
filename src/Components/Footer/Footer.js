import React from 'react';
import './Footer.css';
import { ContentBox } from '../index';

const Footer = () => (
  <div className="Footer">
    <ContentBox className="FooterBody">
      <div className="FooterHeading">
        <p className="BizDesc">
        사업자등록번호: 142-88-01183<br/>
        대표이사: 이제빈, 신명진<br/>
        주소: 서울특별시 서초구 강남대로 373 홍우빌딩 15층<br/>
        </p>
        <p className="CompanyName">
          ©Biscuit Labs
        </p>
      </div>
    </ContentBox>
  </div>
)

export default Footer;