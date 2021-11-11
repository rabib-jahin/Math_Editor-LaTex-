// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Latex from "react-latex";

import "./App.css";

function App() {
  const [expression, setExpression] = useState(" ");
 
  return (
    <div className="App">
      <h1>Math Editor and Viewer Example</h1>
      <MathInput onChange={ev => setExpression(ev.target.latex())} />
      <div style={{ margin: 20 }} />
      <Latex>{`View: $${expression}$`}</Latex>
   
    </div>
  );
}

const MathInput = ({ onChange, ...rest }) => {
  const ref = useRef();
  useEffect(() => {
    window.Guppy.use_osk(new window.GuppyOSK({ goto_tab: "arithmetic", attach: "focus" }));
    const guppy = new window.Guppy(ref.current);
    guppy.event("change", onChange);
  }, []);

  return <div ref={ref} {...rest} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
