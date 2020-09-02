const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        return {
            count: data.count,
            results: data.results
        }
    })
    .catch(err => {
        console.log('Error', err);
    });
}

const getPeople = async fetch => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results
    }
}
getPeoplePromise(fetch);

module.exports = {
    getPeople,
    getPeoplePromise
};