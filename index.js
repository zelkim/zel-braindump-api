// -- lasallian.me
// A professional social media platform created for De La Salle University's
// student organization ecosystem.
import { config } from "dotenv";
import express, { urlencoded, json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
    GetArticles,
    GetArticleBySlug,
    CreateArticle,
} from "./services/article.js";
import { GetCategories } from "./services/category.js";

config();

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// ##############
// ##  ROUTES  ##
// ##############
app.get("/posts", GetArticles);
app.get("/post/:slug", GetArticleBySlug);
app.get("/topics", GetCategories);
app.post("/create", CreateArticle);

// NOTE: STARTUP
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`[${process.env.APP_NAME}] Database connection established.`);
});

app.listen(process.env.APP_PORT, () => {
    console.log(
        `[${process.env.APP_NAME}] API started on port ${process.env.APP_PORT}`,
    );
});
