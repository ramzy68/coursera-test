(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";
byeSpeaker.name = "";
byeSpeaker.speak = function (){
  console.log(speakWord + " " + byeSpeaker.name);
}

window.byeSpeaker = byeSpeaker;
})(window);