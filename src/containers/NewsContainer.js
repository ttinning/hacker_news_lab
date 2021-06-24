import { useState, useEffect } from "react";
import ArticleSelector from "../components/ArticleSelect";

const NewsContainer = () => {
    const [articles, setArticles] = useState([])
    const [articlesId, setArticlesId] = useState([])
    const [selectedArticle, setSelectedArticle] = useState(null)


    useEffect(() => {
        getArticlesId();
    }, []);

    useEffect(() => {
        getArticles();
    }, [articlesId])

    const getArticlesId = function() {
        fetch ('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(articlesId => setArticlesId(articlesId.slice(0, 10)))
        console.log(setArticlesId)
    }

    const getArticles = function(){
        const articlePromises = articlesId.map((id, index) => {
            return fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
                .then(res => res.json())
        })
        Promise.all(articlePromises).then(articles => setArticles(articles))
    }

    const onArticleSelected = function(articles){
        setSelectedArticle(articles)
    }

    return(
        <div>
            {articlesId.length},
            <ArticleSelector articles={articles} onArticleSelected={onArticleSelected}/>
        </div>
    )

}

export default NewsContainer