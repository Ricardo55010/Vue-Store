class Utils {
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    handleResponse(response) {
        console.log(response.status)
        console.log(response)
        if (response.status === 401) {
            this.logout();
            setTimeout(() => location.reload(true), 2000)

//            const error = response.data && response.data.message;
//            return Promise.reject(error);
        }
    }

    urlAPI() {
        //return 'http://localhost:49817/api/';
        const env = 'development';
        return env === 'production' ? 'http://10.100.66.25:8088/api/' : 'http://localhost:8080';
    }

    urlAPIAuth() {
        //return 'http://localhost:49817/api/';
        const env = 'development';
        return env === 'production' ? 'http://10.100.66.25:8088/api/' : 'http://localhost:9000';
    }
}

export default new Utils();