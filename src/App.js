import React from "react";
import ApiShowData from "./MapAndFilter/ApiShowData";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar";
import Counter from "./StateManagement/Counter";
import AddTwoNums from "./StateManagement/AddTwoNums";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route 
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    exact
                    path="fetchDataFromApi"
                    element={<ApiShowData />}
                />
                <Route
                    exact
                    path="counter"
                    element={<Counter />}
                />
                <Route
                    exact
                    path="addTwoNums"
                    element={<AddTwoNums />}
                />
            </Routes>
        </>  
        
    );
};

export default App;