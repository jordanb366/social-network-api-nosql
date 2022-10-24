// Seeds will go here for data
const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const { getRandomUser, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 2; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    // const thoughts = getRandomThoughts(2);

    const randomUser = getRandomUser();

    users.push({
      username: randomUser,
      email: `${i}testemail@email.com`,
    });
  }

  // Add Users to the collection and await the results
  await User.collection.insertMany(users);

  let userData = await User.find();

  console.log(userData);

  //   Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: "Awesome",
    username: userData[0].username,
  });

  let thoughtData = await Thought.find();

  console.log(thoughtData);

  await User.findOneAndUpdate(
    { _id: userData[0]._id },
    { $addToSet: { thoughts: thoughtData[0]._id } }
  );

  // Log out the seed data to indicate what should appear in the database
  //   console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
