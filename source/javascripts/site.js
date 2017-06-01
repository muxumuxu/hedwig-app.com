// This is where it all goes :)

var interval = 7000;

// Change sentence
var span = document.getElementsByTagName("span")[0];
var texts = ["<span class='fade'> de payer votre loyer</span>", "<span class='fade'> aucun anniversaire</span>", "<span class='fade'> où sont vos clés</span>"]

var showSentences = function() {
  texts.forEach(function(text, index, arr) {
    setTimeout(function() {
      span.innerHTML = text;

      if (index == arr.length - 1) {
        setTimeout(showSentences, interval);
      }
    }, index * interval);
  });
};

showSentences();

var iPhoneDevice = document.getElementById("iphone");
var iPhoneMessage = document.getElementById("iphone_message");
var androidDevice = document.getElementById("android");
var androidMessage = document.getElementById("android_message");
var mukiaDevice = document.getElementById("mukia");
var mukiaMessage = document.getElementById("mukia_message");

var devices = [[iPhoneDevice, iPhoneMessage], [androidDevice, androidMessage], [mukiaDevice, mukiaMessage]];

var showDevices = function() {
  devices.forEach(function(deviceProperties, index, arr) {
    setTimeout(function() {
      var device = deviceProperties[0];
      var deviceMessage = deviceProperties[1];

      device.style.display = "block";
      deviceMessage.classList.add("bubble_fade");

      if (index > 0) {
        var previousDevice = arr[index - 1][0];
        previousDevice.style.display = "none";
      } else {
        var latestDevice = arr[arr.length - 1][0];
        latestDevice.style.display = "none";
      }

      if (index == arr.length - 1) { // Restart the animation
        setTimeout(showDevices, interval);
      }
    }, index * interval);
  });
};

showDevices();
