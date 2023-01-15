import React, { useEffect, useState } from "react";

const CircleCanvas = () => {
    const [points, setPoints] = useState([]);
    const [pointsUndone, setPointsUndone] = useState([]);

    const highlightCircle = (e) => {
        e.preventDefault();
        let highlightCirclePoint = points.filter((point) => {
            return point.x + 30 > e.clientX && point.x - 30 < e.clientX && point.y + 30 > e.clientY && point.y - 30 < e.clientY;
        });
        if(highlightCirclePoint && highlightCirclePoint.length > 0){
            highlightCirclePoint[0].highlight = !highlightCirclePoint[0].highlight;
            setPoints((prevState) => {
                let oldState = [...prevState];
                let newState = [];
                let data = oldState.forEach(entry => {
                    if(entry.x == highlightCirclePoint[0].x && entry.y == highlightCirclePoint[0].y){
                        newState.push(highlightCirclePoint[0]);
                    }
                    else{
                        newState.push(entry);
                    }
                });
                return newState;
            });
        }
    };

    const addCircle = (e) => {
        setPoints([
            ...points,
            {
                x: e.clientX,
                y: e.clientY,
                highlight: false
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
        setPoints(oldPoints);
        setPointsUndone([...pointsUndone, undoPoint]);
    };

    const handleReset = () => {
        setPoints([]);
        setPointsUndone([]);
    };

    return(
        <div className="container">
            <h1 className="display-4">4. Draw Circles on a Canvas</h1>
            <h6 className="lead">
                <ol>
                    <li>When user clicks on a part of the screen, a circle should appear there</li>
                    <li>Undo/redo functionality</li>
                    <li>Reset (remove all circles)</li>
                    <li>Highlight circle that is selected by right mouse-click. Selection of circle should be toggle-able</li>
                </ol>
            </h6>
            <div className="row">
                <div className="col-md-4 center-block text-center">
                    <button onClick={handleUndo} style={{minHeight:'20px', minWidth: '20%'}}>Undo</button>
                </div>
                <div className="col-md-4 center-block text-center">
                    <button onClick={handleRedo} style={{minHeight:'20px', minWidth: '20%'}}>Redo</button>
                </div>
                <div className="col-md-4 center-block text-center">
                    <button onClick={handleReset} style={{minHeight:'20px', minWidth: '20%'}}>Reset</button>
                </div>
            </div>
            <div className="canvas" id="circleCanvas" style={{height:"80vh", width:"100%", border: '1px solid black'}} onClick={addCircle} onContextMenu={highlightCircle}>
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
                                    top: point.y + 'px',
                                    backgroundColor: point.highlight == true ? "salmon" : "transparent"
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