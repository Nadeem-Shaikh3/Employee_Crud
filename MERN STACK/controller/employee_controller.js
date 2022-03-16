import Employee from "../model/employee_schema.js";

export const getEmployees=async(request,response)=>{
    try {
        let employee = await Employee.find();
        response.json(employee)
     } catch (error) {
         response.json({message:error.message})
     }
}

export const addEmployee=async(request,response)=>{
        const employee=request.body;
        const newEmployee=new Employee(employee);

        try {
           await newEmployee.save();
           response.json(newEmployee)
        } catch (error) {
            response.json({message:error.message})
        }   
}

export const getEmployeeById=async(request,response)=>{
    const id=request.params.id;
    try {
        const employee = await Employee.findById(id);
        response.json(employee);
    } catch (error) {
        response.json({message:error.message})
    }
}

export const editEmployee=async(request,response)=>{
    const employee=request.body;
    const editEmployee=new Employee(employee);
    try {
        await Employee.updateOne({_id:request.params.id},editEmployee);
        response.json(editEmployee);
    } catch (error) {
        response.json({message:error.message});    
    }
}

export const deleteEmployee=async(request,response)=>{
    try {
        await Employee.deleteOne({_id:request.params.id});
        response.json("Employee Deleted Successfully");
    } catch (error) {
        response.json({message:error.message})
    }
}