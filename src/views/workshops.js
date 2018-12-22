import React, { Component } from 'react';
import styled from 'styled-components';

import ProductMenu from '../components/ProductMenu';

import Arrow from '../images/rightArrow.svg';

import { Link } from 'react-router-dom';

const PageWrap = styled.div`
  max-width: 1000px;
  padding-bottom: 150px;
  padding-top: 50px;
  margin-right: auto;
  margin-left: auto;
  transition: 0.2s ease;
  opacity: ${props => (props.faded ? '0.1' : '1')};

  @media (max-width: 720px) {
    padding-bottom: 60px;
  }
`;

const PageHeader = styled(Link)`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #111;
  text-decoration: none;
  font-family: 'Work Sans';

  img {
    margin-right: 8px;
    height: 18px;
    transform: scaleX(-1);
  }
`;

const PageDescription = styled.div`
  margin-bottom: 60px;

  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 14px;
  text-align: justify;
  letter-spacing: 0.5px;
`;

const Rows = styled.div`
  display: flex
  flex-direction: column;
  margin-bottom: 60px;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  padding-top: ${props => props.pad || '16px'};
  padding-bottom: ${props => props.pad || '16px'};

  border-bottom: 1px solid #111;
`;

const Row = styled(Link)`
  position: relative;
  display: flex;
  padding-top: ${props => props.pad || '16px'};
  padding-bottom: ${props => props.pad || '16px'};
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #111;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: rgba(01, 01, 01, 0.04);
  }

  img {
    position: absolute;
    right: 0px;
    height: 14px;
    cursor: pointer;
  }
`;

const Column = styled.div`
  flex: ${props => props.flex};
  padding-right: 16px;
  font-size: 12px;
  letter-spacing: 0.5px;

  @media (max-width: 700px) {
    &:nth-child(1) {
      flex: 2;
    }

    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

const SectionTitle = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionSearch = styled.input`
  height: 28px;
  padding: 0px;
  width: 200px;
  padding-left: 8px;

  font-size: 12px;
  border: 1px solid #111;
  outline: none;

  @media (max-width: 700px) {
    margin-top: 16px;
  }
`;

class Store extends Component {
  state = {
    productMenu: false
  };

  toggleMenu() {
    this.setState({
      productMenu: !this.state.productMenu
    });

    document.body.style.overflowY = this.state.productMenu
      ? 'scroll'
      : 'hidden';
  }

  render() {
    return (
      <div className="container">
        <ProductMenu
          closeMenu={() => this.toggleMenu()}
          visible={this.state.productMenu}
        />

        <PageWrap faded={this.state.productMenu}>
          <PageHeader to="/">
            <img src={Arrow} />
            Workshops
          </PageHeader>
          <PageDescription>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </PageDescription>

          <Rows>
            <Header pad="6px">
              <Column flex="2">Name</Column>
              <Column flex="1">Released</Column>
              <Column flex="1">Length</Column>
              <Column flex="1">Price</Column>
            </Header>

            <Row to="/w/kickstarter-001">
              <Column flex="2">Craigslist Clone</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">Using Firebase</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">Using Firebase</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">
                Build a custom audio player (Spotify clone?)
              </Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">How to GIT it done</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">You can probably just use CSS</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">How to ask for help</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>

              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">Airbnb Clone</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">6 hrs</Column>
              <Column flex="1">24</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">Breaking Down a Designer's Comp</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">2 hrs</Column>
              <Column flex="1">Free</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2">Estimating Times</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">2 hrs</Column>
              <Column flex="1">Free</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2"> Custom Auth0 Form</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">2 hrs</Column>
              <Column flex="1">Free</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2"> Handling a Complex Design</Column>
              <Column flex="1">02 Jan 2019</Column>
              <Column flex="1">2 hrs</Column>
              <Column flex="1">Free</Column>
              <img src={Arrow} />
            </Row>

            <Row to="/w/kickstarter-001">
              <Column flex="2"> Deploy w/ Netlify></Column>
              <Column flex="1">Feb 2019</Column>
              <Column flex="1">15 min</Column>
              <Column flex="1">Free</Column>
              <img src={Arrow} />
            </Row>
          </Rows>
        </PageWrap>
      </div>
    );
  }
}

export default Store;
