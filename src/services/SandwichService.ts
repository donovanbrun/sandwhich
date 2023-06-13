import axios from 'axios';

export function getSandwiches() {
    return axios.get("http://172.29.96.1:1234/api/sandwich");
}