const express = require("express");
const router = express.Router();
const db = require("../db/db");



router.post("/",(req,res)=>{
    const {name,email,employee_id,date_of_joining,phone_number,department,role} = req.body;
    console.log(req.body)
    const query = "INSERT INTO employees (name, employee_id, email, phone_number, department, date_of_joining, role) VALUES (?, ?, ?, ?, ?, ?, ?) ";
    db.query(query,[name, employee_id, email, phone_number, department, date_of_joining, role],(err,result)=>{
        if(err){
            return res.status(400).json({"message":"database error"});
        }
        res.status(200).json({"message":"employ created"});
    })
})

module.exports = router;