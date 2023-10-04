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
**`useAutoReadOtp`**
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

**`useDetectIncognito`**
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

**`useDebounce`**
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

**`useMediaSession`**
>Seamlessly integrate the Media Session API into your React app. Control playback, skip tracks, and handle media interactions effortlessly

```bash
import React from "react";
import { useMediaSession } from 'react-usehooks-ts';

const  PlaybackState="playing"

const MyAudioPlayer = () => {
  // Define your media information
  const mediaInfo = {
    title: "My Song",
    artist: "My Artist",
    artwork: [
      {
        src: "image.jpg",
        sizes: "96x96",
        type: "image/jpeg",
      },
    ],
  };

  // Callbacks for media control actions
  const handlePlay = () => {
    // Implement play functionality
  };

  const handlePause = () => {
    // Implement pause functionality
  };

  const handleNextTrack = () => {
    // Implement next track functionality
  };

  const handlePreviousTrack = () => {
    // Implement previous track functionality
  };

  const handleSeekForward = () => {
    // Implement seek forward functionality
  };

  const handleSeekBackward = () => {
    // Implement seek backward functionality
  };

  const handleSeekTo = () => {
    // Implement seek to functionality
  };

  const handleSkipAd = () => {
    // Implement skip ad functionality
  };

  const handleStop = () => {
    // Implement stop functionality
  };

  // Use the custom hook to set up media session
  useMediaSession({
    playbackState: PlaybackState
    mediaInfo,
    onPlay: handlePlay,
    onPause: handlePause,
    onNextTrack: handleNextTrack,
    onPreviousTrack: handlePreviousTrack,
    onSeekForward: handleSeekForward,
    onSeekBackward: handleSeekBackward,
    onSeekTo: handleSeekTo,
    onSkipAd: handleSkipAd,
    onStop: handleStop,
  });

  return (
    // Your audio player JSX here
    <div>
      <h1>{mediaInfo.title}</h1>
      <p>{mediaInfo.artist}</p>
      {/* Your media player controls here */}
    </div>
  );
};

export default MyAudioPlayer;


```


**`useSwipe`**
>The useSwipe custom hook is a utility for React applications that simplifies the detection of swipe gestures on a specified element. Swipe gestures are common in mobile and touch-enabled interfaces, and this hook facilitates their recognition and handling.

```bash
import { useSwipe } from 'react-usehooks-ts';

function MyComponent() {
  const [swipeDirection, swipeRef] = useSwipe();

  const handleSwipe = () => {
    if (swipeDirection === 'left') {
      // Handle left swipe
    } else if (swipeDirection === 'right') {
      // Handle right swipe
    }
  };

  return (
    <div ref={swipeRef}>
      {/* Your content goes here */}
      <button onClick={handleSwipe}>Handle Swipe</button>
    </div>
  );
}


```

**`useInnerHeight`**
>A React custom hook that provides real-time access to the browser window's inner height, allowing you to create responsive UI components that adapt to changes in vertical space.

```bash
import { useInnerHeight } from 'react-usehooks-ts';


function MyComponent() {
  const innerHeight = useInnerHeight();

  const contentStyle = {
    minHeight: innerHeight ? `${innerHeight}px` : '100vh',
  };

  return (
    <div style={contentStyle}>
      <p>Responsive Content</p>
      {/* Your content goes here */}
    </div>
  );
}

```

**`useKeyPress`**
>A React custom hook that simplifies tracking whether a specific key is currently pressed. It provides a boolean value indicating the key's state (pressed or not) and handles event listeners for keyboard input.

```bash
import React from 'react';
import { useKeyPress } from 'react-usehooks-ts';

function MyComponent() {
  const isSpaceKeyPressed = useKeyPress('Space');

  const handleSpacePress = () => {
    if (isSpaceKeyPressed) {
      // Handle spacebar press
      console.log('Space bar is pressed!');
    }
  };

  return (
    <div>
      <p>Press the Space bar to see the result:</p>
      <button onClick={handleSpacePress}>
        Check Space bar
      </button>
    </div>
  );
}

export default MyComponent;

```


**`useListenPaste`**
>The useListenPaste custom hook for React simplifies the process of listening for and extracting clipboard content when a paste event occurs. It specifically tracks pasted text with a specified length, providing a way to respond to clipboard actions within your application.

```bash
import React, { useEffect } from 'react';
import { useListenPaste } from 'react-usehooks-ts';


function MyComponent() {
  const textLength = 5; // Define the expected length of the pasted text
  const clipboardText = useListenPaste(textLength);

  // Define a callback function to handle the clipboard text
  useEffect(() => {
    if (clipboardText) {
      // Do something with the clipboardText
      console.log('Pasted text:', clipboardText);
    }
  }, [clipboardText]);

  return (
    <div>
      <p>Paste text of length {textLength} here:</p>
      <textarea placeholder="Paste here" />
    </div>
  );
}

export default MyComponent;

```


**`useMediaQuery`**
>The useMediaQuery custom hook for React provides a straightforward way to determine whether a specified media query condition, such as screen width, is met. It allows you to react to changes in media query status, making it useful for building responsive user interfaces.

```bash
import React from 'react';
import { useMediaQuery} from 'react-usehooks-ts';

function MyComponent() {
  const maxWidth = 768; // Define the maximum width for your media query
  const isMobile = useMediaQuery(maxWidth);

  return (
    <div>
      <p>
        {isMobile
          ? 'This content is displayed on a mobile device.'
          : 'This content is displayed on a larger screen.'}
      </p>
      {/* Your content goes here */}
    </div>
  );
}

export default MyComponent;


```


**`useOutsideClickHook`**
>The useOutsideClickHook custom hook for React simplifies the implementation of functionality that detects clicks outside a specified element. It is useful for scenarios like closing a dropdown or modal when a user clicks outside of it.

```bash
import React, { useRef } from 'react';
import { useOutsideClickHook } from 'react-usehooks-ts';


function MyComponent() {
  const dropdownRef = useRef(null);
  const isDropdownOpen = useOutsideClickHook(() => {
    // This callback function will be executed when a click occurs outside the dropdown.
    // You can use it to close the dropdown or perform any desired action.
    console.log('Clicked outside the dropdown!');
  }, dropdownRef);

  return (
    <div>
      <button onClick={() => isDropdownOpen()}>Toggle Dropdown</button>
      {isDropdownOpen() && (
        <div ref={dropdownRef} className="dropdown">
          {/* Dropdown content */}
          <p>Dropdown content here</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

```