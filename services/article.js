import Article from "../models/Article.js";

export const GetArticles = async (req, res) => {
    try {
        const article = await Article.find();
        return res.status(200).json(article);
    } catch (error) {
        console.error("Error fetching categories:", error);
        return res
            .status(500)
            .json({ error: "An error occurred while fetching the articles." });
    }
};

export const GetArticleBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;

        const article = await Article.findOne({ slug: slug });
        return res.status(200).json(article);
    } catch (error) {
        console.error("Error fetching article:", error);
        return res
            .status(500)
            .json({ error: "An error occurred while fetching article." });
    }
};

export const CreateArticle = async (req, res) => {
    try {
        console.log(req.body);
        const { slug, title, category, caption, content, imageurl, password } =
            req.body;

        if (password != process.env.APP_PASSWORD) {
            return res
                .status(200)
                .send({ status: "ok", msg: "Post created (or was it?)" });
        }

        const post = new Article({
            slug: slug,
            title: title,
            category: category,
            caption: caption,
            content: content,
            imageurl: imageurl,
        });

        const savedArticle = await post.save();
        return res.status(201).json({
            status: "success",
            savedArticle,
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .send({ status: "ok", msg: "Post created (or was it?)" });
    }
};
