import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Arrow from '../images/rightArrow.svg';

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

const PageHeader = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #111;
  text-decoration: none;
  justify-content: space-between;
  font-family: 'Work Sans';

  .quick-help {
    font-size: 12px;
  }

  .fx {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 8px;
    height: 18px;
    transform: scaleX(-1);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: baseline;

    .quick-help {
      margin-top: 12px;
    }
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

const ScheduleButton = styled('a')`
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

class Mentorship extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
          <PageHeader to="/">
            <Link
              to="/"
              style={{ color: '#111', textDecoration: 'none' }}
              className="fx"
            >
              <img src={Arrow} />
              Mentorship
            </Link>
          </PageHeader>
          <PageDescription>
            <p>
              For the last seven years I’ve been building websites and web apps
              for companies, friends, family, and myself. It’s been an uphill
              journey since day one, but I’ve been loving every minute of it –
              especially helping others learn how. Pretty much since the
              beginning of my career, I’ve always been eager to help answer
              questions, from basic “How do I make X do Y” to architecting data
              models for web apps. To be cliché, coding has changed my life, and
              I want to help others use it to change theirs and have more of
              those “aha” moments.
            </p>
            <div className="quick-help">
              Looking for some quick coding help?{' '}
              <a
                style={{ color: '#111', fontWeight: '600' }}
                target="_blank"
                href="https://calendly.com/code-with-christian/frontend-help"
              >
                Book a 40 min session for $25.
              </a>
            </div>
          </PageDescription>
          <PageSections>
            <Section mb="30px">
              <h3>Curriculum Outline</h3>
              <Service>
                <b>HTML & CSS Fundamentals</b>
                <p>
                  Learn all about the skeleton of the web and how to give it
                  some skin!
                </p>
              </Service>

              <Service>
                <b>Chrome Dev Tools</b>
                <p>
                  The number one used tool in web developmnt besides your
                  keyboard
                </p>
              </Service>

              <Service>
                <b>Layouts</b>
                <p>
                  How to reason about and appraching creating beautiful web
                  pages.
                </p>
              </Service>

              <Service>
                <b>Intro to Git and Github</b>
                <p>
                  We'll cover the Why's behind the reason we use Git, setting up
                  a project on Github, creating and checking out branches,
                  resolving merge conflicts and more!
                </p>
              </Service>

              <Service>
                <b>Deploying Sites with Netlify</b>
                <p>
                  How to reason about and appraching creating beautiful web
                  pages.
                </p>
              </Service>

              <Service>
                <b>Modern JavaScript</b>
                <p>
                  The J in JAM Stack – Not to get confused with <i>Java</i>
                </p>
              </Service>

              <Service>
                <b>React</b>
                <p>
                  Learn how to build sites and apps with the insanely popular JS
                  library for building user interfaces and highly reusable code.
                </p>
              </Service>

              <Service>
                <b>Working with Data and APIs</b>
                <p>
                  We'll cover how to create, retrieve, update and delete data
                  within your website and app.
                </p>
              </Service>

              <Service>
                <b>Personal Goal Setting</b>
                <p>
                  Whether your goal is to become a freelancer, create a startup,
                  or join an agency – we'll dive deeper into creating a
                  personalized action plan.
                </p>
              </Service>
            </Section>
            <Section>
              <h3>What to expect</h3>
              <p>
                For 3 months, we'll work together meeting 5 times per week (2x
                over video, 3x over Slack) covering the foundations of modern
                frontend web development.
              </p>
              <p>
                You’ll learn how to code using the the JAM stack (Javascript,
                API’s and Markup), and build agency-worthy designs. Aside from
                just learning the syntax and throwing something up on the
                inter-webs, I’m also going to teach you how to think like a
                frontend developer. We’ll cover how to approach common issues
                and troubleshooting techniques, how to properly ask questions in
                development communities, breaking down designs, and I’ll go over
                what it’s like to work with a team of other developers and
                designers.
              </p>

              <h3>Price</h3>
              <p>
                Total price is $900. First deposit ($450) due beginning of
                class. Second deposit due after the 6th week. Within the first
                week, if you decide this isn’t for you, no worries, full refund.
              </p>

              <ScheduleButton target="_blank" href="https://www.typeform.com">
                Apply for Mentorship
              </ScheduleButton>
            </Section>
          </PageSections>
        </PageWrap>
      </div>
    );
  }
}

export default Mentorship;
