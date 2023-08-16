import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
    const request = axios.get(baseUrl);
    const res = await request;
    return res.data;
};

const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject);
    const res = await request;
    return res.data;
};

const deletePerson = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    const res = await request;
    return res.data;
};


export default {getAll, create, deletePerson};