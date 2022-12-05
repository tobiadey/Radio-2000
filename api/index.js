import express from 'express';
import { getUsers, getStations,getUser,getStation} from '../src/firestoreFunctions.js';

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});













// import express from 'express';
// import { getUsers, getStations,getUser,getStation} from '../src/firestoreFunctions.js';

// const app = express()
// const port = 3000


// app.get('/', (req, res) => {
//   res.send('Hello!!! Check out the other endpoints')
// })


// app.get('/users', getUsers);
// app.get('/stations', getStations);
// app.get('/user/:name',getUser )
// app.get('/station/:name',getStation )



// app.listen(port, () => {
//   console.log(`🚀 Server ready at http://localhost:${port}`);
// })





