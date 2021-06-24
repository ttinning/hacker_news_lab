const ArticleDetail = ({article}) => {
    return (
        <div>
            <p>This is the article</p>
            <h2>Article: {article.title}</h2>
            <h3>Article Type: {article.type}</h3>
            <a href={article.url} target="_blank">This will take you to the article!</a>
        </div>
    )
}

export default ArticleDetail