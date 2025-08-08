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

router.put("/:id", async(req,res) =>{

    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async(req,res) =>{
    await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
})




module.exports= router;