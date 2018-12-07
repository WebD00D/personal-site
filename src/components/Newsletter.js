import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as UI from './UI';

const StyledNewsletter = styled.div`
  height: 32px;
  width: 380px;
  display: flex;
  align-items: center;

transition: .2s ease;
  border: 1px solid #111;

  @media (max-width: 600px) {
      width: 100%;
  }

  input {
    height: 100%;
    padding: 0px;
    padding-left: 16px;
    flex: 1;

    font-size: 12px;
    border: none;
    outline: none;
  }

  button {
    width: 120px;
    height: 100%;

    cursor: pointer;
    border: none;
    outline: none;
    transition: .2s ease;
    font-size: 12px !important;
    border-left: 1px solid #111;

    background-color: #111;
    color: #fff;

    &:hover {
        background-color: #fff;
        color: #111;
    }

    &:active {
        background-color: #f5f5f5;
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledNewsletter>
        <input placeholder="Sign up for my newsletter" type="text" />
        <button>Subscribe</button>
      </StyledNewsletter>
    );
  }
}

export default Footer;
