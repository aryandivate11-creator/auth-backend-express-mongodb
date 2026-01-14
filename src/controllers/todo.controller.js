import Todo from "../models/Todo.model.js";

export const createTodo = async (req,res) =>{
      try {
        const todo = await Todo.create({
            title: req.body.title,
            user : req.user.id,
        });

        res.status(201).json(todo)
      } catch (error) {
        res.status(501).json({
            error:"Failed to create todo !"
        });
      };
};

export const getTodos = async (req,res) =>{ 
      try {
        const todos = await Todo.find({user: req.user.id});
        res.status(200).json(todos)
      } catch (error) {
        res.status(500).json({
            error:"Failed to fetch todos."
        });
      };
};

export const updateTodo = async (req,res) =>{
    try {
        const todo = await Todo.findOneAndUpdate(
        { id: req.params.id , user : req.user.id},
        req.body,
        { new:true},
    );
    console.log("Todo ID:", req.params.id);
    console.log("User ID:", req.user.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            error:"Failed to update Todo !"
        });
    };
};

export const deleteTodo = async (req,res) =>{
    try {
         await Todo.findOneAndDelete({
        _id: req.params.id,
         user: req.user.id,
        });

     res.status(200).json({ message: "Todo deleted" });

    } catch (error) {
        res.status(500).json({
            error:"Unable to delete Todo !"
        })
    }
}