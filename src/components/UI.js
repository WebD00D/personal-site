import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Flex = styled('div')`
  display: flex;
  ${props => (props.column ? 'flex-direction: column' : '')}

  ${props => (props.alignCenter ? 'align-items: center' : '')}
`;

export const Box = styled('div')`
  flex: ${props => props.flex || 1};
  ${props => (props.column ? 'flex-direction: column' : '')}
  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt};

  ${props =>
    props.flexCenter
      ? 'display: flex; justify-content: center; align-items:center'
      : ''};

 
`;

export const H1 = styled('h1')`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 70px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
`;

export const H2 = styled('h2')`
  margin-bottom: ${props => props.mb};
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1.75;
`;

export const H3 = styled('div')`
  margin-bottom: 40px;
  position: relative;
  width: fit-content;
  font-family: 'Work Sans', sans-serif;

  font-size: 24px;

  ${props => (props.theme === 'dark' ? 'color: #0f0f10' : 'color: #fff')}

  &:after {
    position: absolute;
    height: 16px;
    width: -webkit-fill-available;
    left: 0px;

    ${props =>
      props.theme === 'dark'
        ? 'background-color: #0f0f10'
        : 'background-color: #ccc'}

    opacity: 0.2;
    content: '';
    bottom: -5px;
  }
`;

export const H4 = styled('h4')`
  margin-bottom: ${props => props.mb};
  font-size: ${props => (props.title ? '18px' : '14px')};
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.75;
`;

export const P = styled('p')`
  margin: 0px;
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1.75;
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  text-align: justify;
`;

const ButtonBase = `
  position: relative;
  height: 48px;
  width: 220px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0f0f10;
  border: 2px solid #0f0f10;
  color: #fff;
  text-align: center;
  line-height: 32px;
  text-decoration: none;
  transition: .25s ease;
  font-family: 'Work Sans', sans-serif;


  &:before {
    position: absolute;
    height: 48px;
    border: 2px solid #0f0f10;
    width: 220px;
    right: -7px;
    top: 3px;
    content: '';
    transition: .25s ease;

  }

  &:active {

    background-color: #000;
    border-color: #000;
    color: #ccc;

    &:before {
      border-color: #000;
    }
  }

`;

export const Button = styled(Link)`
  ${ButtonBase}
`;

export const ButtonLink = styled('a')`
  ${ButtonBase}
`;

export const ExternalLink = styled('a')`
  color: #0f0f10;
  font-weight: 500;
`;

export const Wordmark = styled(Link)`
  font-style: normal;
  line-height: 24px;
  font-size: 18px;
  text-align: justify;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: #111;
`;

export const Video = styled('iframe')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const VideoContainer = styled('div')`
  padding: 56.25% 0 0 0;
  position: relative;
`;
