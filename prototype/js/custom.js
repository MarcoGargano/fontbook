$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(".check-father").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});


$(".input-father").keyup(function() {
  $(".input-child").text($(".input-father").val());
})
