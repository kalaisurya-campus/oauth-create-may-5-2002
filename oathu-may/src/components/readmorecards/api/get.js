import axios from "axios";

export function GET_USER_KALAI() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
}
