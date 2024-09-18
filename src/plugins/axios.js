import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const nconfig = {
	showSpinner: false
};
axios.interceptors.request.use(
	//onUploadProgress,
	config => {
		NProgress.configure(nconfig);
		NProgress.start();
		return config;
	},
	error => {
		// handle the error
		return Promise.reject(error);
	}
);
axios.interceptors.response.use(
	function(response) {
		NProgress.done();
		return response;
	},
	function(error) {
		return Promise.reject(error);
	}
);

export default axios;
