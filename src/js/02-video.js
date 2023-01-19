import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_TIME = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

const currentTime = localStorage.getItem(PLAYER_TIME);
console.log(currentTime);



if (currentTime)
  player
    .setCurrentTime(currentTime)
    .then(seconds =>
          console.log(`The video set at the  ${seconds}-time.`))
    .catch(error => {
      switch (error.name) {
        case 'RangeError':
          console.log(
            'The time was less than 0 or greater than the video’s duration'
          );
          break;

        default:
          console.log(
            'Some other error occurred'
          );
          break;
      }
    });

const onplay = function (data) {

  localStorage.setItem(PLAYER_TIME, data.seconds);
};

player.on('timeupdate', throttle(onplay, 2000));