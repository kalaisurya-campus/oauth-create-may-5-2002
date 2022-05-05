import axios from "axios";

export function GET_PURUSH_DATA() {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}
