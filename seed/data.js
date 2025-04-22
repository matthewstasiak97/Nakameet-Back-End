import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Category from "./models/Category.js";
import Event from "./models/Event.js";

dotenv.config();

await mongoose.connect(process.env.DATABASE_URL);
console.log("✅ Connected to DB");

try {
  await User.deleteMany();
  await Category.deleteMany();
  await Event.deleteMany();

  // 1. Seed Users
  const users = await User.insertMany([
    { username: "adminUser", password: "hashedpassword1" },
    { username: "guestMage", password: "hashedpassword2" },
  ]);

  // 2. Seed Categories
  const categories = await Category.insertMany([
    { name: "Tech", description: "Technology and Innovation" },
    { name: "Fantasy", description: "Magic, Realms, and Adventure" },
    { name: "Social", description: "Parties, Networking, Fun" },
  ]);

  // 3. Seed Events with refs to user_id and category_id
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
      title: "Festival of the Arcane",
      description: "Celebrate the forgotten arts.",
      location: "Eldoria",
      date_time: new Date("2025-08-21T18:00:00"),
      user_id: users[1]._id,
      category_id: categories[1]._id,
    },
    {
      title: "Sunset Social",
      description: "Drinks, networking, and community.",
      location: "NYC Rooftop",
      date_time: new Date("2025-05-03T19:30:00"),
      user_id: users[0]._id,
      category_id: categories[2]._id,
    },
  ]);

  console.log("🌱 Seeded all data!");
} catch (err) {
  console.error("❌ Error seeding:", err);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected from DB");
}
