$(document).ready(function () {

  $(".btn-cat").click(function () {
    $(".cat").removeClass("show");
    $(".btn-cat").removeClass("btn-active");
    $(this).addClass("btn-active");
  });

  $("#van-link").click(function () {
    $("#van").addClass("show");
  });

  $("#awd-link").click(function () {
    $("#awd").addClass("show");
  });

  $("#car-link").click(function () {
    $("#car").addClass("show");
  });

});