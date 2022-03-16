import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeId:String,
    email:String,
    mobile:Number
})

autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin,'user')
const Employee= mongoose.model('user',employeeSchema);

export default Employee;