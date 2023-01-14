import React, { useState } from "react";

const CircleCanvas = () => {
    const [points, setPoints] = useState([]);

    const addCircle = (e) => {
        setPoints([
            ...points,
            {
                x: e.clientX,
                y: e.clientY
            }
        ]);
        console.log(points);
    };

    return(
        <div className="container">
            <h1 className="display-4">4. Draw Circles on a Canvas</h1>
            <h6 className="lead">
                <ol>
                    <li>When user clicks on a part of the screen, a circle should appear there</li>
                    <li>Undo/redo functionality</li>
                    <li>Reset (remove all circles)</li>
                </ol>
            </h6>
            <div className="canvas" style={{height:"80vh", width:"100%", border: '1px solid black'}} onClick={addCircle}>
                {
                    points.map((point, idx) => {
                        return (
                            <div className="circle" 
                                style={{
                                    height: '30px', 
                                    width: '30px', 
                                    borderRadius: '100%', 
                                    border: '1px solid black', 
                                    display: 'inline-block',
                                    position: 'absolute',
                                    left: point.x + 'px',
                                    top: point.y + 'px'
                                }}
                            />
                        )
                    })
                }
                
            </div>
        </div>
    )
};

export default CircleCanvas;