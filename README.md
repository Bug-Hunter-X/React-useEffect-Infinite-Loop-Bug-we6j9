# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug is caused by an infinite loop triggered by an incorrectly defined dependency array.

## Bug Description
The `MyComponent` component uses `useState` to manage a count value. The `useEffect` hook attempts to increment this value, but the `count` variable is included in the dependency array which leads to an infinite render cycle. 

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the error in your browser's console and the rapidly updating count.

## Solution
The solution removes the `count` from the dependency array.  The useEffect will only run once after the component mounts.