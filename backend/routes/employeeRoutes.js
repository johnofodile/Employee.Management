const express = require('express');
const router=express.Router();
const Employee = require('../models/Employee');

router.get("/", async(req,res) =>{

const employees= await Employee.find();
res.json(employees);
});

router.post("/", async(req,res) =>{

const newEmp= new Employee(req.body);

//new employee object is created from the request body
//and saved to the database
await newEmp.save();
});

module.exports= router;