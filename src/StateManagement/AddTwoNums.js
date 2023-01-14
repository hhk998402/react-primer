import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const AddTwoNums = () => {
    const [nums, setNums] = useState({});
    const [result, setResult] = useState(0);
    const changeNumValue = (el) => {
        const name = el.target.name;
        const val = el.target.value;
        setNums((prevState) => {
            let nums = {...prevState};
            nums[name] = typeof(val)=="number" ? val : val == "" ? 0 : parseInt(val);
            return nums;
        });
    }
    useEffect(() => {
        let sum = 0;
        for (const [key,value] of Object.entries(nums)){
            if(value == NaN){
                sum = 0;
                break;
            }
            sum += value; 
        }
        setResult(sum);
    }, [nums]);

    return(
        <div className="container">
            <h1 className="display-4">3. Add Two Nums</h1>
            <h6 className="lead">
            Add two numbers and display result
            </h6><br></br>
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                                <Label for="num1">
                                Num 1
                                </Label>
                                <Input
                                id="num1"
                                name="num1"
                                placeholder="Enter value for num1"
                                type="number"
                                value={nums["num1"] || ''}
                                onChange={(e) => changeNumValue(e)}
                                />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                                <Label for="num2">
                                Num 2
                                </Label>
                                <Input
                                id="num2"
                                name="num2"
                                placeholder="Enter value for num2"
                                type="number"
                                value={nums["num2"] || ''}
                                onChange={(e) => changeNumValue(e)}
                                />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <h3 className="display-6">Sum: <strong>{result}</strong></h3>
            
        </div>   
    );
};

export default AddTwoNums;