class Utils {
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    handleResponse(response) {
        if (response.status === 401) {
            this.logout();
            location.reload(true);

            const error = response.data && response.data.message;
            return Promise.reject(error);
        }
        return Promise.resolve(response);
    }

    urlAPI() {
        //return 'http://localhost:49817/api/';
        return 'development' === 'production' ? 'http://10.100.66.25:8088/api/' : 'http://localhost:8080';
    }
}

export default new Utils();