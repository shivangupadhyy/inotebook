const mongoose =  require('mongoose');


const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true"

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }
  
  module.exports = connectToMongo;

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to mongo successfully ")
//     })
// }

// module.exports = connectToMongo;