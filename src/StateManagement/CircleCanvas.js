import React, { useState } from "react";

const CircleCanvas = () => {
    const [points, setPoints] = useState([]);
    const [pointsUndone, setPointsUndone] = useState([]);

    const addCircle = (e) => {
        setPoints([
            ...points,
            {
                x: e.clientX,
                y: e.clientY
            }
        ]);
        setPointsUndone([]);
    };

    const handleRedo = () => {
        let oldPointsUndone = [...pointsUndone];
        let redoPoint = oldPointsUndone.pop();
        if(redoPoint){
            setPoints([...points, redoPoint]);
            setPointsUndone(oldPointsUndone);
        }       
    };

    const handleUndo = () => {
        let oldPoints = [...points];
        let undoPoint = oldPoints.pop();
        console.log("Undo Point", undoPoint);
        setPoints(oldPoints);
        setPointsUndone([...pointsUndone, undoPoint]);
        console.log(pointsUndone);
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
            <div className="row">
                <div className="col-md-6 center-block text-center">
                    <button onClick={handleUndo} style={{minHeight:'20px', minWidth: '20%'}}>Undo</button>
                </div>
                <div className="col-md-6 center-block text-center">
                    <button onClick={handleRedo} style={{minHeight:'20px', minWidth: '20%'}}>Redo</button>
                </div>
            </div>
            <div className="canvas" style={{height:"80vh", width:"100%", border: '1px solid black'}} onClick={addCircle}>
                {
                    points.map((point, idx) => {
                        return (
                            <div className="circle text-center" 
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
                            > {idx}
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
};

export default CircleCanvas;