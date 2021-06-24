const ArticleSelector = ({articles, onArticleSelected}) => {

    const handleChange = function(evt) {
        const chosenArticle = articles[evt.target.value];
        onArticleSelected(chosenArticle);
    }

    const articleOptions = articles.map((article, index) => {
        return <option value={index} key={index}>{article.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose an Article</option>
            {articleOptions}
        </select>
    )

    
}

export default ArticleSelector