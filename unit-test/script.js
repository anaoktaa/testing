const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com',
    'myfavoritecats2.com'
];

const googleSearchFunction = (searchInput, db) => {
    const matches = db.filter((website) => website.includes(searchInput));
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

// console.log(googleSearchFunction('cat', googleDatabase));

module.exports = googleSearchFunction;