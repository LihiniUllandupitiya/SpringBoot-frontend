import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

//ListEmployeeComponent 01.create react functional component-ListEmployeeComponent
const ListEmployeeComponent = () => {

    //04.Change ListEmployeeComponent to Display Response of the REST API(List of Employees)
    const[employees, setEmployees] = useState([])

    const navigator = useNavigate();
    
    useEffect(() => {
        listEmployees().then((Response) => {
            setEmployees(Response.data);
        }).catch(error => {
            console.error(error);
        }) 

    }, [])




    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }



//ListEmployeeComponent 03.write JSX code to Display List of Employees in HTML Table
  return (
    <div className='container'>
        
        <h2 className='text-center'>List of Employees</h2>

        {/* 02.Add button to Add Employees */}
        <button className='btn btn-dark mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th> 
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                {/*01.Add the button for actions(update,delete) */}
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent