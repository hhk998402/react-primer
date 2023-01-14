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
                </Accordion>
            </div>
        </div>
    );
};

export default Home;