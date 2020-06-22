import httpClient from './httpClient';
import jwtDecode from 'jwt-decode';

httpClient.getAllNotificationByUser = function(userId) {
	return this({ method: 'get', url: 'http://localhost:8080/api/notifications/' + userId})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(serverResponse.data.success) {
                return serverResponse.data.notifications;
			} else {
				return false
			}
		})
}

httpClient.sendNotify = function(data) {
	return this({ method: 'post', url: 'http://localhost:8080/api/notifications', data: data})
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

export default httpClient;