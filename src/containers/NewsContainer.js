import { useState, useEffect } from "react";
import ArticleSelector from "../components/ArticleSelect";
import ArticleDetail from "../components/ArticleDetail";
import ArticleTypeSelector from "../components/ArticleTypeSelector";

const NewsContainer = () => {
    const [articles, setArticles] = useState([])
    const [articlesId, setArticlesId] = useState([])
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [selectedType, setSelectedType] = useState(null)

    useEffect(() => {
        getArticlesId();
    }, []);

    useEffect(() => {
        getArticles();
    }, [articlesId])

    const getArticlesId = function() {
        fetch ('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(articlesId => setArticlesId(articlesId.slice(0, 20)))
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
    
    const onTypeSelected = function(articles){
        setSelectedType(articles)
    }

    return(
        <div>
            <ArticleTypeSelector articles={articles} onTypeSelected={onTypeSelected}/>
            <ArticleSelector articles={articles} onArticleSelected={onArticleSelected}/>
            {selectedArticle ?<ArticleDetail article={selectedArticle}/>: null}
        </div>
    )

}

export default NewsContainer