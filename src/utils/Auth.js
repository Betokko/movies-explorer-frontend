import axios from 'axios'

import {BASE_URL} from './constants'

export const login = (data) => {
    axios.post(`${BASE_URL}/signin`, data).then(res => console.log(res))
}