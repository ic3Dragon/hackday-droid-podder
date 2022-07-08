import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <PageInfo>
      Made with love by a
      {' '}
      <a href="https://www.salt.dev/" target="_blank" rel="noreferrer">{'</SALT>'}</a>
      {' '}
      developer.

    </PageInfo>
  </Wrapper>
);

const Wrapper = styled.section`
position: fixed;
width: 100vw;
bottom: 0;
`;

const PageInfo = styled.p`
margin: 1rem; 
`;

export default Footer;
