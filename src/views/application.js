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

  margin-bottom: ${props => props.mb};

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
    line-height: 1.8;
  }

  input {
    height: 30px;
    margin-top: 12px;
    outline: none;
    border: 1px solid #111;
    padding-left: 3px;
  }

  textarea {
    height: 100px;
    margin-top: 12px;
    outline: none;
    border: 1px solid #111;
    padding-left: 3px;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 12px;

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

const ScheduleButton = styled.button`
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
  border: none;
  cursor: pointer;
`;

class Application extends Component {
  render() {
    return (
      <div className="container">
        <PageWrap>
          <PageHeader to="/mentorship">
            <img src={Arrow} />
            Mentorship Application
          </PageHeader>
          <PageDescription>
            <p id="start">
              Life is short, and we should all value our time. I know I
              certainly do. Coding isn’t for everyone, and doing anything
              worthwhile probably isn’t going to be a cake walk. With that, I
              only like to take folks under my wing who are driven and want to
              learn – the naturally curious type. I don’t care if you don’t know
              the difference between `let`, and `const`, or even what those are
              to begin with. That all can be taught.
              What can’t be taught is personal drive – the drive to achieve
              something you know won’t be easy. Those are the people I want to
              help.
            </p>
            <p>
              If this sounds like you, awesome! Please take a few minutes to
              fill out this quick application. Show me your serious :)
            </p>
          </PageDescription>
          <PageSections>
            <form
              name="application"
              method="POST"
              action="/submitted"
              netlify
              style={{ width: '100%' }}
            >
              <Section mb="30px">
                <h3>Basic Info</h3>
                <Service>
                  <b>What's your full name?</b>
                  <input name="full-name" type="text" required />
                </Service>

                <Service>
                  <b>Email address</b>
                  <input name="email" type="email" required />
                </Service>

                <Service>
                  <b>Age</b>
                  <input name="age" type="number" required />
                </Service>

                <Service>
                  <b>Location</b>
                  <input name="location" type="text" required />
                </Service>

                <Service>
                  <b>Occupation</b>
                  <input name="occupation" type="text" required />
                </Service>
              </Section>

              <Section mb="30px">
                <h3>Questions</h3>
                <Service>
                  <b>
                    Why do you want to learn how to code?{' '}
                    <div
                      style={{
                        opacity: '0.5',
                        fontWeight: '400',
                        marginTop: '4px'
                      }}
                    >
                      Have an idea you’re wanting to flesh out? Maybe just
                      looking for a well paying job? Let me know in detail.
                    </div>
                  </b>
                  <textarea name="why-learn-to-code" required />
                </Service>

                <Service>
                  <b>
                    A friend approaches you and says, “Hey, the garden hose
                    isn't working!”. How would you respond to this?
                  </b>
                  <textarea name="garden-hose-question" required />
                </Service>

                <Service>
                  <b>
                    Do you get frustrated easily when you don’t understand
                    something?
                  </b>
                  <input name="frustrared" type="text" required />
                </Service>

                <Service>
                  <b>
                    What’s your experience with HTML, CSS, and JavaScript, if
                    any?
                  </b>
                  <input name="past-coding-experience" type="text" required />
                </Service>

                <Service>
                  <b>
                    What do you think will be your biggest challenge to learn to
                    code?
                    <div
                      style={{
                        opacity: '0.5',
                        fontWeight: '400',
                        marginTop: '4px'
                      }}
                    >
                      ex. Staying focused or motivated, allocating the time, etc
                    </div>
                  </b>
                  <textarea name="biggest-challenge" required />
                </Service>

                <Service>
                  <b>
                    What are your hobbies / interests outside of work?
                    <div
                      style={{
                        opacity: '0.5',
                        fontWeight: '400',
                        marginTop: '4px'
                      }}
                    >
                      Unless of course that is your hobby as well
                    </div>
                  </b>
                  <textarea name="hobbies" required />
                </Service>

                <Service>
                  <b>PC or Mac user?</b>
                  <input name="pc-mac-user" type="text" required />
                </Service>

                <Service>
                  <b>Do you have access to a high speed internet connection?</b>
                  <input name="internet-connection" type="text" required />
                </Service>

                <Service>
                  <b>
                    What’s your current work / school schedule like? How much
                    time per week can you dedicate to learning with me?
                  </b>
                  <input name="schedule" type="text" required />
                </Service>

                <Service>
                  <b>
                    Pretend you wake up tomorrow morning and have Steve Wozniak
                    programming skills. What would you build first?
                  </b>
                  <textarea name="the-woz-question" required />
                </Service>

                <ScheduleButton type="submit">
                  Apply for Mentorship
                </ScheduleButton>
              </Section>
            </form>
          </PageSections>
        </PageWrap>
      </div>
    );
  }
}

export default Application;
