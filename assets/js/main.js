$(function () {
  $("#page").css("cssText", "opacity: 1");

  /* WOW.js */
  new WOW().init();
});

/*plus-minus-input*/
$(document).ready(function () {
  $("#minus").click(function () {
    var $input = $(this).parent().find("#qtyInput");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    if (count == 1) {
      $("#minus").attr("disabled", "disabled");
    }
    return false;
  });
  $("#plus").click(function () {
    var $input = $(this).parent().find("#qtyInput");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    $("#minus").removeAttr("disabled");
    return false;
  });
});

let passSwitches = document.querySelectorAll(".show-pass");
for (const switchItem of passSwitches) {
  function passInput() {
    if ($(switchItem).hasClass("fa-eye-slash")) {
      $(switchItem).addClass("fa-eye");
      $(switchItem).removeClass("fa-eye-slash");
      $(switchItem).siblings("input").attr("type", "text");
    } else {
      $(switchItem).addClass("fa-eye-slash");
      $(switchItem).removeClass("fa-eye");
      $(switchItem).siblings("input").attr("type", "password");
    }
  }
  passInput();
  $(switchItem).on("click", () => {
    passInput();
  });
}
