// This is where it all goes :)

// Change sentence
var span = document.getElementsByTagName("span")[0];
var texts = ["<span class='fade'> de payer votre loyer</span>", "<span class='fade'> aucun anniversaire</span>", "<span class='fade'> de rendre vos clés</span>"]

var showSentences = function() {
  texts.forEach(function(text, index, arr){
    setTimeout(function() {
      span.innerHTML = text;

      if (index == arr.length - 1) {
        setTimeout(showSentences, 5000);
      }
    }, index * 5000);
  });
};

showSentences();

// Change device
var device = document.getElementsByClassName("device");
var images = ["phone-iphone.svg", "phone-android.svg", "phone-muxia.svg"]
