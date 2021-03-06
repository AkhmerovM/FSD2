const SELECTORS = {
    pagination: '.pagination-block',
};

$(document).ready(function () {
    const pagBlocks = $(SELECTORS.pagination);
    for (let i = 0; i < pagBlocks.length; i++) {
        $(pagBlocks[i]).pagination({
            items: 180,
            itemsOnPage: 12,
            cssStyle: 'light-theme',
            displayedPages: 3,
            edges: 1,
            nextText: '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
            prevText: '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',

        })
    }
});
