import http from 'k6/http';
import {check} from 'k6';


export default function () {
    const result = http.get('https://test.k6.io');
    check(result, {
        'is status code 200': (r) => r.status === 200,
    });
}
