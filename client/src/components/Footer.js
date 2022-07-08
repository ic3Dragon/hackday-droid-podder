import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <PageInfo>
      @ Footer goes here
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
