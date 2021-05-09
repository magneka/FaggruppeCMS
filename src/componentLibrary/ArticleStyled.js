import styled from 'styled-components'

export const ArticleStyled = styled.div`
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    
    color: rgb(38, 41, 42);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 0px 0px;
        
    display: grid;
    grid-column: ${props => props.col || 1} / span ${props => props.span || 1};

  .headers {
      padding: 8px 20px;      
  }

  .caption {      
      height: 20px;
      line-height: 20px;
      //background-color: lightblue;
      margin-bottom: 0px;
      margin-top: 0px;

  }

  .overline {
    font-family: sans-serif;
    font-size: ${props => props.fontSizes.overline || '20px'};
    line-height: ${props => props.fontSizes.overline || '20px'};
    //font-size: 20px;     
    font-weight: 700;
    margin-bottom: 0px;
    margin-top: 10px;
  }

  .headline {      
    font-family: serif;
    //font-size: 40px;
    //line-height: 40px;
    font-size: ${props => props.fontSizes.headline || '54px'};
    line-height: ${props => props.fontSizes.headline || '54px'};
    font-weight: 700;    
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .tagline {     
    font-family: sans-serif;     
    //font-size: 16px;
    font-size: ${props => props.fontSizes.tagline || '16px'};
    line-height: ${props => props.fontSizes.tagline || '16px'};
    margin-bottom: 10px;
    margin-top: 10px;
  }

  a:link {
    color: black;
    text-decoration: none;
    }

    /* visited link */
    a:visited {
    color: black;
    text-decoration: none;
    }

    /* mouse over link */
    a:hover {
    color: black;
    text-decoration: underline;
    }

    /* selected link */
    a:active {
    color: blac;
    text-decoration: underline;
    }


>img {
  }

  // Responsive styling
  @media (max-width: 700px) {
    grid-column: 1 / span 1;
  }
`


export const getFonts = (cols) => {
    switch (cols) {
        case 6:
            return { overLine: '22px', headline: '54px', tagline: '16px' }
            break;

        case 4:
            return { overLine: '22px', headline: '45px', tagline: '16px' }
            break;

        case 3:
            return { overLine: '22px', headline: '44px', tagline: '16px' }
            break;

        case 2:
            return { overLine: '22px', headline: '39px', tagline: '16px' }
            break;

        default:
            break;
    }
}