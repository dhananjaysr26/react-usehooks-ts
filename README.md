# react-usehooks-ts

A collections of typescript supported React Custom Hooks

[![NPM](https://img.shields.io/npm/v/react-usehooks-ts.svg)](https://www.npmjs.com/package/react-usehooks-ts)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Getting started with **React useHooks ts** is as easy as 1-2-3! Simply run the following command:

```bash
npm install react-usehooks-ts
```

And just like that, you're ready to harness the power of **React useHooks ts** in your applications! 🚀

## Usage
## `useAutoReadOtp`
>Automatically detect and read OTPs in your React components.

```bash
import { useAutoReadOtp } from 'react-usehooks-ts';

const ExampleComponent: React.FC = () => {
  const [detectedOTP, isOtpDetecting, otpDetectError] = useAutoReadOtp({
    startOtpDetection: true,
    timeoutInMin: 5,
  });

  // Your component code here

  return (
    <div>
      {isOtpDetecting ? (
        <p>Detecting OTP...</p>
      ) : (
        <p>Detected OTP: {detectedOTP}</p>
      )}
      {otpDetectError && <p>Error: {otpDetectError}</p>}
    </div>
  );
};

```

## `useDetectIncognito`
>Detect whether the user's browser is in incognito mode.

```bash
import React from 'react';
import { useDetectIncognito } from 'react-usehooks-ts';

const App = () => {
  const [isIncognito, isDetectingIncognito] = useDetectIncognito();

  return (
    <div>
      <h1>Incognito Mode Detection</h1>
      {isDetectingIncognito ? (
        <p>Detecting incognito mode...</p>
      ) : (
        <>
          <p>Is user in incognito mode: {isIncognito ? 'Yes' : 'No'}</p>
          <p>Incognito detection complete!</p>
        </>
      )}
    </div>
  );
};

export default App;

```
## `useDebounce`
>Debounce user input to enhance search functionality.

```bash
import React, { useState } from 'react';
import { useDebounce } from 'react-usehooks-ts';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {debouncedValue && <p>Debounced Value: {debouncedValue}</p>}
    </div>
  );
};

export default App;

```
