import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as UI from './UI';
import Newsletter from './Newsletter';

const StyledFooter = styled.div`
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #111;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:nth-child(1) {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    justify-content: flex-end;
  }

  a {
    color: #111;
    font-size: 12px;
    text-decoration: none;
  }

  .page-link {
    margin-right: 16px;
  }

  @media (max-width: 800px) {
    &:nth-child(1) {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: flex-start;
      margin-bottom: 8px;
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <StyledFooter>
          <FooterSection>
            <Link className="page-link" to="/contact">
              Contact
            </Link>
            <a
              href="https://www.instagram.com"
              className="page-link"
              target="_blank"
            >
              Daily
            </a>

            <a
              target="_blank"
              href=" https://app.termly.io/document/terms-of-use-for-website/be631fd4-ac17-4f97-bc1d-151acdde7ac0"
              className="page-link"
            >
              Terms of use
            </a>
          </FooterSection>
          <FooterSection>
            <Newsletter />
          </FooterSection>
        </StyledFooter>
      </div>
    );
  }
}

export default Footer;
