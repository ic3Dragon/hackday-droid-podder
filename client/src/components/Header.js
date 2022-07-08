import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Wrapper>
    <h1>Welcome to the Droid Podder</h1>
  </Wrapper>
);

const Wrapper = styled.section`
color: #9A031E; 
margin-top: 5rem;
font-size: 4rem;
`;

export default Header;
