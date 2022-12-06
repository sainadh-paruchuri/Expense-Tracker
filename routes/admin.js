const { json } = require('body-parser');
const express=require('express')
const User=require('../models/expenseDetails')
const ExpenseController=require('../controllers/ExpenseDetails');
const router=express.Router();

router.get('/',ExpenseController.getAddUser)

router.post('/expense-data',ExpenseController.postAddUser)

router.get('/userDetails',ExpenseController.getAllUsers)
router.get('/userDetail/:userId',ExpenseController.getUserById)



router.delete('/delete-user/:userId',ExpenseController.deleteUser)




module.exports=router