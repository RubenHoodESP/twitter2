// import data from "../mocks/users-db.json";
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';


export default class Services {

    getUsers() {
        return axios.get(`${BASE_URL}/user`);
    }

    addUser(username, password) {

        let obj = {
            table: []
        };

        obj.table.push(
            {
                id: 2,
                username: username,
                password: password
            }
        );
    }
}