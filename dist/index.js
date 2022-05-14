"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuration the .env file
dotenv_1.default.config();
//Create express api
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Define first route app
app.get('/', (req, res) => {
    res.send('(Mongoose - Express - Reactjs - Nodejs)');
});
app.get('/hello', (req, res) => {
    res.send('Hola mundo... \n (Mongoose - Express - Reactjs - Nodejs)');
});
//Excute app and listen port
app.listen(port, () => console.log(`Express Server running at port http://localhost:${port}`));
//# sourceMappingURL=index.js.map