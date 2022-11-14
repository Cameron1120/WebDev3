import React, { useState } from 'react'

const { useContext }  = React
const employeeContext=React.createContext()
function MainApp(){
	const[employee, setEmployee]=useState({id:101, name:'admin',location:'pune',salary:12345})
	return (
		<div>
			<h2> Welcome to App Component</h2>
			<employeeContext.Provider value={employee}>
			<Employee></Employee>
			</employeeContext.Provider>
		</div>
	)
}

function Employee(){
	let context=useContext(employeeContext)
	return (
		<div>
			<h2> welcome to Employee Component</h2>
			<label>Employee ID: { context.id }</label>
			<label>Employee Name:: { context.name }</label>
			<label>Employee Location: { context.location }</label>
			<Salary></Salary>
		</div>
	)
}


function Salary(){

	let context=useContext(employeeContext)
	return (
		<div>
			<h2> Welcome to Salary Component</h2>
			<label>Employee Name:: { context.name }</label>
			<label>Employee Salary: { context.salary }</label>
		</div>
	)
}

export default MainApp
