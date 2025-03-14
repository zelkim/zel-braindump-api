import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    caption: { type: String, required: true },
    category: { type: String, required: true },
    imageurl: { type: String, required: false },
    content: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    views: { type: Number, default: 0 },
});

articleSchema.post("findOne", async (doc) => {
    if (doc) {
        await doc.updateOne({ $inc: { views: 1 } });
    }
});

export default mongoose.model("articles", articleSchema);
