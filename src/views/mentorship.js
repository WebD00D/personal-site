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

const PageHeader = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #111;
  text-decoration: none;
  justify-content: space-between;

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

            <div className="quick-help">
              Looking for some quick coding help?{' '}
              <a
                style={{ color: '#111', fontWeight: '600' }}
                target="_blank"
                href="https://calendly.com/code-with-christian/frontend-help"
              >
                Book a 30 min session for $15.
              </a>
            </div>
          </PageHeader>
          <PageDescription>
            <p>
              Intersted in learning how to code, and not really sure where you
              want it to take you? Maybe get hired at an award winning agency,
              disrupt an industry at a startup, or start a freelance career –
              all of which can be very lucrative and quite rewarding. So how do
              you get your foot in the door and possibly fill one of these
              roles? Well, you go through the steps of completing an application
              and answer a few questions, send over your resume, cover letter,
              references, and lastly a link to your …portfolio.
            </p>
            <p>
              See a problem here? If you’ve read this far, I’m going to assume
              you don’t have much experience coding and probably an empty
              portfolio to show for it – but that’s okay, we’re going to build
              one for you together! Introducting, my Portfolio Kickstart series!
              Where we'll get you off the ground running with a portfolio that
              you could proudly take and show off to a future employer, and
              explain in detail how you built each project.
            </p>
          </PageDescription>
          <PageSections>
            <Section mb="30px">
              <h3>Course Outcomes</h3>
              <Service>
                <b>Build 3 Websites</b>
                <p>Beautifully designed, and agency worthy.</p>
              </Service>

              <Service>
                <b>Build a Portfolio Site</b>
                <p>You'll need a place to showcase the goods!</p>
              </Service>

              <Service>
                <b>Git Deep Dive</b>
                <p>
                  Learn how to use Github to save and collaborate on projects
                </p>
              </Service>

              <Service>
                <b>Learn How to Think like Developer</b>
                <p>
                  Learn how to approach and solve problems, break down designs,
                  and work with a team.
                </p>
              </Service>

              <Service>
                <b>Personalized Action Plan</b>
                <p>
                  Being a developer means non-stop learning. At the end of the
                  course we'll put together a game plan tailored to your goals
                  of becoming the best developer you can be.
                </p>
              </Service>
            </Section>
            <Section>
              <h3>What to expect</h3>
              <p>
                For 8 weeks, we'll work together (meeting over video 2x per
                week, and daily Slack standups) to build 3 beautiful websites,
                and a portfolio site to showcase them.{' '}
              </p>
              <p>
                You’ll be working with modern day web technologies using the JAM
                stack (JavaScript, Api’s, and Markup) and coding up designs that
                are agency worthy. Now, just making a few websites and putting
                them up on the inter-webs is not the overarching goal here.
                Throughout our journey, I’m going to teach you how to think like
                a frontend developer. We’ll cover how to approach problems and
                troubleshoot, ask the right questions, break down designs, and
                I’ll go over what it’s like and what you can expect working on a
                team with other developers, designers, and managers.
              </p>

              <h3>Price</h3>
              <p>
                Total price is $499. First deposit (50%) due beginning of class.
                Second deposit due after the 4th week. Within the first week, if
                you decide this isn’t for you, no worries, full refund.
              </p>
              <p>
                Just to note, the national average starting salary for a{' '}
                <i>Junior</i> Frontend Developer is <b>$59,776*</b>
                <div>
                  <small>
                    <a
                      target="_blank"
                      style={{ color: '#111' }}
                      href="https://www.indeed.com/salaries/Junior-Front-End-Developer-Salaries"
                    >
                      *As of December 2018
                    </a>
                  </small>
                </div>
              </p>

              <ScheduleButton href="/application">
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
