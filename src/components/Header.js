import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as UI from './UI';

const StyledHeader = styled.div`
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
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.4px;

  .name {
    line-height: 1.5;
    font-size: 16px;
  }

  .meta {
    line-height: 1.5
    font-size: 14px;

    &:nth-child(2) {
        margin-bottom: 32px;
    }

    &:nth-child(3) {
        margin-bottom: 10px;
    }

    &:nth-child(4) {
      margin-bottom: 10px;
  }
  }

  a {
      padding-bottom: 2px;

      line-height: 1 !important;
      text-decoration: none;
      color: #111;
      border-bottom: 1px solid #111;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <UI.Wordmark to="/">Christian Bryant</UI.Wordmark>
        <NavInfo>
          <div className="meta">Design + Development</div>
          <div className="meta">Los Angeles</div>
          <Link className="meta" to="/about">
            About
          </Link>
          <Link className="meta" to="/contact">
            Contact
          </Link>
       
        </NavInfo>
      </StyledHeader>
    );
  }
}
