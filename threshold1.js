import http from 'k6/http';
import {check} from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95) < 200'], // p(percentile) < 200 milliseconds
    }
}

export default function () {
    const result = http.get('https://test.k6.io');
}
