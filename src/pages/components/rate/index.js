import '../../../style/style.less';

$(document).ready(function () {
    const $stars = $('.rating-block');
    for (let i = 0; i< $stars.length; i++) {
        const starCount = $($stars[i]).data('stars');
        $($stars[i]).stars({
            starClass: 'star-gradient',
            stars: starCount,
            color:''
        });
    }
});

