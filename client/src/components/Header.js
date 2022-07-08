import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Wrapper>
    <h1>Droid Podder</h1>
  </Wrapper>
);

const Wrapper = styled.section`
color: blue; 
margin-top: 1rem;
font-size: 2rem;
`;

export default Header;
