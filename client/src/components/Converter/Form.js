/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ setFetchText, setIsLoading, setSummary }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = event => {
    setInputText(event.target.value);
  };

  // const requestOptions = ;

  const submitHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    setFetchText(inputText);

    await fetch('http://localhost:8080/summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText }),
    })
      .then(data => data.json())
      .then(result => {
        setSummary(result);
        console.log('summary fetch completed', result);
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
      <textarea
        rows="10"
        cols="70"
        type="text"
        placeholder="Write or paste your article here"
        name="inputTextField"
        value={inputText}
        onChange={handleChange}
        required />
      <button type="submit">Convert!</button>
    </TextForm>
  );
};

const TextForm = styled.form`
color: green; 
display: flex;
gap: 1rem;
flex-direction: column;
`;

export default Form;
