import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getArticles } from '../../repository/articleRepository'

const ArticleStyled = styled.div`
  display: grid;
  background-color: navy;
  display: grid;
  //height: 200px;
  background-color: white;
  border-bottom: 2px solid black;
  grid-column: ${props => props.col || 1} / span ${props => props.span || 1};

  // Responsive styling
  @media (max-width: 700px) {
    grid-column: 1 / span 1;
  }
`

// Går over 1 kolonner av tre
const ArticleComponent = (props) => {    
    return (
        <ArticleStyled col={props.col} span={1}>
            <img src={props.imageUri} />
            <span>{props.caption}</span>
            <h3>{props.overline}</h3>
            <h1>{props.headline} {props.col}</h1>
            <h2>{props.tagline}tl</h2>            
        </ArticleStyled>
    )
} 

export const FrontpageContainer = () => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        setArticles(getArticles())
    }, [])
    
    let currentColumn = 0;
    
    return (
        <>            
            {articles && articles.map((article, i) => {               
                currentColumn++
                if (currentColumn === 4) {
                    currentColumn = 1
                }
                return (
                    <ArticleComponent
                        imageUri={article.imageUri}
                        caption={article.caption}
                        overline={article.overline}
                        headline={article.headline}
                        tagline={article.tagline}
                        body={article.body}
                        col={currentColumn+1}
                    />
                )

            })}           
        </>
    )
}