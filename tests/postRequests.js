import http from 'k6/http';
import { check, sleep } from 'k6';
import uuid from './libs/uuid.js';

export const options = {
    vus: 10,
    duration: '10s',
};

export default function () {
    const url = 'https://httpbin.test.k6.io/post';
    const payload = JSON.stringify({
        email: `${uuid.v4()}@test.com`, // Use the uuid library to generate a random email address
        password: 'Test123@'
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);
    check(res, { 'status was 200': (r) => r.status == 200 }); 
    sleep(1);
}