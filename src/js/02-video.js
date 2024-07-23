import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const storeTimestamp = throttle((currentTime) => {
    localStorage.setItem("videoplayer-current-time", currentTime.seconds)
}, 1000);

player.on('timeupdate', function(currentTime) { 
    storeTimestamp(currentTime);    
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const timeStamp = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(timeStamp).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
   console.log("There was no initial timestamp.")
});