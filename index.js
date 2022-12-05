import express from 'express';
import { sayHello, getUsers, getStations,getUser,getStation} from './api/firestoreFunctions.js';


const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello!!! Check out the other endpoints')
})

app.get('/hello', sayHello);
app.get('/users', getUsers);
app.get('/stations', getStations);
app.get('/user/:name',getUser )
app.get('/station/:name',getStation )



app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
})



