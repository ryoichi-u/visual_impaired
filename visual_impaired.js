(function (callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")(jQuery.noConflict(true));";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);

})(function ($) {
  $('img').hover(function() {
    var ssu = new SpeechSynthesisUtterance();
    var alt = $(this).attr('alt');
    ssu.text = alt;
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }) 
});
