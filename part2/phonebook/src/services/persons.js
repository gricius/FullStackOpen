import axios from "axios";
const baseUrl = "/api/persons";

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

const update = (id, updatedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
    return request.then(response => {
        const updatedPerson = response.data;
        return updatedPerson;
    });
};


export default {getAll, create, deletePerson, update};