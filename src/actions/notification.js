import httpClient from './httpClient';
import jwtDecode from 'jwt-decode';

httpClient.getAllNotificationByUser = function(userId) {
	return this({ method: 'get', url: 'https://6hc5k.sse.codesandbox.io/api/notifications/' + userId})
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
	return this({ method: 'post', url: 'https://6hc5k.sse.codesandbox.io/api/notifications', data: data})
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