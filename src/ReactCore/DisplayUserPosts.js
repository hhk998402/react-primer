import React from "react";
import PostComponent from "./HigherOrderComponent/PostDisplay";
import UserComponent from "./HigherOrderComponent/UserDisplay";

const DisplayUserPosts = () => {
    return(
        <div className="container">
            <h1 className="display-4">10. Higher Order Component Demo</h1>
            <h6 className="lead">
                <ol>
                    <li>Hit the https://jsonplaceholder.typicode.com/users API, get list of users, filter out first 8 entries only</li>
                    <li>Hit the https://jsonplaceholder.typicode.com/posts API, get list of posts, filter out first 8 entries only</li>
                    <li>As they are doing a lot of the same functionality, we can abstract out a large portion of the code into HOC</li>
                </ol>
            </h6>
            <UserComponent />
            <PostComponent />
        </div>
        
    );
};

export default DisplayUserPosts;