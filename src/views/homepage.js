import React, { Component } from "react";
import styled from "styled-components";

import MyFace from "../images/mesketch.png";

const PageWrap = styled("div")`
  padding: 16px;
  padding-top: 48px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;

  a {
    color: #464646;
    font-size: 18px;
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 12px;
  }

  label {
    color: #626262;
    font-size: 16px;
  }

  p {
    font-size: 20px;
    line-height: 150%;
  }
`;

const Nav = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const Content = styled("div")``;

const Footer = styled("div")`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr 150px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const NewsletterForm = styled("form")`
  max-width: 420px;

  @media (max-width: 600px) {
    max-width: 600px;
  }
`;

const InputRow = styled("div")`
  margin-top: 52px;
  display: flex;

  input {
    background-color: #f6f6f6;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    flex: 1;
    margin-right: 16px;
    font-family: "Crimson Text", serif;
    outline: none;
    font-size: 16px;
  }

  button {
    border: 1px solid #7b7a7a;
    font-family: "Crimson Text", serif;

    height: 32px;
    border-radius: 50px;
    width: 140px;
    font-weight: 700;
    color: #464646;
    outline: none;
    font-size: 16px;
  }
`;

const Portrait = styled("img")`
  height: 200px;

  @media (max-width: 600px) {
    display: none;
  }
`;

class HomepageView extends Component {
  render() {
    return (
      <PageWrap>
        <Nav>
          <h1>Christian Bryant</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/christian-bryant-222723136/"
          >
            Say hello
          </a>
        </Nav>
        <Content>
          <p>
            I believe nothing is too tall to climb or too far to reach. I
            believe everything you dream can be made into reality. This mindset
            helps guide every project I work on and how I choose to spend my
            time – software development just happens to be the medium I choose
            most.
          </p>
          <p>
            Currently writing code at{" "}
            <a
              href="https://hopin.to"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hopin
            </a>
            , and when I’m not, I’m writing and recording for newsletter &
            podcast,{" "}
            <a
              href="https://stackyack.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Yack
            </a>
            . In my non-work hours, I spend my time flying airplanes, surfing,
            and traveling with my{" "}
            <a
              href="https://www.youngfrankk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              amazingly talented wife.
            </a>
          </p>
        </Content>
        <Footer>
          <NewsletterForm name="newsletter-subscription" method="post">
            <input
              type="hidden"
              name="form-name"
              value="newsletter-subscription"
            />

            <h2>Subscribe to my newsletter</h2>
            <label>
              Thoughts on software development, startups, tech, and an
              occasional rambling about whatever else is on my mind.
            </label>
            <InputRow>
              <input
                name="email"
                type="email"
                placeholder="Your email address, please."
              />

              <button type="submit">Submit</button>
            </InputRow>
          </NewsletterForm>
          <Portrait src={MyFace} />
        </Footer>
      </PageWrap>
    );
  }
}

export default HomepageView;
