'use strict'

module.exports = {
    list: {
        scope: 'div.book-block-outer div.book-block-outer',
        selector: [
            {
                title: '@data-product-title',
                url: '.book-block-overlay > a@href'
            }
        ]
    },
    details: {
        scope: 'span[itemprop=isbn]'
    }
}