# react-usehooks-ts
 A collections of typescript supported React Hooks

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