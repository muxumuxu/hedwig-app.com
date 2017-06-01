// This is where it all goes :)

var interval = 7000;

// Change sentence
var iphoneSpan = document.getElementById("iphone_sentence");
var androidSpan = document.getElementById("android_sentence");
var mukiaSpan = document.getElementById("mukia_sentence");
var spans = [iphoneSpan, androidSpan, mukiaSpan];

var showSentences = function() {
  spans.forEach(function(span, index, arr) {
    setTimeout(function() {
      span.style.display = "inline";

      if (index > 0) {
        var previousSpan = arr[index - 1];
        previousSpan.style.display = "none";
      } else {
        var latestSpan = arr[arr.length - 1];
        latestSpan.style.display = "none";
      }

      if (index == arr.length - 1) { // Restart the animation
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
