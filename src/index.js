import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';
import { BrowserRouter } from "react-router-dom";


const el = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    el
);