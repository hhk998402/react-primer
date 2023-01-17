import React from "react";
import FileDirectoryTree from "./FileDirectoryTree";
import { fileDirectory } from "./fileDirectory";

const RecursiveComponentCall = () => {
    return(
        <div className="container">
            <h1 className="display-4">12. Recursive Component Call</h1>
            <h6 className="lead">
                <ol>
                    <li>Visually depict a file structure tree, with accordion style expansion for files</li>
                </ol>
            </h6>
            <FileDirectoryTree data={fileDirectory}/>
        </div>
    );
};

export default RecursiveComponentCall;