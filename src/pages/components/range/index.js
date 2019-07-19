const SELECTORS = {
  block: '.range-block',
  range: '.range-block__range',
  value: '.range-block__value',
};

$(document).ready (function() {
    const ranges = $(SELECTORS.block);
    for (let i = 0; i < ranges.length; i++) {
        const $range = $(ranges[i]).find(SELECTORS.range);
        $range.slider({
            range: true,
            min: 0,
            max: 15000,
            values: [5000, 10000],
            slide: function (event, ui) {
                $(SELECTORS.value).html(numberWithSpaces(ui.values[0]) + "<i class='fa fa-ruble'></i> - " + numberWithSpaces(ui.values[1]) + "<i class='fa fa-ruble'></i>")
            }
        });
        $(SELECTORS.value).html(numberWithSpaces($range.slider("values", 0 )) + "<i class='fa fa-ruble'></i> - " + numberWithSpaces($range.slider("values", 1)) + '<i class=\'fa fa-ruble\'></i>');
    }
});
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
