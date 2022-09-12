"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
// import fetch1 from "node-fetch";
const app = (0, express_1.default)();
const port = 3000;
app.get('/', async (req, res) => {
    https_1.default.get('https://jsonplaceholder.typicode.com/todos/1', res => {
        let data = [];
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res);
        console.log('Date in Response header:', headerDate);
        res.on('data', chunk => {
            // data.push(chunk);
        });
        res.on('end', () => {
            console.log('Response ended: ');
            // const users = JSON.parse(Buffer.concat(data).toString());
            // for(user of users) {
            //   console.log(`Got user with id: ${user.id}, name: ${user.name}`);
            // }
        });
    }).on('error', err => {
        console.log('Error: ', err.message);
    });
});
app.listen(port, () => {
    console.log(`Connected Successfully on port ${port}`);
});
