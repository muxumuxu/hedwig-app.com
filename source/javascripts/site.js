// This is where it all goes :)

// Change sentence
var span = document.getElementsByTagName("span")[0];
var texts = ["<span class='fade'> de payer votre loyer</span>", "<span class='fade'> aucun anniversaire</span>", "<span class='fade'> où sont vos clés</span>"]

var showSentences = function() {
  texts.forEach(function(text, index, arr){
    setTimeout(function() {
      span.innerHTML = text;

      if (index == arr.length - 1) {
        setTimeout(showSentences, 7000);
      }
    }, index * 7000);
  });
};

showSentences();

// Change device
var device = document.getElementById("device");
var img_classes = ["iphone", "android", "mukia"];

var showDevice = function() {
  img_classes.forEach(function(img_class, index, arr){
    setTimeout(function() {
      device.classList.add(img_class);
      device.classList.remove(img_classes[index -1]);
        if (index == 0) {
          device.classList.remove("mukia");
        }

      if (index == arr.length - 1) {
        setTimeout(showDevice, 7000);
      }
    }, index * 7000);
  });
};

showDevice();
