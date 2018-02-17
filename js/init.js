(function ($) {
  $(function () {




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
      },
      {
        selector: '#PanelEnPractica', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#PanelPerfil', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
    ];
    Materialize.scrollFire(options);

    $('#orientancion').css('height', parseFloat($('#apoyo').css('height')));
    $('#relajacion').css('height', parseFloat($('#eficacia').css('height')));
    $('#psicoterapeuta').css('height', parseFloat($('#coach').css('height')));
    $('#PerfilEstudios').css('height', parseFloat($('#PerfilDescripcion').css('height')));
    $('#PerfilFinal').css('height', parseFloat($('#PerfilProfesional').css('height')));
    $('.parallax').parallax();
    $('.slider').slider();

  });

})(jQuery); // end of jQuery name space
