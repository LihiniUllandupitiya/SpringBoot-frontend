import React from 'react'

//01.create react functional component-ListEmployeeComponent
const ListEmployeeComponent = () => {

    //02.prepare dummy data(list of employees) to display in an HTML Table
    const dummyData = [
        {
            "id":1,
            "firstName": "Lihini",
            "lastName": "Imalsha",
            "email": "l@gmail.com"
        },
        {
            "id":2,
            "firstName": "Duleen",
            "lastName": "Imalsha",
            "email": "d@gmail.com"
        },
        {
            "id":1,
            "firstName": "Nesha",
            "lastName": "Imalsha",
            "email": "n@gmail.com"
        }
    ]

//03.write JSX code to Display List of Employees in HTML Table
  return (
    <div className='container'>
        
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent