import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as UI from '../components/UI';

import me from '../images/mesketch.png';

import YoungFrankk from '../images/yf_logo.png';
import RareArtLabs from '../images/logo_rare.png';
import StabMag from '../images/logo_stab.png';
import Mobelux from '../images/Mobelux.png';
import Elephant from '../images/elephant.png';
import KNOWN from '../images/known.png';
import Maya from '../images/mayalogo@2x.png';

const Section = styled('div')`
  padding-top: 60px;
  padding-bottom: ${props => props.pb || '60px'};

  background-color: ${props => props.bg};
`;

const Brands = styled('div')`
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled('a')`
  img {
    height: ${props => props.height || '50px'};
  }
`;

const MyFace = styled('img')`
  position: relative;
  top: -40px;
  max-height: 440px;
  width: auto;
`;

class HomepageView extends Component {
  render() {
    return (
      <div>
        <Section pb="50px">
          <div className="content-wrap">
            <UI.Flex>
              <UI.Box flex="2">
                <UI.H1>Hello, beinvenue, välkommen, aloha.</UI.H1>
                <UI.H2 mb="50px">
                  My name is Christian. I can build you a website, teach you how
                  to code, or consult and knock around some ideas for your next
                  digital project. This past year I've mostly been slinging code
                  for{' '}
                  <UI.ExternalLink href="https://www.rareart.io">
                    Rare Art Labs
                  </UI.ExternalLink>
                  , and{' '}
                  <UI.ExternalLink href="https://www.stabmag.com">
                    Stab Magazine.
                  </UI.ExternalLink>{' '}
                  I'm available for small freelance projects.
                </UI.H2>
                <UI.ButtonLink href="">Connect with me</UI.ButtonLink>
              </UI.Box>
              <UI.Box flexCenter>
                <MyFace src={me} />
              </UI.Box>
            </UI.Flex>
          </div>
        </Section>

        <div className="content-wrap">
          <Brands>
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

        <Section bg="#0f0f10">
          <div className="content-wrap">
            <UI.H3 color="#FFF">A brief introduction</UI.H3>
            <UI.P color="#d6d6d6">
              Ein gewöhnlicher Samstag, ich gehe nach dem Aufstehen zum Bäcker,
              später dann zum Einkaufen, ich sauge die Wohnung, ich arbeite
              zusammen mit meiner Tochter eine Zeitlang im Garten und am
              Nachmittag sind. Ein gewöhnlicher Samstag, ich gehe nach dem
              Aufstehen zum Bäcker, später dann zum Einkaufen, ich sauge die
              Wohnung, ich arbeite zusammen mit meiner Tochter eine Zeitlang im
              Garten und am Nachmittag sind.
            </UI.P>
          </div>
        </Section>
        <Section>
          <div className="container">Services</div>
        </Section>
        <Section bg="#f9f9f9">
          <div className="container">Journal</div>
        </Section>
        <Section>
          <div className="container">Featured Workshops</div>
        </Section>
      </div>
    );
  }
}

export default HomepageView;
