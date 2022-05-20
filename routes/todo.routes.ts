import express from "express";

import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controller/todo.control";

const router = express.Router();

router.post("/create", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
