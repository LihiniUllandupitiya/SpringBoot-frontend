//01.Install axios (npm install axios --save)
//02.create EmployeeService.js

import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

//03.Write REST Client code to make a REST API call using axios API
export const listEmployees = () => axios.get(REST_API_BASE_URL);

//01.write code to call Add Employee REST API using axios
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

//code to call get Employee REST API using axios
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

//code to call update Employee REST API using axios
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);