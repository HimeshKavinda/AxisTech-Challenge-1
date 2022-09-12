import express, {Application, Request, Response} from "express";
import axios from "axios";
import https from "https";

// import fetch from "node-fetch";

const app: Application = express();
const port: number = 3000;

app.get('/', async(req: Request, res: Response) => {
    https.get('http://registry.npmjs.org/forever/latest', res => {
    let data: any[] | readonly Uint8Array[] = [];
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


