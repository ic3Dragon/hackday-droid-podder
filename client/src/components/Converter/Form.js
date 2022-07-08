/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ setFetchText, setIsLoading, setSummary }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const submitHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    setFetchText(inputText);
    setSummary('');

    await fetch('http://localhost:8080/summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText }),
    })
      .then(data => data.json())
      .then(result => {
        setSummary(result);
        console.log('summary fetch completed');
      })
      .catch(error => console.log('error', error.message));

    await fetch('http://localhost:8080/soundbox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText }),
    })
      .then(result => {
        setIsLoading(false);
        console.log('soundBox fetch completed', result.status);
      })
      .catch(error => console.log('error', error.message));
    setInputText('');
  };

  return (
    <TextForm onSubmit={submitHandler}>
      <TextArea
        rows="10"
        cols="70"
        type="text"
        placeholder="Write or paste your article here."
        name="inputTextField"
        value={inputText}
        onChange={handleChange}
        required />
      <Button type="submit">Convert!</Button>
    </TextForm>
  );
};

const TextForm = styled.form`
color: green; 
display: flex;
gap: 1rem;
flex-direction: column;
width: 70%;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
`;

const TextArea = styled.textarea`
  font-size:1rem;
  font-family: 'Roboto Flex', sans-serif;
  border-radius: 1rem;
  padding:0.5rem;
  width: 100%;
  border: 1px solid slategrey;
  outline:none;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #E36414;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
`;

const Button = styled.button`
align-self:center;
  align-items: center;
  background-clip: padding-box;
  background-color: #FB8B24;
  border: 0px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 3px 5px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: max-content;

&:hover {
  background-color: #E36414;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 6px;
  transform: translateY(-2px);
}

&:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 6px;
  transform: translateY(0);
}
`;

export default Form;
