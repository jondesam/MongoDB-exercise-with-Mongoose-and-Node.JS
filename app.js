// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

/// mongoose ///
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB',{ useNewUrlParser: true })

// replaced by mongoose code above
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   findDocuments(db,function(){
//     client.close();
//   })
// });

//Fruit model

const fruitSchema = new mongoose.Schema({
  name:
  // String,
  {
      type: String,
      required: [true,"no name? serious?"]
  },

  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   rating: 9,
//   review: "this fruit doesn't have name!"
// });

// fruit.save();

//Person model
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Amazing fruit!"
// });
//
// pineapple.save();

// const person = new Person ({
//   name : "Amy",
//   age:12,
//   favoriteFruit: pineapple
// });




//person.save();






// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 5,
//   review: "Weird textur"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 3,
//   review: "Too sour"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved");
//   }
// });


// replaced by mongoose code above
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name : "Apple",
//       score: 8,
//       review: "Great Fruit"
//     },
//     {
//       name: "Orange",
//       score: 6,
//       review: "Kinda sour"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  } else {

    fruits.forEach(function(fruit) {
      if (fruit.name === "Orange") {
        // const orange = fruits.

        Person.updateOne({name:"John"},{favoriteFruit:fruit}, function(err){
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully updated John's favorite fruit");
          }
        });
      }
    });

  };
});


Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  }else {

    //mongoose.connection.close();

  // console.log(fruit);
    fruits.forEach(function(fruit){
    console.log(fruit.name);
    })
  }
});



// Fruit.updateOne({_id:"5d641f4c3b08516e144bbff1"}, {name:"Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });
//
// Fruit.deleteOne({_id:"5d642b03c1b2ce709cab4b57"}, function(err){
//   if(err) {
//     console.log(err);
//   }else{
//     console.log("Succesfully deleted an item");
//   }
// });

// Fruit.deleteMany({name:"Banana"}, function(err){
//   if(err) {
//     console.log(err);
//   }else{
//     console.log("Succesfully deleted items");
//   }
// });



// replaced by mongoose code above
///to read DB
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err,fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }
