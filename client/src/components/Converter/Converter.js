/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'; // , useEffect
import styled, { keyframes } from 'styled-components';
import Form from './Form';

const Converter = () => {
  const [fetchText, setFetchText] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [summary, setSummary] = useState('');

  const renderResults = () => {
    if (isLoading) {
      return (
        <LoadingWrapper>
          <Loading>Results are loading</Loading>
          <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </LoadingWrapper>
      );
    } if (isLoading === false) {
      return (
        <>
          <Audio controls name="media" alt="hello sound">
            <source src="http://localhost:8080/voiced.mp3" type="audio/mpeg" />
          </Audio>
          <ResultWrapper>
            <SubHeading>Summary</SubHeading>
            <TextBlock>{summary}</TextBlock>
            {/* </ResultWrapper>
          <ResultWrapper> */}
            <SubHeading> Your Text </SubHeading>
            <TextBlock>{fetchText}</TextBlock>
          </ResultWrapper>

        </>
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

      {renderResults()}

    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 1rem;
display: inherit; 
font-size: 1rem;
align-items: center;
flex-direction: inherit;
gap: 1.5rem; 
text-align: center;
width: 100%;
`;

const Audio = styled.audio`
filter: drop-shadow( 2px 3px 5px rgba(50, 50, 93, 0.25));
/* , rgba(0, 0, 0, 0.3) 0px 8px 16px -8px); */
background: transparent;
&:hover {
  transform: scale(1.02);
  filter: drop-shadow(2px 3px 5px #333);
}
`;
const ResultWrapper = styled.section`
padding: 1rem;
display: inherit; 
font-size: 1rem;
align-items: center;
flex-direction: inherit;
/* gap: 1rem;  */
text-align: center;
width: 90%;
border-radius: 1rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const SubHeading = styled.h3`
color: #E36414;
`;

const TextBlock = styled.p`
/* margin-bottom:1rem; */
margin-top:0.5rem;
margin-bottom: 1rem;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #5F0F40;
`;

const Loading = styled.h3`
color: #5F0F40;
`;

const BounceAnimation = keyframes`
  0% {  margin-bottom: 0; }
  50% {  margin-bottom: 1rem;}
  100% {  margin-bottom: 0; }
`;

const Dot = styled.div`
  background-color: #5F0F40;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.8s linear infinite;
  animation-delay: ${props => props.delay};
`;

export default Converter;
