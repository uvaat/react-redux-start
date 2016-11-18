import axios from 'axios';
import store from '../store';
import { action } from '../actions/action';

export function methodeApi(params){

    return axios.post('http://localhost:3001/[endpoint]', params)
        .then(response => {
            store.dispatch(action(student));
            return response;
        }, error => {});

}

export function get() {

    return axios.get('http://localhost:3001/[endpoint]')
        .then(response => {
            store.dispatch(getStudentsSuccess(response.data));
            return response;
        }, error => {
            console.log(error);
        });
        
}
