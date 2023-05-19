import http from 'k6/http';
import {check} from 'k6';


export default function () {
    const result = http.get('https://test.k6.io');
    check(result, {
        'verify homepage text': (r) =>
            r.body.includes('Collection of simple web-pages suitable for load testing'),
    });
}
