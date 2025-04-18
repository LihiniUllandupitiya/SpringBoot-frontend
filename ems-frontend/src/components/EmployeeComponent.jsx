//01.create EmployeeComponent

import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    //01.Defined state variable values(firstName,lastName,email) using a useState hook in EmployeeComponent
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    //01.use useState hook to initialize state variables that will hold validation errors
    const [errors,setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    })


    const navigator = useNavigate();

    //useEffect hook to populate the employee data in the form for update
    useEffect(() => {
        if(id){
            getEmployee(id).then((responce) => {
                setFirstName(responce.data.firstName);
                setLastName(responce.data.lastName);
                setEmail(responce.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    //03.Create JavaScript Function to handle onClick Event(form submit)
    //Update SaveEmployee method as SaveOrUpdateEmployee method to handle both Add and Update Employee operations
    function SaveEOrUpdatemployee(e){
        e.preventDefault();

        //03.Validate form on Submisison
        if(validateForm()){
            
            const employee = {firstName,lastName,email}
            console.log(employee)

            if(id){
                updateEmployee(id, employee).then((responce) => {
                    console.log(responce.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            }else{
                //02.Change EmployeeComponent to call EmployeeService method
                createEmployee(employee).then((responce) => {
                    console.log(responce.data);
    
                    //03.Navigate to List Employees Page After Form Submission Done
                    navigator('/employees')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    //02.write a validation function that checks the form data and returns validation erroors
    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else{
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }


        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else{
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }


        if(email.trim()){
            errorsCopy.email = '';
        }else{
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;

    }
    
    //change page title dynamically(Add Employee and Update Employee)
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (

    //02. Design Add Employee Form using HTML and Bootstrap
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>

                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name :</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className={ `form-control ${ errors.firstName ? 'is-invalid': '' }`} //04.Display Validation Errors
                                onChange={(e) => setFirstName(e.target.value)} //without writing javascript functions we can directly call it here using arrow function in very optimistic way simplifying the code
                            >
                            </input>
                            { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name :</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={ `form-control ${ errors.lastName ? 'is-invalid': '' }`}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                            { errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email :</label>
                            <input
                                type='text'
                                placeholder='Enter Employee email'
                                name='email'
                                value={email}
                                className={ `form-control ${ errors.email ? 'is-invalid': '' }`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>

                        <button className='btn btn-success' onClick={SaveEOrUpdatemployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent