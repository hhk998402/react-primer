import React, { useEffect, useState } from "react";

const ApiShowData = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    const getDataFromApi = () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url,{method:'GET'})
            .then((response) => response.json())
            .then((json) => {
                setUsers(json);
            });
    };

    useEffect(() => {
        getDataFromApi();
    }, []);

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="container">
            <div className="input-group" style={{ margin: '0 0 20px 0', border: '1px solid black'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text">Search for user by name</span>
                </div>
                <input type="text" className="form-control" id="searchText" name="searchText" value={searchText} onChange={handleChange} />
            </div>
        {users
        .filter((user) => {
            return user.name.includes(searchText);
        })
        .map((filteredUser) => {
            return (<div className="card container" style={{width : '16em'}}>
                <div className="row">
                    <div className="col-sm-4">
                        <p style={{font: 'bold 18px Arial, sans-serif'}}>ID:</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{font: '18px Arial, sans-serif'}}>{filteredUser.id}</p>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm-4">
                        <p style={{font: 'bold 18px Arial, sans-serif'}}>Name:</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{font: '18px Arial, sans-serif'}}>{filteredUser.name}</p>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm-4">
                        <p style={{font: 'bold 18px Arial, sans-serif'}}>EMail:</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{font: '18px Arial, sans-serif'}}>{filteredUser.email}</p>
                    </div>
                </div>   
                    
            </div>)
            ;
        })}
        </div>
       
        
    )
};

export default ApiShowData;