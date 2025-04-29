export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        console.log(token.access_token)
        return { Authorization: 'Bearer ' + token.access_token };
    } else {
        return {};
    }
}