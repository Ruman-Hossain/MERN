const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/task");

//http://localhost:5050/api/v1/test
router.get("/test",async(req,res)=>{
    res.json({
        status:"Success",
        "message":"Hello world"
    })
})
// http://localhost:5050/api/v1/tasks
router.get("/tasks", getTasks);

// http://localhost:5050/api/v1/create
router.post("/create", createTask);

// http://localhost:5050/api/v1/get/:id
router.get("/get/:id", getTask);

// http://localhost:5050/api/v1/delete/:id
router.delete("/delete/:id", deleteTask);

// http://localhost:5050/api/v1/update/:id
router.put("/update/:id", updateTask);



module.exports = router;