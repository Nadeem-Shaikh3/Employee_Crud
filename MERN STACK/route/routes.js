import express from "express";
import { getEmployees,addEmployee,getEmployeeById,editEmployee,deleteEmployee } from "../controller/employee_controller.js";

const route=express.Router();

route.get('/',getEmployees);
route.post('/add',addEmployee);
route.get('/:id',getEmployeeById)
route.put('/:id',editEmployee);
route.delete('/:id',deleteEmployee)

export default route;