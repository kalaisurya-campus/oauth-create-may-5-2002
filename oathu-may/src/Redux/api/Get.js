import axios from "axios";

export function GET_DATA_USER_NEWS() {
    axios.get(`https://jsonplaceholder.typicode.com/users`);
}
