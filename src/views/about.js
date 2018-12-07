import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Arrow from '../images/rightArrow.svg';

const PageWrap = styled.div`
  max-width: 1000px;
  padding-bottom: 150px;
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

const PageSections = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1;

  margin-bottom: ${props => props.mb};

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
    line-height: 1.8;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 12px;
  border-bottom: 1px solid #111;

  p {
    margin: 0px;
    margin-top: 4px;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const SubSection = styled.div`
  width: 300px;

  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt || '60px'};

  p {
    font-size: 12px;
    line-height: 1.8;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Quote = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-size: 12px;
  letter-spacing: 0.5px;

  span {
    opacity: 0.4;
    font-style: normal;
    margin-top: 6px;
  }
`;



class About extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
          <PageHeader to="/">
            <img src={Arrow} />
            About
          </PageHeader>
          <PageDescription>
            <p>
              Hello, world. My name is Christian - developer, teacher,
              consultant currently living in the land of eternal sunshine and
              overpriced lattes that is Los Angles. I’ve been developing for the
              web since 2012, and have worked with clients of all shapes and
              sizes – from building voting software for the state legislatures
              of Oregon, New Mexico, and New Hampshire, e-commerce platforms for
              several startups, working in an award winning agency, managing a
              2m hits per month online magazine, to building a blockchain
              enabled marketplace for digital art – I’ve had my hands in quite a
              few things, and have learned so much along the way.{' '}
            </p>

            <p>
              Fast forward to this very moment of you reading this, and you’ll
              see I’m in the process of building my own brand this time. Yes, I
              still do client work,{' '}
              <Link style={{color: "#111"}} to="/studio">
                (you can check that out or hire me by the day here)
              </Link>
              , however, in 2019 I’ll be allocating a majority of my time
              crafting workshops and mentoring folks who want to become web
              developers. Being able to teach others how to code has been my
              guiding light goal for the last several years, and I feel I’m at a
              point in my career to really take that on, own it, and see where
              it goes.{' '}
            </p>

            <p>
              Cheers to you and the year ahead, and I appreciate you taking the
              time to check out my carved out corner of the internet.{' '}
            </p>

            <p>Christian</p>
          </PageDescription>
        </PageWrap>
      </div>
    );
  }
}

export default About;
