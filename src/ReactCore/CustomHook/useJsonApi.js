import { useCallback, useEffect, useState } from "react";

const useJsonApi = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const getJsonData = useCallback(async (resource, setData) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
        const json = await data.json();
        setData(json);
    });

    useEffect(() => {
        getJsonData("users", setUsers)
        .catch(err => console.error(err));

        getJsonData("posts", setPosts)
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
    }, [users])

    return { users, posts };
};

export default useJsonApi;