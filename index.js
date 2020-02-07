
var happyMessage = ['Woot woot!', "You're awesome!", 'Your smile just cheered me up!'];

var sillyMessage = ['Yaaaaaaaaas!']

var sadMessage = 'Keep your head up!'



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


boop
