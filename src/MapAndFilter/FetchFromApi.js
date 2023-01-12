export const getDataFromApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    return response.data; 
};