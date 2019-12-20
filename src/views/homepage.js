import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import * as UI from "../components/UI";

import me from "../images/mesketch.png";

import YoungFrankk from "../images/yf_logo.png";
import RareArtLabs from "../images/logo_rare.png";
import StabMag from "../images/logo_stab.png";
import Mobelux from "../images/Mobelux.png";
import Elephant from "../images/elephant.png";
import KNOWN from "../images/known.png";
import Maya from "../images/mayalogo@2x.png";
import Weedmaps from "../images/wm.png";



const Section = styled("div")`
  padding-top: 100px;
  padding-bottom: ${props => props.pb || "100px"};

  background-color: ${props => props.bg};

  @media (max-width: 1100px) {
    padding-top: 32px;
  }
`;

const Hero = styled(UI.Flex)`

  @media (max-width: 1100px) {
    flex-direction: column;

    h1 {
      font-size: 30px;
    }

  }

`

const HelpSection = styled(UI.Flex)`
  @media (max-width: 1100px) {
    flex-direction: column;

    .services {
      display: none;
    }
  }
`

const Brands = styled("div")`
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    overflow-x: scroll;
  }
`;

const Brand = styled("a")`
  img {
    height: ${props => props.height || "50px"};
  }

  @media (max-width: 1100px) {
    img {
      margin-right: 22px;
      margin-left: 22px;
    }
  }
`;

const MyFace = styled("img")`
  position: relative;
  top: -40px;
  max-height: 440px;
  width: auto;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ServiceImage = styled("div")`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90px;
`;

const JournalImage = styled("img")`
  height: 300px;
`;

class HomepageView extends Component {
  render() {
    return (
      <div>
        <Section pb="50px">
          <div className="content-wrap">
            <Hero>
              <UI.Box flex="2">
                <UI.H1>
                  👋 Hi there! I'm Christian – Software engineer and mentor in sunny Los Angeles.
                </UI.H1>
                <UI.H2 mb="50px">
                  Welcome to my corner of the internet. I can build you a
                  web(site/app), teach you how to code, or consult and knock
                  around some ideas for your next project. This past year I've
                  been slinging code for{" "}
                  <UI.ExternalLink href="https://www.weedmaps.com">
                    Weedmaps
                  </UI.ExternalLink>
                  , and a really cool project called{" "}
                  <UI.ExternalLink href="https://www.stabmag.com">
                    Maya Care.
                  </UI.ExternalLink>{" "}
                  When I'm not behind the screen, I like to fly airplanes,
                  travel, surf and play tennis with my wife.
                </UI.H2>
                <UI.ButtonLink href="#help">Learn More</UI.ButtonLink>
              </UI.Box>
              <UI.Box flexCenter>
                <MyFace src={me} />
              </UI.Box>
            </Hero>
          </div>
        </Section>

        <div className="content-wrap">
          <Brands>
            <Brand height="60px" href="https://www.weedmaps.com">
              <img src={Weedmaps} />
            </Brand>
            <Brand height="60px" href="https://www.rareart.io">
              <img src={RareArtLabs} />
            </Brand>
            <Brand height="40px" href="https://www.youngfrankk.com">
              <img src={YoungFrankk} />
            </Brand>
            <Brand height="30px" href="https://www.stabmag.com">
              <img src={StabMag} />
            </Brand>
            <Brand height="60px" href="https://www.mobelux.com">
              <img src={Mobelux} />
            </Brand>
            <Brand height="40px" href="https://www.elephant.com">
              <img src={Elephant} />
            </Brand>
            <Brand height="30px" href="https://www.knownagency.com">
              <img src={KNOWN} />
            </Brand>
            <Brand height="40px" href="">
              <img src={Maya} />
            </Brand>
          </Brands>
        </div>

        <Section bg={"#0f0f10"} id="help">
          <div className="content-wrap">
            <UI.H3 theme="white">How I can help you</UI.H3>
            <HelpSection alignCenter>
              <UI.Box>
                <UI.P mb="30px" color="#d6d6d6">
                  Over the last 7 years I've worked with brands of all sizes,
                  from local mom and pop shops, to government agencies and multi-million
                  dollar corperations. I can design, build, and manage a software project from the ground up, or 
                  jump into an existing codebase to refactor and get your project ready for launch day. Not ready
                  for development yet? No problem. Entrepreneurship is a passion of mine, and I can help you think through ideas 
                  and turn them into a reality.
                </UI.P>
                <UI.P mb="40px" color="#d6d6d6">
                  As much as I love coding, I also love teaching it. 
                  I've mentored folks from different walks of life, helping them learn to code and launch 
                  their projects. I offer weekly, bi-weekly, or as-you-need it tutoring services to help you build your dreams.
                </UI.P>
                <UI.Button theme="white" to="/studio">Connect with Me</UI.Button>
              </UI.Box>
              <UI.Box mt="-60px" className="services">
                <UI.Flex column>
                  <UI.Flex>
                    <UI.Box mb="20px" flexCenter column>
                      <ServiceImage>
                        <span>👨🏻‍💻</span>
                      </ServiceImage>
                      <UI.H4 mt={0}>Design + Development</UI.H4>
                    </UI.Box>
                    <UI.Box mb="20px" flexCenter column>
                      <ServiceImage>
                        <span>💡</span>
                      </ServiceImage>
                      <UI.H4 mt={0}>Coaching + Mentorship</UI.H4>
                    </UI.Box>
                  </UI.Flex>
                  <UI.Flex>
                    <UI.Box mb="20px" flexCenter column>
                      <ServiceImage>
                        <span>🧭</span>
                      </ServiceImage>
                      <UI.H4 mt={0}>Strategy + Consulting</UI.H4>
                    </UI.Box>
                    <UI.Box mb="20px" flexCenter column>
                      <ServiceImage>
                        <span>📚</span>
                      </ServiceImage>
                      <UI.H4 mt={0}>Workshops + Training</UI.H4>
                    </UI.Box>
                  </UI.Flex>
                </UI.Flex>
              </UI.Box>
            </HelpSection>
          </div>
        </Section>

      </div>
    );
  }
}

export default HomepageView;
