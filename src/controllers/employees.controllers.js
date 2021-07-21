
const employeeCtrl = {}

employeeCtrl.getEmployees = (req,res)=>{
    res.send("get employees")
}


employeeCtrl.createEmployee = (req, res)=>{
    res.send("create employee")

}


employeeCtrl.getEmployee = (req,res)=>{
    res.send("get employee")

}


employeeCtrl.editEmployee = (req,res)=>{
    res.send("edit employees")

}


employeeCtrl.deleteEmployee = (req,res)=>{
    res.send("delete employees")

}



 module.exports = employeeCtrl;