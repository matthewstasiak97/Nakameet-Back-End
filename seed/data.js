import db from "../db/connection.js";
import Event from "../models/event.js";

const insertData = async () => {
  await db.dropDatabase();

  const events = [
    {
      name: "Cherie",
      age: 4,
      breed: "Short haird tuxedo cat",
    },
    {
      name: "Charlie",
      age: 4,
      breed: "Medium harid maine cat",
    },
    {
      name: "Milo",
      age: 7,
      breed: "Long-haired White Siberian Cat",
    },
  ];

    await Event.create(events);

  console.log("Events have entered the Database!");

  await db.close();
};

insertData();
