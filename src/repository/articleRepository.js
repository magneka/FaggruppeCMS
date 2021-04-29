import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';

export const getRandomImage = ({ width, height }) => {
    const url = `https://picsum.photos/${width}/${height}`;
    return (
        <img src={url} />
    )
}

const width = 200
const height = 150

export const getArticles = () => {
 
    let articles = []
    for (let i = 0; i < 10; i++) {        
        articles.push(getArticle(i))
    }

    return articles
}

export const getArticle = (id) => {

    let article = {
        articleId: id,
        headline: loremIpsum({ p: 1, avgWordsPerSentence: 4, avgSentencesPerParagraph: 1, startWithLoremIpsum: false, random: true })[0],
        overline: (id % 2) ? loremIpsum({ p: 1, avgWordsPerSentence: 8, avgSentencesPerParagraph: 1, startWithLoremIpsum: false, random: true })[0] : '',
        tagline: (id % 3) ? loremIpsum({ p: 1, avgWordsPerSentence: 8, avgSentencesPerParagraph: 1, startWithLoremIpsum: false, random: true })[0] : '',
        bodytext: loremIpsum({ p: 10, avgWordsPerSentence: 12, avgSentencesPerParagraph: 12, startWithLoremIpsum: true, random: true }),
        imageUri: `https://picsum.photos/id/${id * 10}/${width}/${height}`,
        caption: 'caption'
    }
    
    return article
}