import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    tertiaryColor: { type: String, required: true },
});

export default mongoose.model("category", categorySchema);
