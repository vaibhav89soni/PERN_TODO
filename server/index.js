const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
//to get data from client
app.use(express.json());

//to add data
app.post("/add",async(req, res)=>{
    try{
        const{ description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo(description) VALUES($1)",
            [description]
        );
        res.json(newTodo.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});


app.put("/todos/:todo_id", async (req, res) => {
    try {
      const { todo_id } = req.params;
      const { description } = req.body;
      const updateTodo = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, todo_id]
      );
   
      res.json("Todo was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  

  //get all todos
app.get("/a", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// //get a todo
app.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//delete todo

app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id
      ]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



//Employee Record Changes
//to add data
app.post("/addEmp",async(req, res)=>{
  try{
      const{ age,department,name } = req.body;
      const newTodo = await pool.query(
          "INSERT INTO Emp(age,department,name) VALUES($1,$2,$3)",
          [age,department,name]
      );
      res.json(newTodo.rows[0]);
  }catch(err){
      console.error(err.message);
  }
});


app.put("/updateEmp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    // const { age } = req.body;
    // const { department } = req.body;
    
    const updateTodo = await pool.query(
      "UPDATE emp SET name = $2 WHERE id = $1",
      [id,name]
    );
 
    res.json("Employee was updated!");
  } catch (err) {
    console.error(err.message);
  }
});


//get all todos
app.get("/listEmp", async (req, res) => {
try {
  const allTodos = await pool.query("SELECT * FROM emp");
  res.json(allTodos.rows);
} catch (err) {
  console.error(err.message);
}
});
// //get a todo
app.get("/getEmp/:id", async (req, res) => {
try {
  const { id } = req.params;
  const todo = await pool.query("SELECT * FROM emp WHERE id = $1", [
    id
  ]);

  res.json(todo.rows[0]);
} catch (err) {
  console.error(err.message);
}
});


//delete todo

app.delete("/deleteEmp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM emp WHERE id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


//To run on server on port 5000

app.listen(5000,()=> { //arrow function
    console.log("Server started on port 5000");
});