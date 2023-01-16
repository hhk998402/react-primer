import React from "react";
import HOC from "./HOC";

const PostDisplay = ({data}) => {
    return(
        <div className="row">
            {
                data.splice(0,8).map(entry => {
                    return(
                        <div className="col-sm-6 card">
                            <div className="card-body">
                                <p className="card-text"><strong>Title:</strong> {entry.title}</p>
                                <p className="card-text"><strong>Body:</strong> {entry.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

const PostComponent = HOC("Posts", PostDisplay, "posts");

export default PostComponent;