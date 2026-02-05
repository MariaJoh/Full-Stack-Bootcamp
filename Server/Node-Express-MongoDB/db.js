const { MongoClient } = require('mongodb');

let db = null
async function connectToDB() {
  if(db) {
    return db
  }

  const client = new MongoClient(process.env.MONGODB_URL);
  await client.connect();
  console.log('Connected to DB successfully!');

  db = client.db(process.env.DATABASE_NAME)
  return db
}

module.exports = connectToDB