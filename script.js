$(document).ready(function () {
    $('.btn-menu').on('click', function () {
        if ($('.btn-menu').hasClass('active')) {
            $('body').removeClass('open-menu');
            $('.btn-menu').removeClass('active');
        } else {
            $('body').addClass('open-menu');
            $('.btn-menu').addClass('active');
        }
    })
    $('#chapter').on('change', function () {
        var page = $(this).val();
        location.href = './chuong' + page + '.html';
    })
    $('.send').on('click', function () {
        var totalq = $('.question').children().length
        point = 0;
        if ($('.quest1 input:checked').val() == 'true') {
            point += 1;
        }
        if ($('.quest2 input:checked').val() == 'true') {
            point += 1;
        }
        if ($('.quest3 input:checked').val() == 'true') {
            point += 1;
        }
        $('.result').html("Điểm của bạn là: " + Math.round((point / totalq) * 100) + "%. Đáp án là 1.B 2.B 3.D");
    });
});