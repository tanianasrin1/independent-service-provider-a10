import React from 'react';
import './ArticleBlogs.css'

const ArticleBlogs = ({article}) => {
    const {name, img,  description} = article;
    return (
        <div className='articleBlogs'>
            <img src={img} alt="" />
            <h5>Name:{name} </h5>
            <p><small>{description}</small></p>
        </div>
    );
};

export default ArticleBlogs;