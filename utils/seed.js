// // Seeds will go here for data
// const connection = require("../config/connection");
// const { User, Thought, Reaction } = require("../models");
// const { getRandomUser, getRandomThoughts } = require("./data");

// connection.on("error", (err) => err);

// connection.once("open", async () => {
//   console.log("connected");

//   // Drop existing thoughts
//   await Thought.deleteMany({});

//   // Drop existing users
//   await User.deleteMany({});

//   // Create empty array to hold the users
//   const users = [];

//   // Loop 20 times -- add users to the users array
//   for (let i = 0; i < 20; i++) {
//     // Get some random assignment objects using a helper function that we imported from ./data
//     const thoughts = getRandomThoughts(20);

//     const randomUser = getRandomUser();

//     users.push({
//       thoughts,
//       randomUser,
//     });
//   }

//   // Add Users to the collection and await the results
//   await User.collection.insertMany(users);

//   // Add thoughts to the collection and await the results
//   await Thought.collection.insertOne({
//     thoughtText: "Awesome",
//     username: [...users],
//   });

//   // Log out the seed data to indicate what should appear in the database
//   console.table(users);
//   console.info("Seeding complete! 🌱");
//   process.exit(0);
// });
