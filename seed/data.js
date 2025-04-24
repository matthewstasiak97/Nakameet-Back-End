import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.js";
import Category from "../models/category.js";
import Event from "../models/event.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI); // ✅
console.log("✅ Connected to DB");

try {
  await User.deleteMany();
  await Category.deleteMany();
  await Event.deleteMany();

  const users = await User.insertMany([
    { username: "adminUser", password: "hashedpassword1" },
    { username: "guestMage", password: "hashedpassword2" },
  ]);

  const categories = await Category.insertMany([
    { name: "Tech", description: "Technology and Innovation" },
    { name: "Fantasy", description: "Magic, Realms, and Adventure" },
    { name: "Social", description: "Parties, Networking, Fun" },
  ]);

  await Event.insertMany([
    {
      title: "Hack the Future",
      description: "A 24-hour hackathon on AI.",
      location: "Silicon Valley",
      date_time: new Date("2025-06-10T10:00:00"),
      user_id: users[0]._id,
      category_id: categories[0]._id,
    },
    {
      name: "Milo",
      age: 7,
      breed: "Long-haired White Siberian Cat",
    },
  ]);

  await Event.create(events);

  console.log("🌱 Seeded all data!");
} catch (err) {
  console.error("❌ Error seeding:", err);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected from DB");
  process.exit(0);
}
