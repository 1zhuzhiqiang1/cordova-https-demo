/**
 * Created by admin on 2017/7/22.
 */
(function (myApp, $$) {
    myApp.onPageBeforeInit('https', function (page) {
        $$('#btn_post').click(function () {
            request();
        });
    });

    function request() {
        // var url = 'http://47.93.197.48:8080/lolapp/video/duowan';
        var url = 'https://47.93.197.48:8443/lolapp/video/duowan';
        $$.get(url, {page: 1}, function (data, status, xhr) {
            $$('#content').html(data);
        });
    }
})(myApp, $$);