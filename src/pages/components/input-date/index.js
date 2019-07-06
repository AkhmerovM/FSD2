import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.min.css';

const SELECTORS = {
    block: '.input-date-block',
    input: '.input-date-block__input',
    clear: '.datepicker--button[data-action="clear"]',
    hide: '.datepicker--button[data-action="hide"]',
};
$(document).ready(function() {
    const $blocks = $(SELECTORS.block);
    for (let i = 0; i < $blocks.length; i++) {
        const $block = $($blocks[i]);
        const $input = $block.find($(SELECTORS.input));
        const $datepicker = $input.datepicker(options);
        const okButton = '<span class="datepicker--button" data-action="hide">Применить</span>';
        $(SELECTORS.clear).each(function (index) {
            $(okButton).insertAfter($(this));
        });
        const $DataDatepicker = $datepicker.data('datepicker');
        $block.find(SELECTORS.hide)
            .off('click')
            .on('click', function (e) {
                $DataDatepicker.hide();
            })
    }
});

let options = {
    clearButton: true,
    nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" fill="#BC9CFF" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
    prevHtml: '<svg xmlns="http://www.w3.org/2000/svg" fill="#BC9CFF" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
    onRenderCell: function (date) {
        const currentDate = date.getDate();
        // Добавляем вспомогательный элемент, если число содержится в `eventDates`
            return {
                html: currentDate + '<div class="input-date-block__date"></div>'
        }
    },
    navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },
};