import React, { useState } from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [open, setOpen] = useState([]);
    const toggle = (id) => {
        if (open.includes(id)) {
            setOpen((prevState) => {
                let oldState = [...prevState];
                return oldState.filter(entry => entry != id);
            });
        } else {
            setOpen([
                ...open,
                id
            ])
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
                        <AccordionHeader targetId="2">React State Management</AccordionHeader>
                        <AccordionBody accordionId="2">
                            <AccordionItem>
                                <AccordionHeader targetId="3">Implement a Counter</AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <strong>Implement a Counter Page</strong><br></br>
                                    Fairly straightforward, create a counter page that increments an integer<br></br>
                                    <Link to="/counter">Demo Link</Link>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="4">Add Two Nums</AccordionHeader>
                                <AccordionBody accordionId="4">
                                    <strong>Add Two Numbers</strong><br></br>
                                    <Link to="/addTwoNums">Demo Link</Link>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="5">Draw Circles on Canvas</AccordionHeader>
                                <AccordionBody accordionId="5">
                                    <strong>Draw circles on canvas, undo/redo functionality, reset functionality</strong><br></br>
                                    <Link to="/circleCanvas">Demo Link</Link>
                                </AccordionBody>
                            </AccordionItem>
                        </AccordionBody>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <AccordionHeader targetId="6">Form Handling</AccordionHeader>
                        <AccordionBody accordionId="6">
                            <Accordion open={open} toggle={toggle}>
                                <AccordionItem>
                                    <AccordionHeader targetId="7">Form Handling - Simple, Single State</AccordionHeader>
                                    <AccordionBody accordionId="7">
                                        <strong>Use a single state variable to handle multiple form entries data</strong><br></br>
                                        <Link to="/simpleForm1">Demo Link</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="8">Form Handling - Dynamic Form Inputs</AccordionHeader>
                                    <AccordionBody accordionId="8">
                                        <strong>Use a single state variable to handle multiple form entries data, supporting dynamic addition of form inputs</strong><br></br>
                                        Using reducer-dispatch pattern, implement a form where an input group can be duplicated on the fly.<br></br>
                                        <Link to="/simpleForm2">Demo Link</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="9">Form Handling - Connect to API</AccordionHeader>
                                    <AccordionBody accordionId="9">
                                        <strong>Connect a form to an API</strong><br></br>
                                        Form should connect to API, post data to it, and display data from API<br></br>
                                        <Link to="/moderateForm1">Demo Link</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="10">Form Handling - API Debouncing</AccordionHeader>
                                    <AccordionBody accordionId="10">
                                        <strong>Use API debouncing to reduce the number of requests fired to an API</strong><br></br>
                                        <Link to="/moderateForm2">Demo Link</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="11">Form Handling - Nested Components Single State Form Aggregation</AccordionHeader>
                                    <AccordionBody accordionId="11">
                                        <strong>Use React Context API and Reducers to achieve maintaining state in parent with child's updates</strong><br></br>
                                        <Link to="/moderateForm3">Demo Link</Link>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="12">React Core Concepts</AccordionHeader>
                        <AccordionBody accordionId="12">
                            <AccordionItem>
                                <AccordionHeader targetId="13">Higher Order Components</AccordionHeader>
                                <AccordionBody accordionId="13">
                                    <strong>Illustrate logic of HOC</strong><br></br>
                                    <Link to="/higherOrderComponent">Demo Link</Link>
                                </AccordionBody>
                            </AccordionItem>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;