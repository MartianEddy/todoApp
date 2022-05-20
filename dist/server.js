"use strict";
// creating my project server
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
const express_1 = __importDefault(require("express"));
const mssql_1 = __importDefault(require("mssql"));
// import sqlConfig from "./config/config";
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
//  connecting to todoappdb
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mssql_1.default.connect(config_1.default);
        console.log("Database connected!");
    }
    catch (err) {
        console.log("Error occured when connecting to DB");
    }
});
app.use(express_1.default.json());
app.use("/todos", todo_routes_1.default);
app.listen(7000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("App running on port  7000");
    yield connectToDB();
}));
