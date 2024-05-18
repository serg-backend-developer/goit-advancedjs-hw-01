import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerRef = document.querySelector('#vimeo-player');

const localStorageKey = 'videoplayer-current-time';

const savedTime = Number(localStorage.getItem(localStorageKey));

const player = new Vimeo(playerRef);

if (savedTime) player.setCurrentTime(savedTime);

const handleTime = ({ seconds }) => {
  localStorage.setItem(localStorageKey, seconds);
};

player.on('timeupdate', throttle(handleTime, 1000));