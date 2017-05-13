// This is where it all goes :)
var span = document.getElementsByTagName("span")[0];
var texts = [" de payer votre loyer", " aucun anniversaire", " de rendre vos clés"]

var showSentences = function() {
  texts.forEach(function(text, index, arr){
    setTimeout(function() {
      span.style.webkitAnimation = 'none';
      setTimeout(function() {
          span.style.webkitAnimation = '';
      }, 01);
      span.innerHTML = text;

      if (index == arr.length - 1) {
        setTimeout(showSentences, 5000);
      }
    }, index * 5000);
  });
};

showSentences();
