import React, { useEffect, useState } from 'react';
import { getArticles } from '../../repository/articleRepository'
import { ArticleStyled, getFonts } from '../../componentLibrary/ArticleStyled'
import { Link } from 'react-router-dom';

const frontPageArticle = (article, col, span, i) => {
    let articleUri = `/article/${article.articleId}`
    return (
        <ArticleStyled col={col} span={span} fontSizes={getFonts(span)} key={i}>
            <Link to={articleUri}>
                <img src={article.imageUri} width="100%" />
                <div className="headers">
                    {article.overline && <><p className="overline">{article.overline}</p></>}
                    {article.headline && <><p className="headline">{article.headline}</p></>}
                    {article.tagline && <><p className="tagline">{article.tagline}</p></>}
                </div>
            </Link>
        </ArticleStyled>
    )
}

export const FrontpageContainer = () => {

    function* placementGenerator() {

        const cols = [2, 2, 6, 2, 5, 2, 4]
        const spans = [6, 4, 2, 3, 3, 2, 4]

        let index = -1;
        while (true) {

            index++;
            if (index === cols.length) {
                index = 0
            }

            yield { cols: cols[index], span: spans[index], index: index }
        }
    }
    
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        setArticles(getArticles())
    }, [])
    
    var articlePlacementGenerator = placementGenerator()
    
    return (
        <>
            {articles && articles.map((article, i) => {                
                // Get col to start, and cols to span
                let colplacement = articlePlacementGenerator.next().value
                
                return (frontPageArticle(article, colplacement.cols, colplacement.span, i))
            })}
            
        </>
    )
}