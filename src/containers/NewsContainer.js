import { useState, useEffect } from "react";

const NewsContainer = () => {
    const [news, setNews] = useState([])
    const [newsId, setNewsId] = useState([])


    useEffect(() => {
        getNewsId();
    }, []);

    useEffect(() => {
        getNews();
    }, [newsId])

    const getNewsId = function() {
        fetch ('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(newsId => setNewsId(newsId.slice(0, 10)))
        console.log(setNewsId)
    }

    const getNews = function(){
        const articlePromises = newsId.map((id, index) => {
            return fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
                .then(res => res.json())
        })
        Promise.all(articlePromises).then(articles => setNews(articles))
    }

    return(
        <div>
            {newsId.length},
        </div>
    )

}

export default NewsContainer