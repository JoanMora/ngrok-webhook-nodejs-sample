import express from 'express';
import chalk from 'chalk';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const filterRequest = (req) => {
  const event = req.body;

  return true;
}

const port = 3000;

/*
 // Start Generation Here
const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: port });
  console.log(`Tunnel is open at ${tunnel.url}`);

  tunnel.on('close', () => {
    console.log('Tunnel closed');
  });
})();
*/

 // Start of Selection
app.all('/*', function (req, res) {
   const event = req.body;
   if (filterRequest(req)) {
         // Start of Selection
      console.log(`-------------- ${event.type} --------------`);
      // console.log("Headers:"+ JSON.stringify(req.headers, null, 3));
      const color = event.type === 'page' ? chalk.cyan : event.type === 'track' ? chalk.green : chalk.white;
      console.log(color(JSON.stringify(req.body, null, 2)));
      console.log("-----------------------------------------------");
      res.status(200).json({ message: "Processed" }).send();
   } else {
      res.status(200).json({ message: "Not Processed" }).send();
   }
})

app.listen(port, function () {
   console.log(`Rudder Debugger listening at ${port}`)
})
