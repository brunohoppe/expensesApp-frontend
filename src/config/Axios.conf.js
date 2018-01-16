import React from 'react';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
let e = React.createElement;
class Arquiteture extends React.Component {
    componentDidMount() {
        // NProgress.configure({ parent: '#arquitetura' });
		}
        render (){
			return (
				e('div', {id: 'arquitetura'})
			);
    }
}

const baseURLTest = 'http://localhost:3001/ws';

const baseURL = 'https://transactioncontrol.herokuapp.com/ws';

const getBaseUrl = () => {
    return baseURL;
}

const getBaseUrlTest = () => {
    return baseURLTest;
}
let loadFunction = config => {
    NProgress.start();
    return config;
}
let finishFunction = response => {
    NProgress.done();
    return response;
}
let errorFunction = error => {
    NProgress.done();
    return Promise.reject(error);
}

const axiosInstance = axios.create({ baseURL: baseURL });

axiosInstance.interceptors.request.use(loadFunction);

axiosInstance.interceptors.response.use(finishFunction, errorFunction);

const axioscfg = {
  getBaseUrlTest: getBaseUrlTest,
  getBaseUrl: getBaseUrl
}

export { axioscfg, axiosInstance, Arquiteture }
