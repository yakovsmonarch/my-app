import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Yakov";
const foo = (num1, num2) => num1 + num2;
const App = () => {
  return(
    <div>
      <h1>Имя - {name}, функция сложения (10 и 20): {foo(10, 20)}</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
