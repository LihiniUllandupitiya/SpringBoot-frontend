//01.Install axios (npm install axios --save)
//02.create EmployeeService.js

import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

//03.Write REST Client code to make a REST API call using axios API
export const listEmployees = () => axios.get(REST_API_BASE_URL);
