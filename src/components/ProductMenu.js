import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Arrow from '../images/rightArrow.svg';

import * as UI from './UI';

const MenuWrap = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;


  z-index: 1;
  transition: 0.2s ease;

  @media (max-width: 700px) {
    width: 100%;
  }

  li {
    font-size: 12px;
    line-height: 1.5;
  }

  &.product-menu {
    transform: translateX(100%);
  }

  &.product-menu--open {
    transform: translateX(0);
  }
`;

const StyledMenu = styled.div`
  width: 492px;
  position: absolute;
  right: 0;
  height: 100%;
  background-color: #fff;
  border-left: 1px solid #111;
  overflow-y: scroll;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const MenuContainer = styled.div`
  padding: 32px;

  @media (max-width: 700px) {
    padding: 16px;
    padding-top: 40px;
  }
`;

const Close = styled.div`
  font-size: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  right: 532px;
  top: 32px;
  letter-spacing: 0.5px;

  cursor: pointer;
  
  width: fit-content;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.75;
  }

  img {
    margin-right: 8px;
    height: 14px;
    transform: scaleX(-1);
  }

  @media (max-width: 700px) {
    z-index: 3;
    left:30px;
    top: 16px;
  }
`;

const ProductViewBox = styled.div`
  margin-bottom: 28px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;

  img {
    width: 100%;
    height: auto;
  }
`;

const ProductTitle = styled.div`
  margin-bottom: 16px;

  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  font-size: 16px;
  text-align: justify;
  letter-spacing: 0.5px;
`;

const ProductDescription = styled.div`
  margin-bottom: 8px;

  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: justify;
  letter-spacing: 0.5px;
`;

const BuyRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 30px;

  button {
    height: 36px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    transition: 0.2s ease;
  }

  .primary {
    background-color: #111;
    color: #fff;

    &:active {
      opacity: 0.9;
    }
  }

  .secondary {
    width: 200px;
    border: 1px solid black;

    &:hover {
      background-color: #fff;
      color: #111;
    }

    &:active {
      background-color: #f5f5f5;
    }

    @media (max-width: 700px) {
      width: 100%;
      margin-bottom: 16px;
    }

  }
`;

const FlexRow = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

class ProductMenu extends Component {
  render() {
    const productMenuClass = this.props.visible
      ? 'product-menu product-menu--open'
      : 'product-menu';
    return (
      <MenuWrap className={productMenuClass}>
        <Close onClick={() => this.props.closeMenu()}>
          <img src={Arrow} /> Return
        </Close>
        <StyledMenu>
          <MenuContainer>
            <ProductViewBox>
              <img src="https://via.placeholder.com/500x300" />
            </ProductViewBox>
            <ProductTitle>LA MUSEÉ</ProductTitle>
            <ProductDescription>
              Chuck Taylor '70 Hi from Converse. Canvas upper. Lace-up front
              with flat cotton laces. Metal eyelets. Rubber toe cap. Embossed
              logo patch at medial side. Lightly treaded rubber outsole.
            </ProductDescription>
            <div>
              <b>$18</b>
            </div>
            <BuyRow>
              <button className="primary">Buy Now</button>
              <FlexRow>
                <button className="secondary">Live Preview</button>
                <button className="secondary">Share</button>
              </FlexRow>
            </BuyRow>
            <small>
              <b>What's included?</b>
            </small>
            <ul>
              <li>Something</li>
              <li>Lorem ipsum dolar set amit</li>
              <li>Hello world</li>
            </ul>
          </MenuContainer>
        </StyledMenu>
      </MenuWrap>
    );
  }
}

export default ProductMenu;
