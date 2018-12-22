import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Arrow from '../images/rightArrow.svg';

import * as UI from '../components/UI';

import { workshops } from './data';

const PageWrap = styled.div`
  max-width: 1000px;
  padding-bottom: 150px;
  padding-top: 50px;
  margin-right: auto;
  margin-left: auto;

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

const EditorialWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EditorialSummary = styled(Link)`
  width: 310px;
  padding-bottom: 16px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;

  letter-spacing: 0.5px;
  border-bottom: 1px solid #111;
  text-decoration: none;
  color: #111;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  div:nth-child(1) {
    font-size: 12px;
    line-height: 1;
    opacity: 0.4;
    margin-bottom: 6px;
  }
  div:nth-child(2) {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: 6px;
  }
  div:nth-child(3) {
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 1100px) {
    margin-bottom: 60px;
    width: 48%;
  }

  @media (max-width: 700px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

class Template extends Component {
  render() {
    const workshop = workshops[this.props.location.pathname];
    return (
      <div className="container">
        <PageWrap>
          <PageHeader to="/workshops">
            <img src={Arrow} />
            {workshop.name}
          </PageHeader>
          <PageDescription>
            {workshop.description}
            <a href="#" style={{ color: '#000' }}>
              Workshop downloads here
            </a>
          </PageDescription>

          <UI.VideoContainer frameBorder="0" allowFullScreen>
            <UI.Video src={workshop.vimeo} />
          </UI.VideoContainer>
        </PageWrap>
      </div>
    );
  }
}

export default Template;
