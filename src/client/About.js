import React from 'react';
import styled from 'styled-components';

const AboutHeading = styled.h1`
  color: #000;
  text-shadow: 0 8px 6px -6px black;
  text-align:center;
  max-width:700px;
  width:100%;
  margin:auto;
  display:block;
`;

const About = () => {
  return(
    <AboutHeading>
      Hi, I'm Christian! This is my first SSR React implementation.
    </AboutHeading>
  )
}

export default About;