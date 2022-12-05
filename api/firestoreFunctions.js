/**
 * Useful documentations
 * Adding documents to firebase db - https://softauthor.com/firebase-firestore-add-document-data-using-adddoc/
 * Getting data from firbase db collection - https://firebase.google.com/docs/firestore/query-data/get-data
 * Setting up Express- https://www.youtube.com/watch?v=YPsftzOURLw&ab_channel=SyedZano
 */

import { stationCollectionRef,userCollectionRef } from "../src/firebaseConfig.js";
import { addDoc, getDocs, query, where, onSnapshot  } from "firebase/firestore";
import { stations,users, user,station } from "../src/populateData.js";



// export const sayHello = (req, res) => res.json({hello: 'world'});


//add all user data
export const addUsers = async (req, res) =>   {
    users.map( x => {
    addDoc(userCollectionRef, x);
    })
    // res.json({msg: "User data added!"});
    console.log("User data added!");
}

//add all station data
export const addStations = async (req, res) =>   {
    stations.map( x=>{
    addDoc(stationCollectionRef, x);
    })
    //   res.json({msg: "Station data added!"});
    console.log("Station data added!");

}

//delete all user data

//delete all station data

//add indv user data (to make this dynamic rather than taking user form populate.js it will just take data from a form on the front end)
export const addUser = async (req, res) =>   {
    await addDoc(userCollectionRef, user);
    res.json({msg: "User data added!"});
}

//add indv station data (to make this dynamic rather than taking station form populate.js it will just take data from a form on the front end)
export const addStation = async (req, res) =>   {
    await addDoc(stationCollectionRef, station);
    res.json({msg: "Station  data added!"});
}

//get all user data
export const getUsers = async (req, res) =>  {
  const result = await getDocs(userCollectionRef);
  var _users = []
  result.forEach(doc => {
    _users.push(doc.data())
  });
  res.json(_users);
}

//get all station data
 export const getStations = async (req, res) => {
    const result = await getDocs(stationCollectionRef);
    var _stations = []
    result.forEach(doc => {
        _stations.push(doc.data())
    
      });
    res.json(_stations);
 };


//get indv user data
export const getUser = async (req, res) => {
    var name = await req.params.name;
    const q = await query(userCollectionRef,where("name", "==",name));
    var _users = []
    await onSnapshot(q, (docsSnap) => {
        docsSnap.forEach(doc => {
            _users.push(doc.data());
            // console.log(doc.data());
        })
        res.json(_users);
      });
}

//get indv station data
export const getStation = async (req, res) => {
    var name = req.params.name;
    const q = await query(stationCollectionRef,where("name", "==",name));
    var _stations = []
    await onSnapshot(q, (docsSnap) => {
        docsSnap.forEach(doc => {
            _stations.push(doc.data());
            // console.log(doc.data());
        })
        res.json(_stations);
      });
}


export const loadData = async (req, res) =>   {
    await addUsers()
    await addStations()
    res.json({msg: "User data added to db!"});
}

// export const delData = async (req, res) =>   {
//     const result = await getDocs(stationCollectionRef);
//     result.forEach(doc => {
//         doc.delete();
//         // doc.ref.delete();
//       });
//     res.json({msg: "All data deleted from db!"});
// }