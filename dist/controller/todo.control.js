"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getTodos = exports.createTodo = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const config_1 = __importDefault(require("../config/config"));
const Todos = [];
const createTodo = (req, res) => {
    const todoid = (0, uuid_1.v1)();
};
exports.createTodo = createTodo;
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(config_1.default);
        const Todos = yield pool.request().execute('getTodos');
        res.status(200).json(Todos.recordset);
    }
    catch (error) {
        res.json({ error: error });
    }
    //   res.json(Todos);
});
exports.getTodos = getTodos;
const getTodo = (req, res) => {
    const id = req.params.id;
};
exports.getTodo = getTodo;
const updateTodo = (req, res) => {
    const id = req.params.id;
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const id = req.params.id;
};
exports.deleteTodo = deleteTodo;
