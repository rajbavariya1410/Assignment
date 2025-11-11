import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function JSXExample() {
  const topic = "JSX";
  const description = "JSX makes writing React components easier by allowing us to write HTML-like code in JavaScript.";
 

  return (
    <>
    <div>
      <h1>Welcome to {topic}</h1>
      <p>{description}</p>
    </div>
    </>
  );
}

export default JSXExample;
       
  
