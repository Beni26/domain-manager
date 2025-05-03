import axios from "axios";



export const BASE_URL = "https://6797aa2bc2c861de0c6d964c.mockapi.io/domain";
const app = axios.create({
    baseURL:BASE_URL,
})

const http = {
    get:app.get,
    post:app.post,
    delete:app.delete,
    put:app.put,
    patch:app.patch,
}



export default http;
