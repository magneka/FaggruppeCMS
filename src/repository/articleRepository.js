import faker from 'faker'

const width = 980
const height = 400

export const getArticles = () => {
 
    let articles = []
    for (let i = 0; i < 10; i++) {        
        articles.push(getArticle(i))
    }

    return articles
}

export const getArticle = (id) => {

    /*
        
    var dob = faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)"));
    dob = dob.getFullYear() + "-" + (dob.getMonth()+1) + "-" + dob.getDate();  // First month is "1"
    $('#inputName').attr("value", faker.name.findName(firstName, lastName));
    // $('#inputGender').attr("value", faker.name.gender());
    $('#inputDob').attr("value", dob);
    $('#inputStreetAddress').attr("value", faker.address.streetAddress());
    $('#inputCityStateZip').attr("value", faker.address.city() + ", " + faker.address.stateAbbr() + " " + faker.address.zipCode());
    $('#inputCountry').attr("value", faker.locales[faker.locale].address.default_country || "");
    $('#inputPhone').attr("value", faker.phone.phoneNumber());
    $('#inputUsername').attr("value", faker.internet.userName(firstName, lastName));
    $('#inputPassword').attr("value", faker.internet.password());
    $('#inputEmail').attr("value", faker.internet.email(firstName, lastName));
    $('#imageAvatar').attr("src", faker.internet.avatar());
    
    */

    faker.locale = 'nb_NO'

    let article = {
        articleId: id,
        overline: (id % 2) ? faker.lorem.sentence() : '',
        headline: faker.lorem.sentence(),
        tagline: (id % 3) ? faker.lorem.sentence() : '',
        bodytext: faker.lorem.paragraphs(),
        imageUri: `https://picsum.photos/id/${id * 10}/${width}/${height}`,
        author: `${faker.internet.email()}`,
        photographer: `Foto: (c) ${faker.name.firstName()} ${faker.name.lastName()}, (${faker.internet.email()})`,
        updated: faker.date.recent()
    }
    
    return article
}