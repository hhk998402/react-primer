import React, { useEffect, useState } from "react";
import axios from "axios";

const ZipCodeSearch = () => {
    const [pinCode, setPinCode] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = (e) => setPinCode(e.target.value);

    useEffect(() => {
        const debouncing = setTimeout(() => {
            axios.get(`https://api.postalpincode.in/pincode/${pinCode}`)
            .then(response => {
                setResults(response.data);
            })
        }, 2000);

        return () => {
            clearTimeout(debouncing);
        };
    }, [pinCode])

    return(
        <div className="container">
            <h1 className="display-4">8. Moderate Form - API request debouncing</h1>
            <h6 className="lead">
                <ol>
                    <li>Create a page that allows you to search for a location using zipcode</li>
                    <li>Only fire request to the API when user is done entering the zipcode, and not when each character is typed in</li>
                    <li>Use debouncing to achieve the same</li>
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
                    !results || results.length == 0 || !results[0].PostOffice || results[0].PostOffice.length == 0
                    ? <div className="col-sm-2 card" style={{ width: '18rem'}}>
                        <div className="card-body">
                            <p className="card-text">No Results Found</p>
                        </div>
                    </div>
                    : results[0].PostOffice.map(entry => {
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

export default ZipCodeSearch;