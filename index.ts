const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http");
const server = http.createServer(app);
const swagger = require("./lib/swagger.js");
require('dotenv').config();
const PORT = process.env.__YOUR_PRISMA_SERVER_PORT__ || 3000;
// const security = [
//     { name: 'X-Content-Type-Options', value: 'nosniff' },
//     { name: 'X-Frame-Options', value: 'DENY' },
//     { name: 'X-XSS-Protection', value: '1; mode=block' },
//     { name: 'Access-Control-Allow-Origin', value: '*' },
//     { name: 'Access-Control-Allow-Methods', value: 'GET, POST, DELETE, PUT, PATCH, OPTIONS' },
//     { name: 'Access-Control-Allow-Headers', value: 'user, auth, token, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID, X-Requested-With' },
//     { name: 'Cache-Control', value: 'no-cache' },
// ];
// const http_Headers = (req: any, res: any, next: any) => {
//     // Incluindo headers seguros
//     for (let I = 0; I < security.length; I++) {
//         res.setHeader(security[I].name, security[I].value);
//     }
//     next();
// };
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static( __dirname + '/public' ) );
swagger(app);
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
// Carrega API routes
require("./app/controllers")(app);
// Carrega Index
// app.get("/", http_Headers, function (req: any, res: any) {
//   res.redirect("/");
// });
