import axios from "axios";

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAPI = () =>{
    return API.get("/posts");
}

export const postAPI = (post) =>{
    return API.post("posts",post);
}

export const deleteAPI = (id) =>{
    return API.delete(`/posts/${id}`);
}

export const putAPI = (id,post) =>{
    return API.put(`/posts/${id}`,post);
}
