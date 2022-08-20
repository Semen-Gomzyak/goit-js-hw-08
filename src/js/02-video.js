import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Vimeo.Player(iframeEl);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
  console.log(localStorage.getItem('videoplayer-current-time'))
};