(function ($) {
  $(function () {

    $('#orientancion').css('height', parseFloat($('#apoyo').css('height')));
    $('#relajacion').css('height', parseFloat($('#eficacia').css('height')));
    $('.parallax').parallax();
    $('.slider').slider();


    var options = [
      {

        selector: '#PanelBienestar', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#PanelNecesidades', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      }
    ];
    Materialize.scrollFire(options);

  });

})(jQuery); // end of jQuery name space
