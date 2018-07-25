import axios from 'axios';

let apiLocation = 'http://172.20.10.6:8081/api/v1';
export default () => axios.create({
        baseURL: apiLocation,
        withCredentials: true,
        headers: {
            'x-access-token': localStorage.getItem('SmartMornKey') || '',
            'X-Requested-With': XMLHttpRequest
        },
        adapter: require('axios/lib/adapters/http')
    });

// const handleResponse = (response) => {
//     if (response.data) {
//         return Promise.resolve(response);
//     }
//     return Promise.reject(response);
// };

// const catchError = e => Promise.reject(e.response.data);

// export default {
//     get: path => (
//         createApiInstance()
//         .get(path)
//         .then(handleResponse)
//         .catch(catchError)
//     ),
//     post: (path, body = {}, headers = {}) => (
//         createApiInstance()
//         .request({
//             url: path,
//             method: 'POST',
//             headers,
//             data: body,
//         })
//         .then(handleResponse)
//         .catch(catchError)
//     ),
//     put: (path, body = {}) => (
//         createApiInstance()
//         .request({
//             url: path,
//             method: 'PUT',
//             data: body,
//         })
//         .then(handleResponse)
//         .catch(catchError)
//     ),
// };