import React from "react";
import ApiShowData from "./StateManagement/MapAndFilter/ApiShowData";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar";
import Counter from "./StateManagement/Counter";
import AddTwoNums from "./StateManagement/AddTwoNums";
import CircleCanvas from "./StateManagement/CircleCanvas";
import SimpleFormSingleState from "./Forms/SimpleForm1/SimpleFormSingleState";
import SimpleFormDynamicInputs from "./Forms/SimpleForm2_DynamicInputs/SimpleFormDynamicInputs";
import ConnectToApiForm from "./Forms/ConnectToApiForm/ConnectToApiForm";
import ZipCodeSearch from "./Forms/Debouncing/ZipCodeSearch";
import ParentForm from "./Forms/ContextApiForm/ParentForm";
import DisplayUserPosts from "./ReactCore/DisplayUserPosts";
import LazyLoadingDemo from "./ReactCore/LazyLoading/LazyLoadingDemo";
import RecursiveComponentCall from "./ReactCore/RecursiveComponentCall/RecursiveComponentCall";
import UserPostDisplayCustomHook from "./ReactCore/CustomHook/UserPostDisplayCustomHook";

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
                <Route
                    exact
                    path="moderateForm2"
                    element={<ZipCodeSearch />}
                />
                <Route
                    exact
                    path="moderateForm3"
                    element={<ParentForm />}
                />
                <Route
                    exact
                    path="higherOrderComponent"
                    element={<DisplayUserPosts />}
                />
                <Route
                    exact
                    path="lazyLoading"
                    element={<LazyLoadingDemo />}
                />
                <Route
                    exact
                    path="recursiveComponent"
                    element={<RecursiveComponentCall />}
                />
                <Route
                    exact
                    path="reactCustomHook"
                    element={<UserPostDisplayCustomHook />}
                />
            </Routes>
        </>  
        
    );
};

export default App;