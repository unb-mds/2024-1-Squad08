import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//react rendering step

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//uping api step -> update: trying to up the api and react in the same process causes major malfunctions :)
reportWebVitals();
