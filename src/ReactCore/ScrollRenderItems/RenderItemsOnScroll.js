import React, { useEffect, useState } from "react";

const RenderItemsOnScroll = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        let data = [];
        for(var i=0;i<1000;i++){
            data.push({
                name: "User" + i
            });
        }
        setData(data);
    }, []);

    const handleScroll = (e) => {
        let elem = e.target;
        let reachedBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight <= 0;
        if(reachedBottom){
            setLimit(limit + 20);
        }
    };

    return(
        <div className="container" onScroll={handleScroll} style={{maxHeight: "50vh", overflow: "scroll"}}>
            <h1 className="display-4">15. Render Components on Scroll</h1>
            <h6 className="lead">
                <ol>
                    <li>Imagine that you have a large array of data that needs to be rendered</li>
                    <li>We don't want to render everything all at once, we want to render them only when user has scrolled to the bottom</li>
                </ol>
            </h6>
            {
                data?.slice(0,limit || 20).map(entry => {
                    return(
                        <p>{entry.name}</p>
                    );
                })
            }
    </div>
    )
};

export default RenderItemsOnScroll;