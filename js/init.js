(function ($) {
  $(function () {

    $('.parallax').parallax();

    $('.modal').modal();

     $('.slider').slider();

    // Pushpin Demo Init
    if ($('.pushpin-demo-nav').length) {
      $('.pushpin-demo-nav').each(function () {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });
    }

  }); 

  
  var options = [
    {
      selector: '#Precios', offset: 50, callback: function (el) {
        $('.tap-target').tapTarget('open');
      }
    }
  ];
  Materialize.scrollFire(options);
})(jQuery); // end of jQuery name space
