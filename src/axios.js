import axios from 'axios';

//const baseURL = 'https://gaalguimoneyback.herokuapp.com/api/';
const baseURL ='http://127.0.0.1:8000/api/'

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('__jmdf__')
			? 'Bearer ' + localStorage.getItem('__jmdf__')  
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			alert(
				'Erreur!'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'client/token/refresh/'
		) {
			window.location.href = '/connexion/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			
	  	   localStorage.removeItem('__jdkm__');
           localStorage.removeItem('__jvqm__');
          window.location.href = '/connexion/';
          window.location.reload()
			} 
		}

	);

export default axiosInstance;