import httpClient from './httpClient';
import jwtDecode from 'jwt-decode';
const queryString = require('query-string');

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: 'http://localhost:8080/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(serverResponse.data.success) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: 'http://localhost:8080/api/users/create', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.getUserByUserName = function(userName) {
	return this({ method: 'get', url: 'http://localhost:8080/api/users/' + userName})
		.then((res) => {
			if(res.data.success) {
				return res.data;
			} else {
				return false
			}
		})
}

httpClient.getUsers = function(content) {
	var query = '';
	if(content){
		query = '?' + queryString.stringify({query: content});
	}
	return this({ method: 'get', url: 'http://localhost:8080/api/users' + query})
		.then((res) => {
			if(res.data.success) {
				return res.data.users;
			} else {
				return false
			}
		})
}

httpClient.folowUser = function(username) {
	return this({ method: 'post', url: 'http://localhost:8080/api/users/' + username + '/following'})
		.then((res) => {
				return res.data.success
		})
}

export default httpClient;