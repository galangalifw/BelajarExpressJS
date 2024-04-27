module.exports = (mongoose) => {
    const Article = mongoose.model(
        "article",
        mongoose.Schema(
            {
                title:  String,
                description: String,
                published: Boolean
            },
            { timestamps: true }
        )
    )

    return Article;
}