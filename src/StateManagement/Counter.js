import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    const changeNumValue = (direction) => {
        direction ? setNum(num+1) : setNum(num-1);
    };

    return(
        <div className="container">
            <h1 className="display-4">2. Counter</h1>
            <h6 className="lead">
            Increment and decrement counter using buttons
            </h6><br></br>
            <h3 className="display-6">Counter Value: <strong>{num}</strong></h3>
            <div className="row">
                <div className="col-sm-6">
                    <button onClick={() => changeNumValue(true)}>Click me to increase counter</button>
                </div>
                <div className="col-sm-6">
                    <button onClick={() => changeNumValue(false)}>Click me to decease counter</button>
                </div>
            </div>
            
        </div>
    );
};

export default Counter;