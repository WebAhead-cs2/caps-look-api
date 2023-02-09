const catchAsync = require("../utils/catchAsync");
const db = require("../database/connection");


const getAbsenece = catchAsync((req, res) => {
   
    db.query("SELECT * FROM absence ")
    .then(result => {
        const data =result.rows;
        res.status(200).send({
            successmsg: "Absence retrieved successfully.", 
            data : results.rows,
        })
    })
     .catch(()=>{
        res.status(500).send({
            msg: "Unexpected error!!"
        })
     })     
});

const editabsence = catchAsync((req, res) => {
    db.query("SELECT * FROM absence ")
    .then(result => {
        const data =result.rows;
        res.status(200).send({
            successmsg: "Absence details updated successfully",
            data: result.rows
        })
    })
     .catch(()=>{
        res.status(500).send({
            msg: "Unexpected error!!"
        })
     }) 
     .catch(()=>{
        res.status(400).send({
        msg: "Invalid input",
     })
    })
});

const addabsence = catchAsync((req, res) => {
   
    db.query("SELECT * FROM absence ")
    .then(result => {
        const data =result.rows;
        res.status(200).send({
            successmsg: "Absence details addeD successfully",
            data: result.rows
        })
    })
     .catch(()=>{
        res.status(500).send({
            msg: "Unexpected error!!"
        })
     }) 
     .catch(()=>{
        res.status(400).send({
        msg: "Invalid input",
     })
    })
});

const deleteAbsenece = catchAsync((req, res) => {
   
    db.query("SELECT * FROM absence ")
    .then(result => {
        const data =result.rows;
        res.status(200).send({
            successmsg: "The absence has been deleted successfully",
            data: result.rows
        })
    })
    .catch(()=>{
        res.status(500).send({
            msg: "server error!!",
        })
     })  
});
module.exports= {
    getAbsenece,
    editabsence,
    addabsence,
    deleteAbsenece
}