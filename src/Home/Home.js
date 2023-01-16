import React, { useState } from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to Hemant's React Interview Prep Primer</h1>
                <p className="lead">Below are some of the main concepts that are generally asked in React Interviews, and some context on the same</p>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                    <AccordionHeader targetId="1">Fetch Data from an API, show data in UI</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <strong>This is a pretty basic interview question</strong><br></br>
                        You are given an API which returns a JSON. You have to show the data in the UI however you like. Then
                        you will be asked to implement a rudimentary search functionality. To achieve this use a combination
                        of the map and filter methods in JS.<br></br>
                        <Link to="/fetchDataFromApi">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="2">Implement a Counter</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>Implement a Counter Page</strong><br></br>
                        Fairly straightforward, create a counter page that increments an integer<br></br>
                        <Link to="/counter">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="3">Add Two Nums</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>Add Two Numbers</strong><br></br>
                        <Link to="/addTwoNums">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="4">Draw Circles on Canvas</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <strong>Draw circles on canvas, undo/redo functionality, reset functionality</strong><br></br>
                        <Link to="/circleCanvas">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="5">Form Handling - Simple, Single State</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <strong>Use a single state variable to handle multiple form entries data</strong><br></br>
                        <Link to="/simpleForm1">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="6">Form Handling - Dynamic Form Inputs</AccordionHeader>
                    <AccordionBody accordionId="6">
                        <strong>Use a single state variable to handle multiple form entries data, supporting dynamic addition of form inputs</strong><br></br>
                        Using reducer-dispatch pattern, implement a form where an input group can be duplicated on the fly.<br></br>
                        <Link to="/simpleForm2">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="7">Form Handling - Connect to API</AccordionHeader>
                    <AccordionBody accordionId="7">
                        <strong>Connect a form to an API</strong><br></br>
                        Form should connect to API, post data to it, and display data from API<br></br>
                        <Link to="/moderateForm1">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionHeader targetId="8">Form Handling - API Debouncing</AccordionHeader>
                    <AccordionBody accordionId="8">
                        <strong>Use API debouncing to reduce the number of requests fired to an API</strong><br></br>
                        <Link to="/moderateForm2">Demo Link</Link>
                    </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;