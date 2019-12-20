import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as UI from './UI';

import Logo from '../images/mylogo.png';

const StyledHeader = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const NavInfo = styled.div`
  display: flex;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.4px;

  a {
    padding-bottom: 2px;
    margin-left: 30px;
    line-height: 1 !important;
    text-decoration: none;
    color: #111;
    font-size: 14px;
  }

  @media (max-width: 1100px) {

    flex-direction: column;
    background-color: #fff;

   

    a {
      line-height: 2 !important;
      text-align: right;
    }
  }
`;

const MobileMenu = styled.div`
    padding-bottom: 2px;
    margin-left: 30px;
    line-height: 1 !important;
    text-decoration: none;
    color: #111;
    font-size: 14px;

    
`

const MyLogo = styled('img')`
  height: 50px;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <StyledHeader>
        <UI.Wordmark to="/">
          <MyLogo src={Logo} />
        </UI.Wordmark>
     
        <NavInfo open={this.state.open}>
          <Link to="/about">About</Link>
          <Link to="/studio">Studio</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/mentorship">1-1 Mentorship</Link>
        </NavInfo>
      </StyledHeader>
    );
  }
}
