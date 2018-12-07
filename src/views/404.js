import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const PageWrap = styled.div`
  height: calc(100vh - 280px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  a {
    color: #111;
    font-size: 12px;
    margin-top: 30px;
  }
`;

class NoMatch extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
          Sadly, nothing exists here.
          <Link to="/">Try again</Link>
        </PageWrap>
      </div>
    );
  }
}

export default NoMatch;
