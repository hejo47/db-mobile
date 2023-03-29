import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Container>
        <div className='header-con'>
          <Link to='/' className='header-logo'>
            <h1>
              <img src='../img/logo/muji_logo.svg' alt='MUJI' />
            </h1>
          </Link>
          <div className='header-menu'>
            <i className='ri-menu-3-line'></i>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
