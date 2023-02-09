/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
const {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
} = require('./handler');

const routes = [{
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        // eslint-disable-next-line linebreak-style
        handler: updateBook,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook,
    },
];

// eslint-disable-next-line no-undef
module.exports = routes;