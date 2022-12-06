const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http");
const server = http.createServer(app);
const swagger = require("./lib/swagger.js");
require('dotenv').config();
const PORT = process.env.__YOUR_PRISMA_SERVER_PORT__ || 3001;

// use `prisma` in your application to read and write data in your DB

// const mariadb = require('mariadb');
// const pool = mariadb.createPool({
//      host: 'portal-deploy.kangu.equipment', 
//      user:'root', 
//      password: 'iptw3tK0admin',
//      database: 'kangu',
//      port: 3307,
//     //  connectionLimit: 200,
// });
// pool.getConnection()
//     .then((conn: any) => {
//     console.log("🚀 ~ file: index.ts ~ line 20 ~ .then ~ conn", conn)
    
//       conn.query("SELECT * FROM ad_cliente")
//         .then((rows: any) => {
//           console.log('==>>> ', JSON.parse(JSON.stringify(rows))); //[ {val: 1}, meta: ... ]
//         })
//         .catch((err: any) => {
//           //handle error
//           console.log(err); 
//           conn.end();
//         })
        
//     }).catch((err: any) => {
//       console.log("🚀 ~ file: index.ts ~ line 32 ~ .then ~ err", err)
//       //not connected
//     });
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
