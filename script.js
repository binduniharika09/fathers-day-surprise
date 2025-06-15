const photos = [
  'images/photo1.jpeg',
  'images/photo2.jpeg',
  'images/photo3.jpeg',
  'images/photo4.jpeg',
  'images/photo5.jpeg',
  'images/photo6.jpeg',
  'images/photo7.jpeg',
  'images/photo8.jpeg',
  'images/photo9.jpeg',
  'images/photo10.jpeg'
];

const captions = [
  "నా జీవితంలోని మొదటి హీరో – నాన్న",
  "మీ నవ్వే మా ఆనందం",
  "మీ ప్రేమ అనితరసాధ్యం",
  "జీవితానికి మార్గదర్శకుడు",
  "మీ నీడలోనే మా వెలుగు",
  "ఆ శ్రమ, ఆ త్యాగం – మరువలేను",
  "ప్రతి అడుగు వెనుక మీ మద్దతే ఉంది",
  "మీ మాటలే ప్రేరణ",
  "మీ ఆలోచనలు స్ఫూర్తిదాయకం",
  "ప్రపంచంలో బెస్ట్ నాన్న – మీరే!"
];

let currentIndex = 0;

function startSurprise() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('slideshow-container').style.display = 'flex';
  document.getElementById('background-music').play();
  showNextPhoto();
}

function showNextPhoto() {
  if (currentIndex < photos.length) {
    const slideshow = document.getElementById('slideshow');
    const caption = document.getElementById('caption');
    slideshow.style.opacity = 0;

    setTimeout(() => {
      slideshow.src = photos[currentIndex];
      caption.textContent = captions[currentIndex];
      slideshow.style.opacity = 1;
      currentIndex++;
      setTimeout(showNextPhoto, 3500);
    }, 800);
  } else {
    document.getElementById('background-music').pause();
    document.getElementById('slideshow-container').style.display = 'none';
    showCountdown();
  }
}

function showCountdown() {
  document.getElementById('countdown-screen').style.display = 'flex';
  document.getElementById('countdown-music').play();

  let count = 5;
  const countdown = document.getElementById('countdown');
  const interval = setInterval(() => {
    count--;
    countdown.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      document.getElementById('countdown-screen').style.display = 'none';
      showVideo();
    }
  }, 1000);
}

function showVideo() {
  document.getElementById('video-section').style.display = 'block';
  document.getElementById('surprise-video').play();
}

function restart() {
  currentIndex = 0;
  document.getElementById('video-section').style.display = 'none';
  startSurprise();
}
// No change in top part

function showCountdown() {
  document.getElementById('countdown-screen').style.display = 'flex';
  const countdownMusic = document.getElementById('countdown-music');
  countdownMusic.play();

  let count = 5;
  const countdown = document.getElementById('countdown');
  const interval = setInterval(() => {
    count--;
    countdown.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      countdownMusic.pause(); // 🔧 Stop music before video starts
      document.getElementById('countdown-screen').style.display = 'none';
      showVideo();
    }
  }, 1000);
}