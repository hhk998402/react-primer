import React, { useEffect, useState } from "react";

const HOC = (title, Component, resource) => {
    return () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err));
        }, []);
        return(
            <div className="row">
                <h2 class="display-5">{title}</h2>
                <Component data={data}/>
            </div>
        );
    }
}

export default HOC;