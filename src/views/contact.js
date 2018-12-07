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

const ScheduleButton = styled.a`
  margin-top: 30px;
  width: 220px;
  height: 42px;
  display: flex;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #111;
  color: #fff;
`;

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
          <PageHeader to="/">
            <img src={Arrow} />
            Contact
          </PageHeader>
          <PageDescription>
            <p>
              Email works great, although I'm generally not lightening fast to
              respond. The quickest way to reach me is a good ol' fashion phone
              call.
            </p>

            <p>Recruiters, thank you but no thank you :)</p>
            <ul>
              <li>studio@email.com</li>
              <li>+1 213.349.1616 </li>
            </ul>
            <ScheduleButton
              target="_blank"
              href="https://calendly.com/code-with-christian/quick-chat"
            >
              Schedule a call
            </ScheduleButton>
          </PageDescription>
        </PageWrap>
      </div>
    );
  }
}

export default Contact;
