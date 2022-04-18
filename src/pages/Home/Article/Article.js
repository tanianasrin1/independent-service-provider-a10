import React, { useEffect, useState } from 'react';
import ArticleBlogs from '../ArticleBlogs/ArticleBlogs';
import './Article.css'


const Article = () => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        fetch('servicesBlogs.json')
        .then(res => res.json())
        .then(data => setArticle(data))
    },[])
    return (
        <div className='container'>
            <h2 className='Blogs-Articles'>Travel Blogs Articles:</h2>
           <div className='article-container'>
           {
               articles.map(article => <ArticleBlogs
                key={article.id}
                article={article}
               ></ArticleBlogs> ) 
            }
           </div>
        </div>
    );
};

export default Article;