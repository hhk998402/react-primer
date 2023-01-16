import React from "react";
import ApiShowData from "./MapAndFilter/ApiShowData";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar";
import Counter from "./StateManagement/Counter";
import AddTwoNums from "./StateManagement/AddTwoNums";
import CircleCanvas from "./StateManagement/CircleCanvas";
import SimpleFormSingleState from "./Forms/SimpleForm1/SimpleFormSingleState";
import SimpleFormDynamicInputs from "./Forms/SimpleForm2_DynamicInputs/SimpleFormDynamicInputs";
import ConnectToApiForm from "./Forms/ConnectToApiForm/ConnectToApiForm";

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
                <Route
                    exact
                    path="circleCanvas"
                    element={<CircleCanvas />}
                />
                <Route
                    exact
                    path="simpleForm1"
                    element={<SimpleFormSingleState />}
                />
                <Route
                    exact
                    path="simpleForm2"
                    element={<SimpleFormDynamicInputs />}
                />
                <Route
                    exact
                    path="moderateForm1"
                    element={<ConnectToApiForm />}
                />
            </Routes>
        </>  
        
    );
};

export default App;