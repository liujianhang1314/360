/**
 * Created by Administrator on 2017/6/18.
 */
$(".closeBtn").click(function () {
    $(this).parent().parent().hide();
});
$(".toggle_city").click(function () {
    $(".cityList").show();
});