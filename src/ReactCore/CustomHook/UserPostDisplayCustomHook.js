import React from "react";
import useJsonApi from "./useJsonApi";


const UserPostDisplayCustomHook = () => {
    const {users, posts} = useJsonApi();

    return(
        <div className="container">
            <h1 className="display-4">13. React Custom Hook Demo</h1>
            <h6 className="lead">
                <ol>
                    <li>Hit the https://jsonplaceholder.typicode.com/users API, get list of users, filter out first 8 entries only</li>
                    <li>Hit the https://jsonplaceholder.typicode.com/posts API, get list of posts, filter out first 8 entries only</li>
                    <li>Use a custom hook to get the list of users and the list of posts</li>
                </ol>
            </h6>
            <div className="row">
                <h2 className="display-6">Users</h2>
                {
                    users.slice(0,8).map(entry => {
                        console.log(entry);
                        return(
                            <div className="col-sm-6 card">
                                <div className="card-body">
                                    <p className="card-text"><strong>Name:</strong> {entry.name}</p>
                                    <p className="card-text"><strong>Email:</strong> {entry.email}</p>
                                    <p className="card-text"><strong>Username:</strong> {entry.username}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <h2 className="display-6">Posts</h2>
                {
                    posts.slice(0,8).map(entry => {
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
        </div>
    )
};

export default UserPostDisplayCustomHook;