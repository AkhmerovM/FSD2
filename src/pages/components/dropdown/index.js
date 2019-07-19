import '../../../style/style.less';

$(document).ready(function () {
    const $dropdowns = $('.dropdown-block');
    for (let i = 0; i< $dropdowns.length; i++) {
        const elements = $($dropdowns[i]).data('elements');
        elements.forEach(function (item) {
            const li = document.createElement('li');
            li.className = 'dropdown-block__item';
            li.innerText = item;
            $dropdowns[i].appendChild(li);
        })
    }
});

