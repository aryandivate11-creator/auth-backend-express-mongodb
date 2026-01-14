import {Router} from "express"
import authmiddleware from "../middlewares/auth.middleware.js"
import { createTodo , getTodos , updateTodo , deleteTodo } from "../controllers/todo.controller.js"

const router =  Router();

router.use(authmiddleware);

router.post('/',createTodo);
router.get('/',getTodos);
router.put('/:id',updateTodo);
router.delete("/:id",deleteTodo);

export default router;