import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Converter from './components/Converter/Converter';
import Footer from './components/Footer';

function App() {
  return (
    <AppWrap className="App">
      <Header />
      <Converter />
      <Footer />
    </AppWrap>
  );
}
const AppWrap = styled.section`
 display: flex;
 flex-direction: column; 
 align-items: center;
 gap: 2rem;
 width: 90%;
 margin-left:5%;
 `;

export default App;
