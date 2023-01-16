import React from "react";
import HOC from "./HOC";

const UserDisplay = ({data}) => {
    return(
        <div className="row">
            {
                data.splice(0,8).map(entry => {
                    return(
                        <div className="col-sm-3 card">
                            <div className="card-body">
                                <p className="card-text"><strong>Name:</strong> {entry.name}</p>
                                <p className="card-text"><strong>Username:</strong> {entry.username}</p>
                                <p className="card-text"><strong>EMail:</strong> {entry.email}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

const UserComponent = HOC("Users", UserDisplay, "users");

export default UserComponent;