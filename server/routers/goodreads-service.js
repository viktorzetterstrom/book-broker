const qs = require('querystring');
const convert = require('xml-js');
const fetch = require('node-fetch');

const base_url = 'https://www.goodreads.com/search/index.xml?';

const createQueryString = (query, page = 1, field = 'all') => base_url + qs.stringify({
  key: process.env.GOODREADS_KEY,
  q: query,
  page,
  field
});

const getBooks = (query, page, field) => {
  const url = createQueryString(query, page, field);
  const conversionOptions = {
    compact: true,
    ignoreAttributes: true,
    trim: true,
  };
  return fetch(url)
    .then(response => response.text())
    .then(text => convert.xml2js(text, conversionOptions))
    .then(data => data.GoodreadsResponse.search.results.work)
    .then(results => results
      .map(r => ({
        workId: r.id._text,
        publicationYear: r.original_publication_year._text,
        averageRating: r.average_rating._text,
        bookTitle: r.best_book.title._text.replace(/\(.*\)/, ''),
        authorName: r.best_book.author.name._text,
        authorId: r.best_book.author.id._text,
        bookImgUrl: r.best_book.image_url._text
      }))
    );
};

module.exports = { getBooks };

