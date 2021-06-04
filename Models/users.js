import axios from 'axios';


class User{
    static getusers = () => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => this.users = data)
    }
}