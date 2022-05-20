import { Request, RequestHandler, Response } from "express";
import mssql from "mssql";

import { v1 as uid } from "uuid";

import sqlConfig from "../config/config";
import Todo from "../model/todo";

const Todos: Todo[] = [];

export const createTodo = (req: Request, res: Response) => {
  const todoid = uid();
  
};

export const getTodos: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const Todos = await pool.request().execute('getTodos')
        res.status(200).json(Todos.recordset)
    } catch (error:any) {
        res.json({error: error})
    }
//   res.json(Todos);
};

export const getTodo: RequestHandler = (req, res) => {
  const id = req.params.id;
};

export const updateTodo: RequestHandler = (req, res) => {
  const id = req.params.id;
};

export const deleteTodo: RequestHandler = (req, res) => {
  const id = req.params.id;
};
