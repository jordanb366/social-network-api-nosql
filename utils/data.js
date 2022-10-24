// Seeds will go here for data

const users = ["TestUser", "TestUser2", "TestUser3", "TestUser4"];

const userThoughts = [
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Tower Defense",
  "Monopoly Money Manager",
  "Movie trailers",
  "Hello world",
  "Stupid Social Media App",
  "Notes",
  "Messages",
  "Email",
  "Compass",
  "Firefox",
  "Running app",
  "Cooking app",
  "Poker",
  "Deliveries",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomUser = () => getRandomArrItem(users);

// Function to generate random thoughts
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughts: getRandomArrItem(userThoughts),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts };
