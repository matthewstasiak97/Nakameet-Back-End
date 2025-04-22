import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.js";
import Category from "../models/category.js";
import Event from "../models/event.js";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("❌ MONGODB_URI not set in .env");
}

await mongoose.connect(process.env.MONGODB_URI);
console.log("✅ Connected to DB");

try {
  console.log("🧹 Wiping database...");
  await Promise.all([
    User.deleteMany({}),
    Category.deleteMany({}),
    Event.deleteMany({})
  ]);

  console.log("🌱 Seeding users...");
  const users = await User.insertMany([
    { username: "adminUser", password: "hashedpassword1" },
    { username: "guestMage", password: "hashedpassword2" }
  ]);

  console.log("🌱 Seeding categories...");
  const categories = await Category.insertMany([
    { name: "Tech", description: "Technology and Innovation" },
    { name: "Fantasy", description: "Magic, Realms, and Adventure" },
    { name: "Social", description: "Parties, Networking, Fun" }
  ]);

  console.log("🌱 Seeding events...");
  await Event.insertMany([
    {
      title: "Hack the Future",
      description: "A 24-hour hackathon on AI.",
      location: "Silicon Valley",
      date_time: new Date("2025-06-10T10:00:00"),
      user_id: users[0]._id,
      category_id: categories[0]._id
    },
    {
      title: "Festival of the Arcane",
      description: "Celebrate the forgotten arts.",
      location: "Eldoria",
      date_time: new Date("2025-08-21T18:00:00"),
      user_id: users[1]._id,
      category_id: categories[1]._id
    },
    {
      title: "Sunset Social",
      description: "Drinks, networking, and community.",
      location: "NYC Rooftop",
      date_time: new Date("2025-05-03T19:30:00"),
      user_id: users[0]._id,
      category_id: categories[2]._id
    }
  ]);

  console.log("✅ All data seeded successfully!");
} catch (err) {
  console.error("❌ Error seeding data:", err);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected from DB");
  process.exit(0);
}
