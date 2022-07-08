import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Wrapper>
    <h1>Droid Podder</h1>
  </Wrapper>
);

const Wrapper = styled.section`
color: #9A031E; 
margin-top: 1.5rem;
font-size: 2.5rem;
`;

export default Header;
