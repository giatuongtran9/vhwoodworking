export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user && user.token) {
        return { 'x-auth-token': user.token};
    } else {
        return {};
    }
}