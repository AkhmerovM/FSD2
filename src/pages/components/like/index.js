const SELECTORS = {
    likeBlock: '.like-block',
    likeValue: '.like-block__value',
    likeCheckMark: '.like-block__checkmark',
    likeInput: '.like-block__like',
};

$(document).ready(function () {
    const likeBlocks = $(SELECTORS.likeBlock);
    for (let i = 0; i < likeBlocks.length; i++) {
        const $checkmark = $(likeBlocks[i]).find(SELECTORS.likeCheckMark);
        const valueSpan = $(likeBlocks[i]).find(SELECTORS.likeValue)[0];
        const input = $(likeBlocks[i]).find(SELECTORS.likeInput)[0];
        $checkmark
            .off('click')
            .on('click', function () {
                const value = +valueSpan.innerText;
                if($(input).prop("checked")) {
                    valueSpan.innerText = value - 1;
                } else {
                    valueSpan.innerText = value + 1;
                }
            })

    }
});