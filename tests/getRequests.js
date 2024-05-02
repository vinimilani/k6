import http from 'k6/http';
import { sleep } from 'k6';
// export const options = { 
//   vus: 10, //vus stands for virtual users, and it is the number of concurrent users that will be simulated.
//   duration: '30s', //duration is the time for which the test will run.
// };
export default function () {
  http.get('http://test.k6.io');
  sleep(1); //sleep is a function that pauses the execution of the script for a specified amount of time to simulate user behavior.
}
