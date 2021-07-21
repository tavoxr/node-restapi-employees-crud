const {Router} = require('express');
const router =  Router();
const employeeCtrl =  require('../controllers/employees.controllers')

router.get('/', employeeCtrl.getEmployees);
router.post('/create', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/edit/:id', employeeCtrl.editEmployee);
router.delete('/delete/:id', employeeCtrl.deleteEmployee);


module.exports = router;

