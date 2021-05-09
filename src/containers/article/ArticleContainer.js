import React, { useEffect, useState } from 'react';
import { getArticle } from '../../repository/articleRepository'
import { ArticleStyled, getFonts } from '../../componentLibrary/ArticleStyled'

const articlePage = (article) => {    

    return (
        <ArticleStyled col={2} span={6} fontSizes={getFonts(6)}>
            <img src={article.imageUri} width="100%" />
            <div className="headers">                     
                {article.photographer && <><p className="caption">{article.photographer}</p></>}                
                {article.overline && <><p className="overline">{article.overline}</p></>}
                {article.headline && <><p className="headline">{article.headline}</p></>}
                {article.tagline && <><p className="tagline">{article.tagline}</p></>}
                {article.bodytext}
            </div>
        </ArticleStyled>
    )    
}

export const ArticleContainer = (props) => {

    let articleId = parseInt(props.match.params.id)

    const [article, setArticle] = useState(null)

    useEffect(() => {
        setArticle(getArticle(articleId))
    }, [])

    return (
        <>
            {article && articlePage(article)}
            {!article && <>loading</>}
        </>
    )
}