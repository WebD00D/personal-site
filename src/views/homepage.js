import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import RightArrow from '../images/rightArrow.svg';

const HomepageSections = styled.div`
  height: calc(100vh - 270px);
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #111;
`;

const Section = styled(Link)`
  height: 50%;
  flex: 1;
  flex-basis: 50%;

  color: #111;
  text-decoration: none;

  &:nth-child(1),
  &:nth-child(2) {
    border-bottom: 1px solid #111;
  }

  &:hover {
    cursor: pointer;

    img {
      transform: translateX(8px);
    }
  }
`;

const SectionContainer = styled.div`
  padding: 24px;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 16px;
    margin-left: 8px;
    transition: 0.2s ease;
  }
`;

const MiddleLine = styled.div`
  width: 1px;
  height: calc(100vh - 270px);
  left: 50%;
  position: absolute;

  background-color: #111;
`;

class HomepageView extends Component {
  render() {
    return (
      <div className="container">
        <HomepageSections>
          <Section to="/studio">
            <SectionContainer>
              <SectionTitle>
                Studio <img src={RightArrow} />
              </SectionTitle>
            </SectionContainer>
          </Section>
          <Section to="/mentorship">
            <SectionContainer>
              <SectionTitle>
                Mentorship <img src={RightArrow} />
              </SectionTitle>
            </SectionContainer>
          </Section>
          <Section to="/editorial">
            <SectionContainer>
              <SectionTitle>
                Editorial <img src={RightArrow} />
              </SectionTitle>
            </SectionContainer>
          </Section>
          <Section to="/store">
            <SectionContainer>
              <SectionTitle>
                Store <img src={RightArrow} />
              </SectionTitle>
            </SectionContainer>
          </Section>
          <MiddleLine />
        </HomepageSections>
      </div>
    );
  }
}

export default HomepageView;
