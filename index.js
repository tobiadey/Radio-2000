import express from 'express';
import { getUsers, getStations,getUser,getStation} from './api/firestoreFunctions.js';


const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello!!! Check out the other endpoints')
})

app.get('/users', getUsers);
app.get('/stations', getStations);
app.get('/user/:name',getUser )
app.get('/station/:name',getStation )



app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
})









// import express from 'express';
// import { getUsers, getStations,getUser,getStation} from './src/firestoreFunctions.js';

// const app = express();
// // app.use(express.json({ extended: false }));


// // app.get("/", (req, res) => {
// //     res.send('Hello!!! Check out the other endpoints')
// // });

// // app.get("/test", (req, res) => {
// //     res.send('Hello!!! Check out the other endpoints')
// //   });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));