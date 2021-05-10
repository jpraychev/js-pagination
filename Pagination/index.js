// Get total number of pages
var products = $('.grid-uniform').children()
var productArray = [...products]

// State
// Number of products
const numberOfProducts = products.length
var numberPerPage = 1
var currentPage = 1

// Number of pages
const numberOfPages = Math.ceil(numberOfProducts/numberPerPage)

buildPagination(currentPage, numberOfPages)

function buildPagination(currPage, numPages) {
    // If number of pages is bigger than 3
    // Render first three pages and the last
    // How to update the pages when clicked?
    $('.paginator').empty()
    if (currPage <= 1) {
        currPageNum = parseInt(currPage)+1
    } else if (currPage >= numPages) {
        currPageNum = parseInt(numPages)-1
    } else {
        currPageNum = parseInt(currPage)
    }
    $('.paginator').append(`<button class="page" type="button" value="1" > &#171; First </button>`)
    for (let i=-1; i<2; i++) {
        $('.paginator').append(`<button class="page" type="button" value="${currPageNum+i}" > ${currPageNum+i} </button>`)
    }
    $('.paginator').append(`<button class="page" type="button" value="${numPages}" > Last &#187; </button>`)
}

$('.paginator').on('click', 'button', function() {
    var page = $(this).val()
    buildPagination(page, numberOfPages)
    buildPage(page)
});

function buildPage(currPage) {
    var trimStart = (currPage-1)*numberPerPage
    var trimEnd = trimStart + numberPerPage
    $('.grid-uniform').empty().append(productArray.slice(trimStart, trimEnd));
}