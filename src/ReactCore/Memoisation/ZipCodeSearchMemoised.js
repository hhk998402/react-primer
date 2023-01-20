import React, { useEffect, useReducer, useState } from "react";
import cacheFormReducer from "./cacheFormReducer";

const ZipCodeSearchMemoised = () => {
    const [pinCode, setPinCode] = useState("");
    const [cache, dispatch] = useReducer(cacheFormReducer, {});

    const handleChange = (e) => setPinCode(e.target.value);
    
    useEffect(() => {
        console.log(cache);
        const debouncing = setTimeout(() => {
            if(!cache[pinCode]){
                console.log("Using API", cache);
                fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: "ADD_TO_CACHE",
                        key: pinCode,
                        payload: data
                    });
                });
            } else{
                console.log("Using cache", cache);
            }
            
        }, 2000);

        return () => {
            clearTimeout(debouncing);
        };
    }, [pinCode]);

    return(
        <div className="container">
            <h1 className="display-4">14. Memoisation - Caching API Response</h1>
            <h6 className="lead">
                <ol>
                    <li>Create a page that allows you to search for a location using zipcode</li>
                    <li>Once we fetch the data for a given zipcode, catch the response so that we do not have to hit the API again</li>
                    <li>Use memoisation to achieve the same</li>
                    <li>Also have debouncing to make sure that only after user input is completed is the API request fired</li>
                </ol>
            </h6>
            <div className="row">
                <div className="input-group" style={{ margin: '0 0 20px 0', border: '1px solid black'}}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Search for location by pincode</span>
                    </div>
                    <input type="text" className="form-control" id="searchText" name="searchText" value={pinCode} onChange={handleChange} />
                </div>
            </div>
            <div className="row">
                {
                    !cache[pinCode] || cache[pinCode].length == 0 || !cache[pinCode][0]["PostOffice"] || cache[pinCode][0].PostOffice.length == 0
                    ? <div className="col-sm-2 card" style={{ width: '18rem'}}>
                        <div className="card-body">
                            <p className="card-text">No Results Found</p>
                        </div>
                    </div>
                    : cache[pinCode][0].PostOffice.map(entry => {
                        return(
                            <div className="col-sm-2 card" style={{ width: '18rem'}}>
                                <div className="card-body">
                                    <p className="card-text">Location: {entry.Name}</p>
                                    <p className="card-text">Pincode: {entry.Pincode}</p>
                                    <p className="card-text">State: {entry.State}</p>
                                    <p className="card-text">Country: {entry.Country}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ZipCodeSearchMemoised;