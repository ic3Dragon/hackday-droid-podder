/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'; // , useEffect
import styled, { keyframes } from 'styled-components';
import Form from './Form';
// import SoundBox from './SoundBox';
// import Summary from './Summary';

const Converter = () => {
  const [fetchText, setFetchText] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [summary, setSummary] = useState('');

  const renderResults = () => {
    if (isLoading) {
      return (
        <LoadingWrapper>
          <h3>Sound is loading</h3>
          <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </LoadingWrapper>
      );
    } if (isLoading === false) {
      return (
        <Wrapper>
          <audio controls name="media" alt="hello sound">
            <source src="http://localhost:8080/voiced.mp3" type="audio/mpeg" />
          </audio>
          <h3>Summary</h3>
          <p>{summary}</p>
          <h3> Your Text </h3>
          <p>{fetchText}</p>
        </Wrapper>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <Form
        setFetchText={setFetchText}
        setIsLoading={setIsLoading}
        setSummary={setSummary} />
      {/* audioContext={audioContext} */}
      {/* <SoundBox
        audio={audio}
        isLoading={isLoading} /> */}
      {/* audioContext={audioContext} */}

      {renderResults()}

    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 1 rem;
display: inherit; 
font-size: 1rem;
align-items: center;
flex-direction: inherit;
gap: 1.5rem; 
text-align: center;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const BounceAnimation = keyframes`
  0% {  margin-bottom: 0; }
  50% {  margin-bottom: 1rem;}
  100% {  margin-bottom: 0; }
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.8s linear infinite;
  animation-delay: ${props => props.delay};
`;

export default Converter;
