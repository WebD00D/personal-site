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

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
    line-height: 1.8;
  }
`;

const Service = styled.div`
  width: 300px;
  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 12px;
  border-bottom: 1px solid #111;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const SubSection = styled.div`
  margin-top: 60px;
  width: 300px;

  margin-bottom: ${props => props.mb};

  p {
    font-size: 12px;
    line-height: 1.8;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Projects = styled.div`
  width: 300px;
  column-count: 2;
  margin-top: 30px;

  a {
    color: #111;
  }

  li {
    font-size: 12px;
    line-height: 1.8;
  }

  ul {
    margin-top: 0px;
    margin: 0px;
    padding-inline-start: 16px;
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

class Studio extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
          <PageHeader to="/">
            <img src={Arrow} />
            Studio
          </PageHeader>
          <PageDescription>
            <p>
              Throughout my career I’ve been lucky enough to work with some
              insanely talented and smart people who’ve helped shape me into the
              developer I am today ( hats off to those folks 🙏 ). The majority
              of my expertise lies within the frontend real of the web, although
              I consider myself a full stack developer – I can build you a web
              app from scratch. Outside of coding, I can assist you, your
              company, or clients with project planning, workload estimations,
              testing, interface design, and more.
            </p>

            <p>
              <Link style={{ color: '#111' }} to="/contact">
                I’m currently available for small projects.
              </Link>
            </p>
          </PageDescription>
          <PageSections>
            <Section>
              <h3>Expertise</h3>
              <Service>01 Web Frontend & Backend</Service>
              <Service>02 Ecommerce (Shopify or custom)</Service>
              <Service>03 Content Management</Service>
              <Service>04 Testing and Quality Assurance</Service>
              <Service>05 Consulting</Service>
              <Service>06 Workload Estimations</Service>
              <Service>07 Planning</Service>
              <Service>08 User Interface Design</Service>
              <SubSection mb="60px">
                <h3>Technologies & Tools</h3>
                <p>
                  HTML5, CSS, SASS, JavaScript, React, React Native, Redux,
                  GraphQL, Firebase, Netlify, Github, Figma, Illustrator,
                  Photoshop, Slack, & Milanote.
                </p>
              </SubSection>
            </Section>
            <Section>
              <h3>Select Projects & Work Experience</h3>
              <Projects>
                <ul>
                  <li>
                    <a target="_blank" href="https://dapp.rareart.io/">
                      R.A.R.E
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.stabmag.com">
                      Stab Magazine
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.mobelux.com">
                      Mobelux
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.thinkful.com">
                      Thinkful
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.joinsurfclub.com">
                      Surf Club LA
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.youngfrankk.com/">
                      Young Frankk
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.knownagency.com">
                      KNOWN Agency
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.shopdalrae.com/">
                      Dal Rae
                    </a>
                  </li>
                  <li>Maya</li>
                  <li>
                    <a target="_blank" href="https://www.elephant.com/">
                      Elephant Auto
                    </a>
                  </li>
                  <li>Int’l. Roll-Call</li>
                  <li>Quiet Corner</li>
                  <li>Boardgrab</li>
                  <li>Brewrocket</li>
                  <li>COG</li>
                </ul>
              </Projects>
              <ScheduleButton
                target="_blank"
                href="https://calendly.com/code-with-christian/quick-chat"
              >
                Schedule a call
              </ScheduleButton>
              <SubSection>
                <Quote>
                  <div>
                    “Christian was so great to work with, pays attention to
                    detail like a laser.”
                  </div>
                  <span>Sam McIntosh, Stab Magazine - CEO</span>
                </Quote>
                <Quote>
                  <div>
                    “Christian was so great to work with, pays attention to
                    detail like a laser.”
                  </div>
                  <span>Sam McIntosh, Stab Magazine - CEO</span>
                </Quote>
                <Quote>
                  <div>
                    “Christian was so great to work with, pays attention to
                    detail like a laser.”
                  </div>
                  <span>Sam McIntosh, Stab Magazine - CEO</span>
                </Quote>
              </SubSection>
            </Section>
          </PageSections>
        </PageWrap>
      </div>
    );
  }
}

export default Studio;
