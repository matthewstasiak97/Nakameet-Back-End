import mongoose from "mongoose"

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  date_time: { type: Date, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
})

export default mongoose.model("Event", eventSchema)
