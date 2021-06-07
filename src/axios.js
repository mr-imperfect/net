import axios from 'axios'
import {baseurl} from '../src/Constants/Constants'
const instance = axios.create({
    baseURL: baseurl
  });
  export default instance