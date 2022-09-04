import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.hasOwnProperty('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
const timing =  throttle((event) => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000);
player.on('timeupdate', (event) => timing(event));

