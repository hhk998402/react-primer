import React, { useEffect, useState } from "react";
import axios from 'axios';

const LoremIpsum = () => {
    const [text, setText] = useState("");
    
    const getData = () => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then(response => setText(response.data))
        .catch(err => console.error(err));
    };

    useEffect(() => {
        getData();
    }, [])
    
    return(
        <div className="row">
            <p>{text}</p>
        </div>
    );
};

export default LoremIpsum;