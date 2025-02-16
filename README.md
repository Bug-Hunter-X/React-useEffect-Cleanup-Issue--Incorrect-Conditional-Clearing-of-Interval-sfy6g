# React useEffect Cleanup Issue
This repository demonstrates a common error in React's `useEffect` hook where the cleanup function is not always executed, potentially leading to memory leaks.

The `bug.js` file contains the erroneous code, showing an interval that's not always cleared. The `bugSolution.js` provides the corrected implementation.

## Problem
The issue lies within the `useEffect` hook's cleanup function. The `clearInterval` is only called if `count < 5`, meaning that if the component unmounts while `count` is 5 or greater, the interval persists, resulting in a memory leak.