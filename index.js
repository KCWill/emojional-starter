
var happyMessage = ['Woot woot!', "You're awesome!", 'Your smile just cheered me up!'];

var sillyMessage = ['Yaaaaaaaaas!', 'Sounds...good?', 'Interesting Response'];

var sadMessage = ['Keep your head up!', 'What can I do?','Do you want to talk?'];

function randomizer(message) {
  var randomizer = Math.random() * 3;
  if (randomizer < 1) {
    return message[0]
  } else if (randomizer > 1 && randomizer < 2){
    return message[1]
  } else return message[2]
}

function happyClick() {
  document.querySelector('.message').innerHTML = randomizer(happyMessage);

}

function sillyClick() {
  document.querySelector('.message').innerHTML = randomizer(sillyMessage);
}

function sadClick() {
  document.querySelector('.message').innerHTML = randomizer(sadMessage);
}
