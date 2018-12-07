import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const PageWrap = styled.div`
  height: calc(100vh - 280px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-left: auto;
  margin-right auto;
  text-align: center;

  p {
      font-size: 12px;
      line-height: 1.5;
  }

  a {
    color: #111;
    font-size: 12px;
    margin-top: 30px;
  }
`;

class Submitted extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
         <b>Application Submitted!</b>
          <p>
            Please allow between 3-5 days for me to review and get back to you.
            In the meantime, checkout some of my courses. If you see one that cost a few bones, use code FUTURECODER for 50% off :)
          </p>
          <Link to="/store">Browse the Store</Link>
        </PageWrap>
      </div>
    );
  }
}

export default Submitted;
